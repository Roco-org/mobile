import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import OrderTopButtons from "../../components/orders/OrderTopButtons";
import OrderStatusSelector from "../../components/orders/OrderStatusSelector";
import OrderCard from "../../components/orders/OrderCard";
const data = [
  { label: "Item 1", value: "1", search: "Item 1" },
  { label: "Item 2", value: "2", search: "Item 2" },
  { label: "Item 3", value: "3", search: "Item 3" },
  { label: "Item 4", value: "4", search: "Item 4" },
  { label: "Item 5", value: "5", search: "Item 5" },
  { label: "Item 6", value: "6", search: "Item 6" },
  { label: "Item 7", value: "7", search: "Item 7" },
  { label: "Item 8", value: "8", search: "Item 8" },
];

const orders = () => {
  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <OrderTopButtons />
        <OrderStatusSelector />
        <View className="z-[-1] flex ">
          <OrderCard
            option={"Aceptadas"}
            orderId={1}
            companyName={"Novapromo"}
            date={"05-may-2024"}
          />
          <OrderCard
            option={"Aceptadas"}
            orderId={1}
            companyName={"Novapromo"}
            date={"05-may-2024"}
          />
          <OrderCard
            option={"Aceptadas"}
            orderId={1}
            companyName={"Novapromo"}
            date={"05-may-2024"}
          />
          <OrderCard
            option={"Aceptadas"}
            orderId={1}
            companyName={"Novapromo"}
            date={"05-may-2024"}
          />
          <OrderCard
            option={"Aceptadas"}
            orderId={1}
            companyName={"Novapromo"}
            date={"05-may-2024"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default orders;
