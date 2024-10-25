import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import IconButton from "./IconButton";
import AddIcon from "../assets/icons/add.svg";
import RemoveIcon from "../assets/icons/remove.svg";
import { colors } from "../styles/global";

export default function RegistrationPhotoPicker({ photo }) {
  return (
    <View>
      <View style={styles.photoContainer}>
        <ImageBackground
          style={styles.photoPlaceholder}
          imageStyle={styles.image}
          source={photo}
        >
          <IconButton
            Icon={photo ? RemoveIcon : AddIcon}
            bgStyle={[styles.addButton, photo && styles.removeButton]}
            width={25}
            height={25}
          />
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: "center",
    position: "absolute",
    top: -152,
    left: "50%",
    marginLeft: -60,
    zIndex: 1,
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButton: {
    transform: [{ rotate: "45deg" }],
  },
});
