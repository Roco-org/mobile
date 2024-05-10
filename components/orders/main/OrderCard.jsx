import { View, Text } from "react-native";
import React from "react";
import { formatToPaddedNumber } from "../../../utils/formatToPaddedNumber";
import { getDotColor } from "../../../utils/getDotColor";

const OrderCard = ({ option, orderId, companyName, date }) => {
  return (
    <View className="bg-white rounded-lg border border-solid border-gray-300 ml-2.5 mt-6 flex flex-row space-x-2 py-7 justify-center shadow-md ">
      <View
        style={{ flexGrow: 0, flexShrink: 1, flexBasis: "4.5%" }}
        className={`${getDotColor(option)} mt-[5px] w-2 h-2 rounded-full ml-6`}
      ></View>
      <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: "40%" }}>
        <Text className="font-bold">{formatToPaddedNumber(orderId)}</Text>
      </View>
      <View
        className="flex flex-row justify-center"
        style={{ flexGrow: 1, flexShrink: 1, flexBasis: "80%" }}
      >
        <Text>{companyName}</Text>
      </View>
      <View
        className="mr-2 pr-5"
        style={{ flexGrow: 0, flexShrink: 1, flexBasis: "60%" }}
      >
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default OrderCard;
