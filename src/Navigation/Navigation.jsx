import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import DetailScreen from "../Screen/DetailScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
