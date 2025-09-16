import { StyleSheet, Switch, Text, View } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [leftSwitch, setLeftSwitch] = useState(false);
  const [centerSwitch, setCenterSwitch] = useState(false);
  const [rightSwitch, setRightSwitch] = useState(false);
  return (
    <View style={styles.switchContainer}>
      <Text>Left:</Text>
      <Switch value={leftSwitch} onValueChange={setLeftSwitch} />
      <Switch value={centerSwitch} onValueChange={setCenterSwitch} />
      <Switch value={rightSwitch} onValueChange={setRightSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    padding: 70,
    flexDirection: "row",
    gap: 20,
  },
});
