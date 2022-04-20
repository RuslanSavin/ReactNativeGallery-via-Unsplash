import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import store from "./redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "./screens/PostScreen";
import ErrorBoundry from "./components/ErrorBoundry";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <ErrorBoundry>
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Post" component={PostScreen} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </ErrorBoundry>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f2f3f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
