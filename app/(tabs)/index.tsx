import { Image } from "expo-image";
import { Platform, StyleSheet, Switch } from "react-native";
import { useState } from "react";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const [leftSwitch, setLeftSwitch] = useState(false);
  const [centerSwitch, setCenterSwitch] = useState(false);
  const [rightSwitch, setRightSwitch] = useState(false);
  return (
    <ThemedView style={styles.switchContainer}>
      <ThemedText>Left:</ThemedText>
      <Switch value={leftSwitch} onValueChange={setLeftSwitch} />
      <Switch value={centerSwitch} onValueChange={setCenterSwitch} />
      <Switch value={rightSwitch} onValueChange={setRightSwitch} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    padding: 50,
    flexDirection: "row",
    gap: 20,
  },
});
