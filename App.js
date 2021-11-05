import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Create from "./Screens/Create";
import ArticleDetails from "./Screens/ArticleDetails";
import ArticleEdit from "./Screens/ArticleEdit";
import Contants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const myStyles = {
  title: "Doctors List",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "skyblue",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myStyles} />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ ...myStyles, title: "create" }}
        />
        <Stack.Screen
          name="Details"
          component={ArticleDetails}
          options={{ ...myStyles, title: "Details" }}
        />
        <Stack.Screen
          name="Edit"
          component={ArticleEdit}
          options={{ ...myStyles, title: "Edit" }}
        />
      </Stack.Navigator>

      {/*<Create /> */}
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eddfdf",
    marginTop: Contants.statusBarHeight,
  },

  TextStyle: {
    color: "red",
    fontSize: 25,
  },
});
