import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { Button, Card } from "react-native-paper";

function ArticleDetails(props) {
  const data = props.route.params.data;

  const deletedData = (data) => {
    fetch(`http://192.168.253.229:8080/articles/${data.id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        props.navigation.navigate("Home");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <ScrollView>
      <Card>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>{data.title}</Text>

          <Text style={{ fontSize: 30, fontStyle: "italic" }}>
            {data.description}
          </Text>
        </View>

        <View style={styles.btnStyle}>
          <Button
            icon="update"
            mode="contained"
            onPress={() => props.navigation.navigate("Edit", { data: data })}
          >
            Edit
          </Button>
          <Button
            icon="update"
            mode="contained"
            onPress={() => deletedData(data)}
          >
            Delete
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 20,
  },
  btnStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15,
    padding: 30,
  },
  header: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default ArticleDetails;
