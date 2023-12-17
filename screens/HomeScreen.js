import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#050E19",
    color:"#B3AC7A"
  }
});

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[tw`bg-white h-full`,styles.container]}>
      <View style={[tw`p-5`,styles.container]}>
        <Text style={{
          color:"#B3AC7A"
        }}>ABC App</Text>
        <GooglePlacesAutocomplete
          placeholder="where From ?"
          styles={{
            container: {
              flex: 0,
              color:"#B3AC7A",
              backgroundColor:"#D4BC9B"
            },
            textInput: {
              fontSize: 18,
              color:"#B3AC7A",
              backgroundColor:"#D4BC9B"

            },
            description:{
              color:"#B3AC7A"
            },
            textInputContainer: {
              backgroundColor:"#D4BC9B"
            }
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            console.log(details.geometry.location);
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          returnKeyType={"search"}
          query={{
            key: MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;