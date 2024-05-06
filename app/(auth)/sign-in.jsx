import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

import React from "react";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full flex justify-center items-center h-full px-4">
        <Text style={{ fontFamily: "RocknRollOne-Regular", fontSize: 60 }}>
          fasdfadsfsad
        </Text>
        <CustomButton
          title="Iniciar Sesión"
          containerStyles="w-full mt-7"
          handlePress={() => router.push("/home")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
