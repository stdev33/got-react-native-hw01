import { StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { logoutUser } from "../redux/userSlice";

import { colors, header } from "../styles/global";
import UserHeader from "../components/UserHeader";
import PostCard from "../components/PostCard";
import IconButton from "../components/IconButton";
import LogoutIcon from "../assets/icons/log-out.svg";
import { PostsScreenUser as user } from "../mok/mok";

export default function PostsScreen({ navigation }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
      navigation.replace("Login");
    } catch (error) {
      alert("Помилка", "Не вдалося вийти з системи. Спробуйте ще раз.");
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Публікації",
      headerStyle: header.headerStyle,
      headerTitleStyle: header.headerTitleStyle,
      headerRightContainerStyle: header.headerRightContainerStyle,
      headerTitleContainerStyle: header.headerTitleContainerStyle,
      headerRight: () => (
        <IconButton Icon={LogoutIcon} onPress={handleLogout} />
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
      {posts.map((post) => (
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
