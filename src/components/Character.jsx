import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Character({ character }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailScreen", character)}
    >
      <Image
        source={{ uri: character.image }}
        style={{
          flex: 1,
          width: 300,
          height: 100,
          margin: 3,
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
}
