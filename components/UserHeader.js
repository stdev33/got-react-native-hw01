import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { colors } from "../styles/global";

export default function UserHeader({ user }) {
  return (
    <View style={styles.container}>
      <Image source={user.photo} style={styles.userPhoto} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    fontSize: 13,
    fontFamily: "Roboto-Bold",
    color: colors.black_primary,
  },
  userEmail: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    color: colors.black_primary_80,
  },
});
