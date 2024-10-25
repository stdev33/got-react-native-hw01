import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../styles/global";

export default function Button({ text, onPress, enabled = true }) {
  return (
    <>
      <TouchableOpacity
        style={enabled ? styles.button : styles.buttonDisabled}
        onPress={onPress}
      >
        <Text style={enabled ? styles.buttonText : styles.buttonTextDisabled}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  buttonDisabled: {
    backgroundColor: colors.light_gray,
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextDisabled: {
    color: colors.placeholder,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
