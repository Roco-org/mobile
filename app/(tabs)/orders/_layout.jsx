import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFD25E",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="order-tab"
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="new-order"
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Stack>
  );
};

export default StackLayout;
