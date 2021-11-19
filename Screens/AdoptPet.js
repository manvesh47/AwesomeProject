import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View, Alert } from "react-native";
import { Card, FAB } from "react-native-paper";
import { Image } from "react-native";
import pic1 from "../images/pic.png";

function AdoptPet(props) {
  const [data, setData] = useState([]);
  const [loading, setLoaing] = useState(true);

  const loadData = () => {
    fetch("http://192.168.253.229:8080/AdoptPet/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => Alert.alert("error", error));
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);
  const clickedItem = (data) => {
    props.navigation.navigate("PetDetails", { data: data });
  };

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text style={{ fontSize: 15 }}>{item.breed}</Text>
      </Card>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    margin: 10,
    backgroundColor: "skyblue",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "blue",
  },
});

export default AdoptPet;
