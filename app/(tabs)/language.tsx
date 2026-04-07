import * as Localization from "expo-localization";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import i18n from "../../languages/i18n";

export default function App() {
  const { t } = useTranslation();

  useEffect(() => {
    const langCode = Localization.getLocales()[0].languageCode;
    const language = langCode || "pt";
    i18n.changeLanguage(language);
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
