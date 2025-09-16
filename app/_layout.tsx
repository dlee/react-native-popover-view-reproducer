import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NavigationBar } from "@zoontek/react-native-navigation-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationBar barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            animation: "fade",
          }}
        />
      </Stack>
    </>
  );
}
