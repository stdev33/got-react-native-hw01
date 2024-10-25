import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import IconButton from "../components/IconButton";
import CommentIcon from "../assets/icons/message.svg";
import CommentAvailIcon from "../assets/icons/message-filled.svg";
import LikeIcon from "../assets/icons/thumbs-up.svg";
import LocationIcon from "../assets/icons/map-pin.svg";
import { colors } from "../styles/global";

export default function PostCard({ post, onCommentsPress }) {
  return (
    <View style={styles.container}>
      <Image source={post.image} style={styles.postImage} />
      <Text style={styles.postTitle}>{post.title}</Text>
      <View style={styles.postInfo}>
        <View style={styles.postInfoLeft}>
          <View style={styles.comments}>
            <IconButton
              Icon={post.comments > 0 ? CommentAvailIcon : CommentIcon}
              width={24}
              height={24}
              onPress={() => onCommentsPress?.(post)}
            />
            <Text
              style={[
                styles.commentCount,
                post.comments > 0 && styles.commentCountAvail,
              ]}
            >
              {post.comments}
            </Text>
          </View>
          {post.likesCount > 0 && (
            <View style={styles.comments}>
              <IconButton
                Icon={LikeIcon}
                width={24}
                height={24}
                iconFill={colors.orange}
                onPress={() => onCommentsPress?.(post)}
              />
              <Text
                style={[
                  styles.commentCount,
                  post.likesCount > 0 && styles.commentCountAvail,
                ]}
              >
                {post.likesCount}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.location}>
          <LocationIcon width={24} height={24} />
          <Text style={styles.locationName}>{post.location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  postTitle: {
    marginVertical: 8,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postInfoLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentCount: {
    marginLeft: 6,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.placeholder,
  },
  commentCountAvail: {
    color: colors.black_primary,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationName: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
    color: colors.black_primary,
  },
});
