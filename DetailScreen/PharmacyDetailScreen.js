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

function PharmacyDetailScreen(props) {
  const data = props.route.params.data;

  return (
    <ScrollView>
      <Card>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>{data.name}</Text>
          <Text style={{ fontSize: 20 }}>{data.contact}</Text>

          <Text style={{ fontSize: 20 }}>{data.description}</Text>

          <Text style={{ fontSize: 20 }}>{data.location}</Text>
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

export default PharmacyDetailScreen;
