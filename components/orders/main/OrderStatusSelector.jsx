import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { getDotColor } from "../../../utils/getDotColor";

const OrderStatusSelector = ({ setSelectedStatus, selectedStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Activas", "Completadas", "Canceladas"];

  return (
    <View className="relative p-2 justify-end shadow-md">
      <TouchableOpacity
        className="bg-white p-4 flex flex-row rounded-lg w-2/4 self-start border border-gray-300"
        onPress={() => setIsOpen(true)}
      >
        <View
          className={`${getDotColor(
            selectedStatus
          )} ml-2 mt-[5px] w-2 h-2 rounded-full`}
        ></View>
        <Text className="text-black ml-3">{selectedStatus}</Text>
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
                  setSelectedStatus(option);
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
