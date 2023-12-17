import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MAPS_API_KEY } from "@env";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements';



const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[tw`bg-white flex-1`,{
      backgroundColor:"#050E19",
    }]}>
      <Text style={[tw`text-center py-5 text-xl`,{
      color:"#B3AC7A",
      }]}>Choose Your Destination</Text>
      <View style={[tw`border-t border-gray-200 flex-shrink`,{
        borderTopColor:"#8D413C",
      backgroundColor:"#050E19",
    }]}>
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          textInputProps={{
            placeholderTextColor: '#B3AC7A',
            color:"#B3AC7A",
            returnKeyType: "search"
          }}
          styles={toInputBoxStyles}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: "AIzaSyDoCVrKkeVqFB_qJUEREZka-V6UfeiQMco",
            language: "en",
          }}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );

            navigation.navigate("RideOptionsCard");
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavFavourites/>
        <View style={[tw`flex-row bg-white justify-evenly py-2 mt-auto `,general.colors,{
          borderTopColor:"#8D413C",
          borderTopWidth:1,
        }]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptionsCard')}
                    style={[tw`flex flex-row w-24 justify-between px-4 py-3 rounded-full`,{
                      backgroundColor:"#CE7F69",
                    }]}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={[tw`text-white text-center ml-3`,{}]}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={`flex flex-row w-24 justify-between px-4 py-3 rounded-full`}>
                    <Icon name="fast-food-outline" type="ionicon" color="#B3AC7A" size={16} />
                    <Text style={[tw`text-center ml-3`,{
                      color:"#B3AC7A"
                    }]}>Eats</Text>
                </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "#050E19",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#050E19",
    color:"#B3AC7A",
    borderWidth:1,
    borderColor:"#CE7F69",
    borderRadius: 0,
    fontSize: 12,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  row:{
    backgroundColor:"#050E19",
    color:"#B3AC7A",
    padding:22,
  },
  loader:{
    color:"#B3AC7A",
  },
  description:{
    color:'#B3AC7A',
  },
  separator:{
    backgroundColor:"#8D413C",
  }
});
const general = StyleSheet.create({
  colors:{
    backgroundColor:"#050E19",
    color:"#B3AC7A"
  }
})