import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

const NavFavorites = () => {
  const data = [
    {
      id: "1",
      icon: "home",
      location: "Home",
      destination: "South Park Street, Halifax, NS, Canada",
    },
    {
      id: "2",
      icon: "briefcase",
      location: "Work",
      destination: "Laurier Ave W, Ottawa, ON, Canada",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={(tw`bg-gray-200`, { height: 0.5 })}></View>
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}> {item.location} </Text>

            <Text style={tw`text-gray-500`}> {item.destination} </Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
