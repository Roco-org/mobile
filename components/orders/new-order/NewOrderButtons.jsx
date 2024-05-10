import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { formatToPaddedNumber } from "../../../utils/formatToPaddedNumber";

const NewOrderButtons = (customerId) => {
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = () => {
    if (!customerId) {
      Alert.alert("Validation Error", "No customer selected!");
      return;
    }

    setIsLoading(true);
    const orderDetails = {
      customerId: customerId.customerId,
      orderDate: new Date().toISOString().split("T")[0],
      status: "Pending",
      totalAmount: 0.0,
    };

    fetch(process.env.EXPO_PUBLIC_BACKEND_NEW_ORDERS_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: process.env.EXPO_PUBLIC_BACKEND_BASE64_AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          throw new Error("No se ha podido crear la órden.");
        }

        return response.json();
      })
      .then((data) => {
        Alert.alert(
          "¡Orden Creada con Éxito!",
          `La orden número ${formatToPaddedNumber(
            data.orderId
          )} ha sido creada satisfactoriamente. Puedes continuar gestionando tus órdenes o realizar más acciones desde el menú principal.`,
          [
            { text: "Ver Orden", onPress: () => router.back() },
            { text: "Cerrar", style: "cancel", onPress: () => router.back() },
          ]
        );
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", error.message);
      });
  };
  return (
    <View className="flex flex-row justify-between space-x-2 mt-[50]">
      <TouchableOpacity
        onPress={router.back}
        activeOpacity={0.7}
        className="bg-white rounded-xl min-h-[62px] flex-1 justify-center items-center mr-2 border border-solid border-gray-300 shadow-md"
      >
        <Text className="text-black text-sm ">Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={isLoading}
        onPress={createOrder}
        activeOpacity={0.7}
        className="bg-[#FFD25E] rounded-xl min-h-[62px] flex-1 justify-center items-center ml-2 border border-solid border-gray-300 shadow-md"
      >
        <Text className="text-black text-sm">Crear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewOrderButtons;
