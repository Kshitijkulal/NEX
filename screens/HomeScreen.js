import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[tw`bg-white h-full`,{
      backgroundColor:"#050E19"
    }]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require(`../assets/migo1.png`)}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From ?"
          textInputProps={
            {
              placeholderTextColor:"#B3AC7A"
            }
          }
          styles={toInputBoxStyles}
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
            key: "AIzaSyDoCVrKkeVqFB_qJUEREZka-V6UfeiQMco",
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

const styles = StyleSheet.create({});
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
    borderRadius: 10,
    fontSize: 12,
  },
  textInputContainer: {
    paddingHorizontal: 10,
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