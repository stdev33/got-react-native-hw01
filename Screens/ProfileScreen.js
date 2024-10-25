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

export default function ProfileScreen({ navigation }) {
  const user = {
    name: "Natali Romanova",
    email: "email@example.com",
    posts: [
      {
        id: 1,
        image: require("../assets/images/forest.png"),
        title: "Ліс",
        comments: 8,
        location: "Ivano-Frankivs'k Region, Ukraine",
        likesCount: 153,
      },
      {
        id: 2,
        image: require("../assets/images/black-sea-sunset.png"),
        title: "Захід на Чорному морі",
        comments: 3,
        location: "Ukraine",
        likesCount: 200,
      },
      {
        id: 3,
        image: require("../assets/images/venice.png"),
        title: "Старий будиночок у Венеції",
        comments: 50,
        location: "Italy",
        likesCount: 200,
      },
    ],
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
            <PostCard key={post.id} post={post} />
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
