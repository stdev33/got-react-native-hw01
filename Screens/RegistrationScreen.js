import React, { useState } from "react";
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
} from "react-native";

export default function RegistrationScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.formContainer}
        >
          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                style={[
                  styles.inputContainer,
                  activeInput === "login" && styles.inputActive,
                ]}
                onFocus={() => setActiveInput("login")}
                onBlur={() => setActiveInput(null)}
              />
              <TextInput
                placeholder="Адреса електронної пошти"
                placeholderTextColor="#BDBDBD"
                style={[
                  styles.inputContainer,
                  activeInput === "email" && styles.inputActive,
                ]}
                onFocus={() => setActiveInput("email")}
                onBlur={() => setActiveInput(null)}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={!showPassword}
                  style={[
                    styles.inputContainer,
                    activeInput === "password" && styles.inputActive,
                  ]}
                  onFocus={() => setActiveInput("password")}
                  onBlur={() => setActiveInput(null)}
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
          <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
            <Text style={styles.registerButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.loginLink}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    justifyContent: "flex-end",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
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
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    marginBottom: 33,
  },
  inputContainer: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  inputActive: {
    borderColor: "#FF6C00",
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
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  buttonsContainer: {
    backgroundColor: "#FFFFFF",
    paddingTop: 11,
    paddingHorizontal: 16,
    paddingBottom: 78,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  loginLink: {
    color: "#1B4371",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
