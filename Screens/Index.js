import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { Button, Card, FAB } from "react-native-paper";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import { Image } from "react-native";
import Screen from "./Screen";

export const ProfileScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Profile" />
);
export const SignOutScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="SignOut" />
);

function Index(props) {
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={pic2}
            style={{
              height: 200,
              width: 400,

              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Card>
            <Image
              source={pic3}
              style={{
                height: 160,
                width: 130,
                marginTop: 30,
                marginBottom: 10,
                marginRight: "auto",
                marginHorizontal: 125,
              }}
            />
            <Button
              style={{
                margin: 20,
                width: 150,
                marginBottom: 10,
                marginHorizontal: 120,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate("Home")}
            >
              Doctors
            </Button>
            <Button
              style={{
                margin: 20,
                width: "auto",
                marginBottom: 10,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate("Create")}
            >
              Create Doctors Profile
            </Button>
          </Card>
          <Card>
            <Image
              source={pic3}
              style={{
                height: 160,
                width: 130,
                marginTop: 30,
                marginRight: "auto",
                marginHorizontal: 125,
              }}
            />
            <Text></Text>
            <Button
              style={{
                margin: 20,
                width: 150,
                marginBottom: 10,
                marginHorizontal: 120,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate("AdoptPet")}
            >
              Pets
            </Button>
            <Button
              style={{
                margin: 20,
                width: "auto",
                marginBottom: 10,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate("CreatePets")}
            >
              Create Pets Profile
            </Button>
          </Card>
          <Card>
            <Image
              source={pic3}
              style={{
                height: 160,
                width: 130,
                marginTop: 30,
                marginRight: "auto",
                marginHorizontal: 125,
              }}
            />
            <Text></Text>
            <Button
              style={{
                margin: 20,
                width: 150,
                marginBottom: 10,
                marginHorizontal: 120,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate("Pharmacy")}
            >
              Pharmatics
            </Button>
            <Button
              style={{
                margin: 20,
                width: "auto",
                marginBottom: 10,
              }}
              mode="contained"
              onPress={() => props.navigation.navigate("CreatePharmacy")}
            >
              Create Pharmacy Profile
            </Button>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

export default Index;
