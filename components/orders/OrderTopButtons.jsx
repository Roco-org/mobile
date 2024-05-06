import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const OrderTopButtons = () => {
  return (
    <View className="flex flex-row items-center justify-between px-2 ">
      <Text className="text-4xl font-bold">Órdenes</Text>
      <View className="flex flex-row justify-between space-x-2">
        <TouchableOpacity className="border border-gray-300 bg-white p-4 rounded-lg shadow-sm">
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-gray-300 bg-white p-4 rounded-lg shadow-sm">
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderTopButtons;
