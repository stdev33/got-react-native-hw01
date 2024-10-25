import { StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { colors, header } from "../styles/global";
import UserHeader from "../components/UserHeader";
import PostCard from "../components/PostCard";
import IconButton from "../components/IconButton";
import LogoutIcon from "../assets/icons/log-out.svg";

const user = {
  name: "Natali Romanova",
  email: "email@example.com",
  photo: require("../assets/images/user-photo.png"),
};

const posts = [
  {
    id: 1,
    image: require("../assets/images/forest.png"),
    title: "Ліс",
    comments: 0,
    location: "Ivano-Frankivs'k Region, Ukraine",
  },
  {
    id: 2,
    image: require("../assets/images/black-sea-sunset.png"),
    title: "Захід на Чорному морі",
    comments: 0,
    location: "Ukraine",
  },
];

export default function PostsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Публікації",
      headerStyle: header.headerStyle,
      headerTitleStyle: header.headerTitleStyle,
      headerRightContainerStyle: header.headerRightContainerStyle,
      headerTitleContainerStyle: header.headerTitleContainerStyle,
      headerRight: () => (
        <IconButton
          Icon={LogoutIcon}
          onPress={() => navigation.replace("Login")}
        />
      ),
    });
  }, [navigation]);

  const onCommentsPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  return (
    <ScrollView style={styles.container}>
      <UserHeader user={user} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onCommentsPress={onCommentsPress} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
  },
});
