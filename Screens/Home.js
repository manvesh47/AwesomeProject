import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View, Alert } from "react-native";
import { Card, FAB } from "react-native-paper";
import { Image } from "react-native";
import pic1 from "../images/pic.png";

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoaing] = useState(true);

  const loadData = () => {
    fetch("http://192.168.253.229:8080/articles/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoaing(false);
      })
      .catch((error) => Alert.alert("error", error));
  };

  useEffect(() => {
    loadData();
  }, []);

  const clickedItem = (data) => {
    props.navigation.navigate("Details", { data: data });
  };

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle} onPress={() => clickedItem(item)}>
        <Image source={pic1} style={{ width: 40, height: 40 }} />

        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <Text style={{ fontSize: 15 }}>{item.description}</Text>
      </Card>
    );
  };

  return (
    <View style={{ flex: 2 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        onRefresh={() => loadData()}
        refreshing={loading}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => props.navigation.navigate("Create")}
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

export default Home;
