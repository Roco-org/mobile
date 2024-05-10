import React from "react";
import { View } from "react-native";

const OrderCardSkeleton = () => {
  return (
    <View className="bg-white rounded-lg border border-gray-300 m-2.5 mt-6 p-8 shadow-md flex flex-row items-center space-x-5">
      <View className="bg-gray-300 h-2 w-2 rounded-full ml-[-9]"></View>
      <View className="bg-gray-300 h-2 w-1/5 rounded"></View>
      <View className="bg-gray-300 h-2 w-1/3 rounded"></View>
      <View className="bg-gray-300 h-2 w-1/4 rounded"></View>
    </View>
  );
};

export default OrderCardSkeleton;
