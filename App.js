import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, LogBox, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MapScreen from "./screens/MapScreen";
import EatScreen from "./screens/EatScreen";

export default function App() {
  const Stack = createStackNavigator();

  LogBox.ignoreLogs(["Sending "]);

  return (
    <Provider store={store}>
      <NavigationContainer  style={styles.background}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={[{ flex: 1, margin:0,padding:0,height:0 },styles.background]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -5 : 0}
          >
            <Stack.Navigator initialRouteName={HomeScreen}>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="EatScreen"
                component={EatScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#050E19",
  }
})