import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useLayoutEffect } from "react";

import { colors, header } from "../styles/global";
import IconButton from "../components/IconButton";
import BackIcon from "../assets/icons//arrow-left.svg";

export default function CommentsScreen({ navigation }) {
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
