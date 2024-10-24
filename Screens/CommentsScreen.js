import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../styles/global";

export default function CommentsScreen() {
  return (
    <>
      <TouchableOpacity>
        <Text style={styles.buttonText}>CommentsScreen</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: colors.orange,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
