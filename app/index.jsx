import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full flex justify-center items-center h-full px-4">
        <Text style={{ fontFamily: "RocknRollOne-Regular", fontSize: 60 }}>
          Roco
        </Text>
        <CustomButton
          title="Iniciar Sesión"
          handlePress={() => router.push("/sign-in")}
          containerStyles="w-full mt-7"
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
