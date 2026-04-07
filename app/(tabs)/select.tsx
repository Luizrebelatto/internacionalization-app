import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import i18n from "../../languages/i18n";

export default function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: t("portuguese"), value: "pt" },
    { label: t("english"), value: "en" },
    { label: t("spanish"), value: "es" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{t("welcome")}</Text>
      <Text style={styles.name}>{`${t("name")} Luiz Gabriel`}</Text>
      <View style={styles.dropDown}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          onChangeValue={(value) => {
            i18n.changeLanguage(value);
          }}
          setItems={setItems}
          placeholder={t("choose")}
        />
      </View>
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
  dropDown: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
  },
});
