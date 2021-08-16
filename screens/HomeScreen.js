import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setOrigin, setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* view is similar to div */}
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        ></Image>

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          returnKeyType={"search"}
          fetchDetails={true}
          debounce={400}
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          query={{ key: GOOGLE_MAPS_API_KEY, language: "en" }}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details = null) => {
            console.log(data.description),
              console.log(details.geometry.location);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
        />
        <NavOptions></NavOptions>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
