import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";


const data = [
  {
    id: "123",
    title: "Get A ride",
    image: "https://links.papareact.com/7pf",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Market Place",
    image: "https://img.freepik.com/3d-models/CZ7HOVWW-shopping-bag-006/shopping-bag-006-poster.png?t=st=1702659277~exp=1702659877~hmac=d1fe806d5a8e9315d85d43844b4ebb357b881d82b7082e6e54c2f02c6d9e229e",
    screen: "EatScreen",
  },
];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={
          () => navigation.navigate(item.screen)}
        style = {[tw`p-2 pl-6 pb-8 pt-4 bg-accent m-2 w-40`,{
          backgroundColor:"#D4BC9B",
          borderRadius:10,
        }]}
        disabled = {!origin}
        >
          <View style = {tw`${!origin && "opacity-20"}`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon 
            style={[tw`p-2 bg-main rounded-full w-10 mt-4`,{
            backgroundColor:"#050E19"
            }]}
            name="arrowright" color="#D4BC9B" type="antdesign"
          />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
