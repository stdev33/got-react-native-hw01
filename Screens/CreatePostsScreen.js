import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";

import { colors, header } from "../styles/global";
import Button from "../components/Button";
import CameraIcon from "../assets/icons/camera-gray.svg";
import LocationIcon from "../assets/icons/map-pin.svg";
import DeleteIcon from "../assets/icons/trash.svg";
import IconButton from "../components/IconButton";
import BackIcon from "../assets/icons//arrow-left.svg";

export default function CreatePostsScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
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

  const onPublish = () => {
    console.log(`Title: ${title}, Location: ${location}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <IconButton
            Icon={CameraIcon}
            bgStyle={styles.imageButton}
            width={60}
            height={60}
            onPress={() => console.log("Camera")}
          />
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
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <Button text={"Опублікувати"} onPress={onPublish} enabled={false} />
        <View style={styles.deleteBtnContainer}>
          <IconButton
            Icon={DeleteIcon}
            width={70}
            height={40}
            onPress={() => console.log("Cleanup")}
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
