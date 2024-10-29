import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ImageBackground,
} from "react-native";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { colors } from "../styles/global";
import Button from "../components/Button";
import BgImage from "../assets/images/photo_bg.png";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const dispatch = useDispatch();

  const onEmailChange = (value) => {
    setEmail(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };

  const onLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch(
        loginUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );

      console.log("User logged in");
      navigation.replace("Home");
    } catch (error) {
      alert("Помилка входу", error.message);
    }
  };

  const onSignUp = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={BgImage} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.formContainer}
        >
          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Адреса електронної пошти"
                placeholderTextColor={colors.placeholder}
                autoCapitalize="none"
                style={[
                  styles.inputContainer,
                  activeInput === "email" && styles.inputActive,
                ]}
                onFocus={() => setActiveInput("email")}
                onBlur={() => setActiveInput(null)}
                onChangeText={onEmailChange}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Пароль"
                  placeholderTextColor={colors.placeholder}
                  autoCapitalize="none"
                  secureTextEntry={!showPassword}
                  style={[
                    styles.inputContainer,
                    activeInput === "password" && styles.inputActive,
                  ]}
                  onFocus={() => setActiveInput("password")}
                  onBlur={() => setActiveInput(null)}
                  onChangeText={onPasswordChange}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.showTextContainer}
                >
                  <Text style={styles.showText}>
                    {showPassword ? "Сховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonsContainer}>
          <Button text="Увійти" onPress={onLogin} />
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Немає акаунту? </Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.registerText}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  formContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 43,
  },
  inputWrapper: {
    marginBottom: 32,
  },
  inputGroup: {
    gap: 16,
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    marginBottom: 33,
  },
  inputContainer: {
    height: 50,
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.black_primary,
  },
  inputActive: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
  passwordContainer: {
    position: "relative",
  },
  showTextContainer: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  showText: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  buttonsContainer: {
    backgroundColor: colors.white,
    paddingTop: 11,
    paddingHorizontal: 16,
    paddingBottom: 144,
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
  },
  registerText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
    textDecorationLine: "underline",
  },
});
