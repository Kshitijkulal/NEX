import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "Uber-X-123",
    title: "Bike",
    multiplier: 1,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_618,h_348/v1696608495/assets/97/d3e455-c9f3-499a-b7ad-56ae11c80287/original/UberMotorcycle.png",
  },
  {
    id: "Uber-XL-456",
    title: "Auto",
    multiplier: 1.2,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Car",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_PRICE = 10;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView
      style={[
        tw`bg-white flex-grow`,
        {
          backgroundColor: "#050E19",
        },
      ]}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("😡😡😡");
            navigation.navigate("NavigateCard");
          }}
          style={[
            tw`absolute p-3 rounded-full top-3 left-5 z-50`,
            ,
            {
              backgroundColor: "#050E19",
            },
          ]}
        >
          <Icon
            name="chevron-left"
            type="font-awesome"
            size={10}
            color={"#B3AC7A"}
          />
        </TouchableOpacity>
        <Text
          style={[
            tw`text-center text-xl py-5`,
            {
              color: "#B3AC7A",
            },
          ]}
        >
          Select a Ride — {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "#8D413C" }} />
        )}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={[
              tw`flex-row justify-between items-center px-9`,
              id === selected?.id ? { backgroundColor: "#CE7F69" } : null,
            ]}
            onPress={() => {
              if (!selected) {
                setSelected(item);
              } else {
                setSelected(null);
              }
            }}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={[tw`-ml-6 p-3`,]}>
              <Text
                style={[
                  tw`text-xl font-semibold`,
                  {
                    color: "#B3AC7A",
                  },
                  id === selected?.id ? { color:"#ffffff" } : null,
                ]}
              >
                {title}
              </Text>
              <Text
                style={[{
                  color: "#B3AC7A",
                },id === selected?.id ? { color:"#ffffff" } : null,]}
              >
                {travelTimeInformation?.duration?.text}
              </Text>
            </View>
            <Text style={[tw`text-xl`,{
                  color: "#B3AC7A",
                },id === selected?.id ? { color:"#ffffff" } : null,]}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "INR",
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_PRICE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={[
            tw`py-3 m-3`,{
                backgroundColor:"#CE7F69"
            },
            !selected ? {backgroundColor:"#D4BC9B"}:null,
          ]}
        >
          <Text style={[tw`text-center text-white text-xl`]}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
