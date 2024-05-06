import { View, Text } from "react-native";
import React from "react";

const getColor = (option) => {
  switch (option) {
    case "Activas":
      return "bg-yellow-500"; // Blue for Activas
    case "Completadas":
      return "bg-green-500"; // Green for Completadas
    case "Canceladas":
      return "bg-red-500"; // Red for Canceladas
    default:
      return "bg-gray-400"; // Default color
  }
};
function formatToPaddedNumber(numStr) {
  try {
    // Parse the number to ensure it's valid
    const num = parseInt(numStr);
    if (isNaN(num)) {
      return "Invalid input"; // Return error if the input is not a valid number
    }

    // Convert the number to a string, padded with leading zeros to ensure it is 6 digits long
    const formattedNumber = num.toString().padStart(6, "0");

    // Return the formatted number with a hash prefix
    return `#${formattedNumber}`;
  } catch (error) {
    // Handle any unexpected errors
    return "Error formatting number";
  }
}

const OrderCard = ({ option, orderId, companyName, date }) => {
  return (
    <View className="bg-white rounded-lg border border-solid border-gray-300 ml-2.5 mt-6  flex flex-row space-x-8 p-7 justify-center shadow-md">
      <View
        className={`${getColor(option)} mt-[5px] w-2 h-2 rounded-full`}
      ></View>
      <View>
        <Text className="font-bold">{formatToPaddedNumber(orderId)}</Text>
      </View>
      <View>
        <Text>{companyName}</Text>
      </View>
      <View>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default OrderCard;
