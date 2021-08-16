import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, YASH</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            nearbyPlacesAPI="GooglePlacesSearch"
            returnKeyType={"search"}
            fetchDetails={true}
            debounce={400}
            styles={toInputBoxStyles}
            query={{ key: GOOGLE_MAPS_API_KEY, language: "en" }}
            enablePoweredByContainer={false}
            minLength={2}
            onPress={(data, details = null) => {
              console.log(data.description),
                console.log(details.geometry.location);
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("CarOptions");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
  textInput: { backgroundColor: "#DDDDDF", borderRadius: 0, fontSize: 18 },
  textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});

export default NavigateCard;
