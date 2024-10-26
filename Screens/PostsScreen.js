import { StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { colors, header } from "../styles/global";
import UserHeader from "../components/UserHeader";
import PostCard from "../components/PostCard";
import IconButton from "../components/IconButton";
import LogoutIcon from "../assets/icons/log-out.svg";
import { PostsScreenUser as user } from "../mok/mok";

export default function PostsScreen({ navigation, route }) {
  const { newPost = null } = route.params || {};

  if (newPost) {
    user.posts.unshift(newPost);
  }

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

  const onLocationPress = (post) => {
    navigation.navigate("Map", { post });
  };

  return (
    <ScrollView style={styles.container}>
      <UserHeader user={user} />
      {user.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onCommentsPress={onCommentsPress}
          onLocationPress={onLocationPress}
        />
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
