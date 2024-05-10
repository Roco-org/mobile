import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, RefreshControl } from "react-native";

import OrderTopButtons from "../../../components/orders/main/OrderTopButtons";
import OrderStatusSelector from "../../../components/orders/main/OrderStatusSelector";
import OrderCard from "../../../components/orders/main/OrderCard";
import OrderCardSkeleton from "../../../components/orders/main/OrderCardSkeleton";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Activas");
  const [refreshing, setRefreshing] = useState(false);

  const statusToUrl = {
    Activas: process.env.EXPO_PUBLIC_BACKEND_PENDING_ORDERS_ENDPOINT,
    Completadas: process.env.EXPO_PUBLIC_BACKEND_COMPLETED_ORDERS_ENDPOINT,
    Canceladas: process.env.EXPO_PUBLIC_BACKEND_CANCELLED_ORDERS_ENDPOINT,
  };

  useEffect(() => {
    fetchData();
  }, [selectedStatus]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(statusToUrl[selectedStatus], {
        method: "GET",
        headers: {
          Authorization: process.env.EXPO_PUBLIC_BACKEND_BASE64_AUTH,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setOrders(data.content);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ margin: 20 }}>
        <OrderTopButtons />
        <OrderStatusSelector
          setSelectedStatus={setSelectedStatus}
          selectedStatus={selectedStatus}
        />
        {isLoading ? (
          <View className="z-[-1] flex">
            <OrderCardSkeleton />
            <OrderCardSkeleton />
            <OrderCardSkeleton />
            <OrderCardSkeleton />
          </View>
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : (
          <View className="z-[-1] flex">
            {orders.map((order, index) => (
              <OrderCard
                key={index}
                orderId={order.orderId}
                option={order.status}
                companyName={order.companyName}
                date={order.orderDate}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Orders;
