import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Create from "./Screens/Create";
import ArticleDetails from "./Screens/ArticleDetails";
import ArticleEdit from "./Screens/ArticleEdit";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Index from "./Screens/Index";
import AdoptPet from "./Screens/AdoptPet";
import Pharmacy from "./Screens/Pharmacy";
import PetDetailScreen from "./DetailScreen/PetDetailScreen";
import PharmacyDetailScreen from "./DetailScreen/PharmacyDetailScreen";
import CreatePets from "./Createlist/CreatePets";
import CreatePharmacy from "./Createlist/CreatePharmacy";
import pic2 from "./images/pic2.png";
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
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ ...myStyles, title: "Signup" }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ ...myStyles, title: "Pet Shleter Care" }}
        />
        <Stack.Screen name="Home" component={Home} options={myStyles} />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ ...myStyles, title: "Create Doctors Profile" }}
        />
        <Stack.Screen
          name="AdoptPet"
          component={AdoptPet}
          options={{ ...myStyles, title: "Pet Adoptions" }}
        />
        <Stack.Screen
          name="Details"
          component={ArticleDetails}
          options={{ ...myStyles, title: "Doctor Details" }}
        />
        <Stack.Screen
          name="Edit"
          component={ArticleEdit}
          options={{ ...myStyles, title: "Edit" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ ...myStyles, title: "Login" }}
        />
        <Stack.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{ ...myStyles, title: "Pharmacy" }}
        />
        <Stack.Screen
          name="PetDetails"
          component={PetDetailScreen}
          options={{ ...myStyles, title: "PetDetails" }}
        />
        <Stack.Screen
          name="PharmacyDetails"
          component={PharmacyDetailScreen}
          options={{ ...myStyles, title: "PharmacyDetails" }}
        />
        <Stack.Screen
          name="CreatePets"
          component={CreatePets}
          options={{ ...myStyles, title: "Create Pets Form" }}
        />
        <Stack.Screen
          name="CreatePharmacy"
          component={CreatePharmacy}
          options={{ ...myStyles, title: "Create Pharmacy Form" }}
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
