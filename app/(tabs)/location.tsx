import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import i18n from "../../languages/i18n";

import * as Location from "expo-location";

export default function App() {
  const { t } = useTranslation();

  const setLanguageByLocation = async (latitude: number, longitude: number) => {
    try {
      const geocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const country = geocode[0]?.isoCountryCode;
      const countryToLanguage = {
        BR: "pt",
        US: "en",
        ES: "es",
      };

      const language = countryToLanguage[country] || "pt";
      i18n.changeLanguage(language);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLanguageByLocation(
        location.coords.latitude,
        location.coords.longitude,
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{t("welcome")}</Text>
      <Text style={styles.name}>{`${t("name")} Luiz Gabriel`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
  },
});
