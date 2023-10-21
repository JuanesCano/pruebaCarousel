import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const screenHeight = Dimensions.get("screen").height;

export default function DetailScreen({ route }) {
  const character = route.params;
  const navigation = useNavigation();

  const uri = character.image;

  return (
    <ScrollView>
   <View style={styles.imageContainer}>
        <View style={styles.imageBoder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>Name: {character.name}</Text>

        <Text style={styles.subtitle}>Status: {character.status}</Text>

        <Text style={styles.subtitle}>Species: {character.species}</Text>

        <Text style={styles.subtitle}>Gender: {character.gender}</Text>

        <Text style={styles.subtitle}>Origin: {character.origin.name}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" color="white" size={30} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBoder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  backButton: {
    position: "absolute",
    top: 30,
    left: 5,
  },
});
