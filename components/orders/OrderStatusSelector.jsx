import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const OrderStatusSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Activas");
  const options = ["Activas", "Completadas", "Canceladas"];

  const getColor = (option) => {
    switch (option) {
      case "Activas":
        return "bg-yellow-500"; // Yellow for Activas
      case "Completadas":
        return "bg-green-500"; // Green for Completadas
      case "Canceladas":
        return "bg-red-500"; // Red for Canceladas
      default:
        return "bg-gray-400"; // Default color
    }
  };

  return (
    <View className="relative p-2 justify-end shadow-md">
      <TouchableOpacity
        className="bg-white p-4 flex flex-row rounded-lg w-2/4 self-start border border-gray-300"
        onPress={() => setIsOpen(true)}
        style={{ zIndex: 1 }} // Apply zIndex here as well
      >
        <View
          className={`${getColor(
            selectedOption
          )} mt-[5px] w-2 h-2 rounded-full`}
        ></View>
        <Text className="text-black ml-2">{selectedOption}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View
          className="absolute top-20 w-full"
          style={{ zIndex: 2, elevation: 2 }}
        >
          <View className="bg-white shadow-md p-4 rounded-lg">
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-3"
                onPress={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
              >
                <Text className="text-gray-900 flex-1">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default OrderStatusSelector;
