import { View, StyleSheet, Text, Image } from "react-native";

import { colors } from "../styles/global";

export default function CommentCard({ comment, isAuthor }) {
  const formattedDate =
    new Date(comment.date).toLocaleDateString("uk-UA") +
    " | " +
    new Date(comment.date).toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <View style={styles.commentCard}>
      {!isAuthor && <Image source={comment.avatar} style={styles.avatar} />}
      <View
        style={[
          styles.commentTextContainer,
          isAuthor
            ? styles.commentTextContainerAuthor
            : styles.commentTextContainerUser,
        ]}
      >
        <Text style={styles.commentText}>{comment.text}</Text>
        <Text
          style={[
            styles.commentDate,
            isAuthor ? styles.commentDateAuthor : styles.commentDateUser,
          ]}
        >
          {formattedDate}
        </Text>
      </View>
      {isAuthor && <Image source={comment.avatar} style={styles.avatar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  commentCard: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentTextContainer: {
    flex: 1,
    backgroundColor: colors.black__03,
    padding: 16,
  },
  commentTextContainerUser: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  commentTextContainerAuthor: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  commentText: {
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    lineHeight: 18,
    color: colors.black_primary,
    textAlign: "left",
  },
  commentDate: {
    fontSize: 12,
    color: colors.placeholder,
    marginTop: 8,
  },
  commentDateAuthor: {
    textAlign: "left",
  },
  commentDateUser: {
    textAlign: "right",
  },
});
