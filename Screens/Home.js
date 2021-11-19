import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Alert } from "react-native";
import { Card, FAB } from "react-native-paper";
import { TextInput, Button } from "react-native-paper";
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
      <Card style={styles.cardStyle}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Name: {item.title}
        </Text>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          Description: {item.description}
        </Text>
        <View style={styles.btnStyle}>
          <Button onPress={() => clickedItem(item)}>
            Click for more details
          </Button>
        </View>
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
  btnStyle: {
    width: 230,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    backgroundColor: "white",
  },
});

export default Home;
