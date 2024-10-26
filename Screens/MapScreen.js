import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLayoutEffect } from "react";

import { colors, header } from "../styles/global";
import IconButton from "../components/IconButton";
import BackIcon from "../assets/icons/arrow-left.svg";

export default function MapScreen({ navigation, route }) {
  const { locationCoords = null } = route.params?.post || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Карта",
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
    <View style={styles.container}>
      {locationCoords ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: locationCoords.latitude,
            longitude: locationCoords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: locationCoords.latitude,
              longitude: locationCoords.longitude,
            }}
            title="Місце знімку"
          />
        </MapView>
      ) : (
        <Text style={styles.errorText}>Локація недоступна</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: colors.orange,
    fontSize: 16,
    marginTop: 20,
  },
});
