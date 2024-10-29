import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";
import { bottomTab } from "./styles/global";
import PostsIcon from "./assets/icons/grid.svg";
import CreateIcon from "./assets/icons/new.svg";
import ProfileIcon from "./assets/icons/user.svg";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: bottomTab.tabBarStyle,
        tabBarIcon: () => {
          let IconComponent;
          let iconSize = { width: 40, height: 40 };

          if (route.name === "Posts") {
            IconComponent = PostsIcon;
          } else if (route.name === "Create") {
            IconComponent = CreateIcon;
            iconSize = { width: 70, height: 40 };
          } else if (route.name === "Profile") {
            IconComponent = ProfileIcon;
          }

          return (
            <IconComponent width={iconSize.width} height={iconSize.height} />
          );
        },
      })}
    >
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={({ route }) => ({
          tabBarStyle: { display: "none" },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}