import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Location from "expo-location";
import React, { useLayoutEffect, useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebaseConfig";

import { addPost } from "../redux/postsSlice";
import { colors, header } from "../styles/global";
import Button from "../components/Button";
import CameraIcon from "../assets/icons/camera-gray.svg";
import EditCameraIcon from "../assets/icons/camera-white.svg";
import LocationIcon from "../assets/icons/map-pin.svg";
import DeleteIcon from "../assets/icons/trash.svg";
import IconButton from "../components/IconButton";
import BackIcon from "../assets/icons//arrow-left.svg";

export default function CreatePostsScreen({ navigation }) {
  const dispatch = useDispatch();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [locationText, setLocationText] = useState("");
  const [image, setImage] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Створити публікацію",
      headerStyle: header.headerStyle,
      headerTitleStyle: header.headerTitleStyle,
      headerLeftContainerStyle: header.headerLeftContainerStyle,
      headerTitleContainerStyle: header.headerTitleContainerStyle,
      headerLeft: () => (
        <IconButton Icon={BackIcon} onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    requestPermission();
  }

  const fetchLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      setLoading(false);
      return;
    }

    const attemptsCount = 5;
    let locationData = null;
    for (let attempt = 1; attempt <= attemptsCount; attempt++) {
      locationData = await Location.getCurrentPositionAsync({}).catch((error) =>
        console.log(`Attempt ${attempt} failed: `, error)
      );

      if (locationData) {
        console.log("Location fetched: ", locationData);
        setLocation(locationData);
        break;
      } else {
        console.log(`Retrying to fetch location, attempt ${attempt}`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    if (!locationData) {
      console.log("Could not fetch location after 3 attempts");
    }

    setLoading(false);
    return locationData;
  };

  const savePostToFirestore = async (newPost) => {
    try {
      const postRef = collection(db, "posts");
      const docRef = await addDoc(postRef, newPost);
      const postWithId = { ...newPost, id: docRef.id };
      dispatch(addPost(postWithId));
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const onPublish = async () => {
    if (loading) {
      return;
    }

    if (title && locationText && image) {
      Keyboard.dismiss();

      const locationData = await fetchLocation();

      const newPost = {
        image: { uri: image },
        title,
        comments: [],
        location: locationText,
        locationCoords: locationData ? locationData.coords : null,
        likesCount: 0,
        userId: auth.currentUser?.uid,
      };

      setLoading(true);
      await savePostToFirestore(newPost);
      setLoading(false);

      setImage(null);
      setTitle("");
      setLocationText("");

      navigation.navigate("Posts");
    }
  };

  const onClearImage = () => setImage(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {loading && <ActivityIndicator size="large" color={colors.orange} />}
        <View style={styles.imageContainer}>
          {image ? (
            <View style={styles.camera} ref={cameraRef}>
              <Image source={{ uri: image }} style={styles.capturedImage} />
              <IconButton
                Icon={EditCameraIcon}
                bgStyle={styles.imageButton}
                width={60}
                height={60}
                onPress={onClearImage}
              />
            </View>
          ) : (
            <CameraView style={styles.camera} ref={cameraRef}>
              <IconButton
                Icon={CameraIcon}
                bgStyle={styles.imageButton}
                width={60}
                height={60}
                onPress={async () => {
                  if (cameraRef) {
                    const photo = await cameraRef.current.takePictureAsync();
                    setImage(photo.uri);
                  }
                }}
              />
            </CameraView>
          )}
        </View>
        {image ? (
          <Text style={styles.supportingText}>Редагувати фото</Text>
        ) : (
          <Text style={styles.supportingText}>Завантажте фото</Text>
        )}
        <TextInput
          placeholder="Назва..."
          placeholderTextColor={colors.placeholder}
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.locationContainer}>
          <IconButton
            Icon={LocationIcon}
            width={24}
            height={24}
            onPress={() => console.log("Location")}
          />
          <TextInput
            placeholder="Місцевість..."
            placeholderTextColor={colors.placeholder}
            style={styles.locationInput}
            value={locationText}
            onChangeText={setLocationText}
          />
        </View>
        <Button
          text={"Опублікувати"}
          onPress={onPublish}
          enabled={title && locationText && image && !loading}
        />
        <View style={styles.deleteBtnContainer}>
          <IconButton
            Icon={DeleteIcon}
            width={70}
            height={40}
            onPress={onClearImage}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: colors.white,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  capturedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light_gray,
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    marginBottom: 8,
  },
  imageButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  supportingText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.placeholder,
    textAlign: "left",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.border_gray,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.black_primary,
    marginTop: 32,
    marginBottom: 16,
  },
  locationContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border_gray,
    marginBottom: 32,
  },
  locationInput: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.black_primary,
    flex: 1,
  },
  deleteBtnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 34,
    alignItems: "center",
  },
});
