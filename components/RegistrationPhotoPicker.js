import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { colors } from "../styles/global";

export default function RegistrationPhotoPicker() {
  return (
    <View>
      <View style={styles.photoContainer}>
        <ImageBackground style={styles.photoPlaceholder} source={null}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
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
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: colors.orange,
    fontFamily: "Roboto-Regular",
    fontSize: 20,
  },
});
