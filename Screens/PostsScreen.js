import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useLayoutEffect } from "react";

import { colors, header } from "../styles/global";
import IconButton from "../components/IconButton";
import LogoutIcon from "../assets/icons/log-out.svg";

export default function PostsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Публікації",
      headerStyle: header.headerStyle,
      headerTitleStyle: header.headerTitleStyle,
      headerRightContainerStyle: header.headerRightContainerStyle,
      headerTitleContainerStyle: header.headerTitleContainerStyle,
      headerRight: () => (
        <IconButton
          Icon={LogoutIcon}
          onPress={() => navigation.replace("Login")}
        />
      ),
    });
  }, [navigation]);

  return (
    <>
      <TouchableOpacity>
        <Text style={styles.buttonText}>PostsScreen</Text>
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
