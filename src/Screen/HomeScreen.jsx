import { ActivityIndicator, View, FlatList, Text } from "react-native";
import React from "react";
import Character from "../components/Character";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCharacter } from "../hooks/useCharacter";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { isLoading, characters, getCharacters } = useCharacter();

  return (
    <View style={{ flex: 1, marginTop: top, justifyContent: "center" }}>
      <View style={{ height: 450 }}>
        <FlatList
          data={characters}
          renderItem={({ item }) => <Character character={item} />}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={getCharacters}
          onEndReachedThreshold={0.2}
          ListFooterComponent={
            isLoading ? (
              <ActivityIndicator style={{ height: 200 }} color="black" />
            ) : null
          }
          horizontal={true}
        />
      </View>
    </View>
  );
}
