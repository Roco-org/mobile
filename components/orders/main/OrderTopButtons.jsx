import React from "react";
import { Text, TouchableOpacity, View, Image, Modal } from "react-native";
import { router } from "expo-router";
import { icons } from "../../../constants";

const OrderTopButtons = () => {
  return (
    <View className="flex flex-row items-center justify-between px-2">
      <Text className="text-4xl font-bold">Órdenes</Text>
      <View className="flex flex-row justify-between space-x-2">
        <TouchableOpacity
          className="border border-gray-300 bg-white p-4 rounded-lg shadow"
          onPress={() => router.push("/orders/new-order")}
        >
          <View className="flex items-center justify-center">
            <Image
              source={icons.add}
              resizeMode="contain"
              tintColor="black"
              style={{ width: 12, height: 12 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="border border-gray-300 bg-white p-4 rounded-lg shadow">
          <View className="flex items-center justify-center">
            <Image
              source={icons.search}
              resizeMode="contain"
              tintColor="black"
              style={{ width: 12, height: 12 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderTopButtons;
