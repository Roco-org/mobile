import { ScrollView, View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { icons } from "../../../constants/";
import RNPickerSelect from "react-native-picker-select";
import NewOrderButtons from "../../../components/orders/new-order/NewOrderButtons";

const newOrder = () => {
  const [company, setCompany] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = fetch(
      process.env.EXPO_PUBLIC_BACKEND_COMPANIES_ENDPOINT,
      {
        method: "GET",
        headers: {
          Authorization: process.env.EXPO_PUBLIC_BACKEND_BASE64_AUTH,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch companies");
        return response.json();
      })
      .then((data) => {
        return data.map((company) => ({
          label: company.name,
          value: company.companyId.toString(),
        }));
      });

    const fetchCustomers = fetch(
      process.env.EXPO_PUBLIC_BACKEND_CUSTOMERS_ENDPOINT,
      {
        method: "GET",
        headers: {
          Authorization: process.env.EXPO_PUBLIC_BACKEND_BASE64_AUTH,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch customers");
        return response.json();
      })
      .then((data) => {
        return data.map((customer) => ({
          label: customer.name,
          value: customer.customerId.toString(),
        }));
      });

    Promise.all([fetchCompanies, fetchCustomers])
      .then(([companyItems, customerItems]) => {
        setCompanies(companyItems);
        setCustomers(customerItems);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <View className="flex flex-row justify-end px-2">
          <Text className="text-4xl font-bold">Nueva órden</Text>
        </View>
        <View>
          <View className="px-4">
            <Text className="text-md mb-2">Empresa</Text>
            <RNPickerSelect
              onValueChange={(value) => setCompany(value)}
              items={companies}
              placeholder={{ label: "Publibor", value: null }}
              useNativeAndroidPickerStyle={false}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 28,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 7,
                  color: "black",
                  textAlign: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingVertical: 25,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 5,
                  color: "black",
                  paddingRight: 30,
                  textAlign: "center",
                },
                iconContainer: {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: 10,
                },
              }}
              Icon={() => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Image
                      source={icons.building}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 25,
                        marginLeft: 30,
                      }}
                    />
                    <Image
                      source={icons.dropdown}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 25,
                        marginRight: 20,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>

          <View className="px-4 mt-5">
            <Text className="text-md mb-2">Cliente</Text>
            <RNPickerSelect
              onValueChange={(value) => setCustomer(value)}
              items={customers}
              placeholder={{ label: "Rossana", value: null }}
              useNativeAndroidPickerStyle={false}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 28,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 7,
                  color: "black",
                  textAlign: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingVertical: 25,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 5,
                  color: "black",
                  paddingRight: 30,
                  textAlign: "center",
                },
                iconContainer: {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingRight: 10,
                },
              }}
              Icon={() => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Image
                      source={icons.person}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 25,
                        marginLeft: 30,
                      }}
                    />
                    <Image
                      source={icons.dropdown}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                        marginTop: 25,
                        marginRight: 20,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View className="px-4 ">
          <NewOrderButtons customerId={customer} />
        </View>
      </View>
    </ScrollView>
  );
};

export default newOrder;
