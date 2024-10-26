import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";

import BgImage from "../assets/images/photo_bg.png";
import UserPhoto from "../assets/images/user-photo.png";
import { colors } from "../styles/global";
import RegistrationPhotoPicker from "../components/RegistrationPhotoPicker";
import IconButton from "../components/IconButton";
import PostCard from "../components/PostCard";
import LogoutIcon from "../assets/icons/log-out.svg";
import { ProfileScreenUser as user } from "../mok/mok";

export default function ProfileScreen({ navigation }) {
  const onCommentsPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  const onLocationPress = (post) => {
    navigation.navigate("Map", { post });
  };

  return (
    <ImageBackground source={BgImage} style={styles.container}>
      <View style={styles.contentWrapper}>
        <RegistrationPhotoPicker photo={UserPhoto} />
        <IconButton
          Icon={LogoutIcon}
          width={24}
          height={24}
          bgStyle={styles.logoutButton}
          onPress={() => navigation.replace("Login")}
        />

        <Text style={styles.userName}>{user.name}</Text>

        <ScrollView>
          {user.posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onCommentsPress={onCommentsPress}
              onLocationPress={onLocationPress}
            />
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  contentWrapper: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 147,
    paddingTop: 92,
    paddingBottom: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  logoutButton: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  userName: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    marginBottom: 33,
  },
});
