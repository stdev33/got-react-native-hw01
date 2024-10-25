import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { useLayoutEffect, useState } from "react";

import { colors, header } from "../styles/global";
import CommentCard from "../components/CommentCard";
import IconButton from "../components/IconButton";
import BackIcon from "../assets/icons//arrow-left.svg";
import SendIcon from "../assets/icons/send.svg";

export default function CommentsScreen({ navigation, route }) {
  const post = route.params?.post;

  const [comments, setComments] = useState([
    {
      id: 1,
      avatar: require("../assets/images/user1.png"),
      text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
      date: "09 червня, 2020 | 08:40",
      userType: "user",
    },
    {
      id: 2,
      avatar: require("../assets/images/user2.png"),
      text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
      date: "09 червня, 2020 | 09:14",
      userType: "author",
    },
    {
      id: 3,
      avatar: require("../assets/images/user1.png"),
      text: "Could you share camera settings?",
      date: "09 червня, 2020 | 09:20",
      userType: "user",
    },
    {
      id: 4,
      avatar: require("../assets/images/user1.png"),
      text: "Thank you!",
      date: "09 червня, 2020 | 09:21",
      userType: "user",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [activeInput, setActiveInput] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Коментарі",
      headerStyle: header.headerStyle,
      headerTitleStyle: header.headerTitleStyle,
      headerLeftContainerStyle: header.headerLeftContainerStyle,
      headerTitleContainerStyle: header.headerTitleContainerStyle,
      headerLeft: () => (
        <IconButton Icon={BackIcon} onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const handleSendComment = () => {
    console.log("New comment: ", newComment);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image source={post.image} style={styles.postImage} />
      </TouchableWithoutFeedback>
      <ScrollView style={styles.commentsList}>
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </ScrollView>
      <View
        style={[
          styles.inputContainer,
          activeInput === "send_comment" && styles.inputActive,
        ]}
      >
        <TextInput
          placeholder="Коментувати..."
          placeholderTextColor={colors.placeholder}
          style={styles.textInput}
          onFocus={() => setActiveInput("send_comment")}
          onBlur={() => setActiveInput(null)}
          onChangeText={setNewComment}
        />
        <IconButton
          Icon={SendIcon}
          width={34}
          height={34}
          onPress={handleSendComment}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 32,
  },
  commentsList: {
    flex: 1,
  },
  inputContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: colors.black_primary,
    paddingVertical: 10,
  },
  inputActive: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
});
