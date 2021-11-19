import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import pic1 from "../images/pic.png";
import { Image } from "react-native";
import pic2 from "../images/pic2.png";
import { useState, useEffect } from "react";
import { TextInput, Button, Card } from "react-native-paper";
import { render } from "react-dom";

function Login(props) {
  const [data, setData] = useState([]);
  const [loading, setLoaing] = useState(true);
  const [username, setUsername] = useState(username);
  const [password, setPassword] = useState(password);

  const loadData = (username) => {
    fetch("http://192.168.253.229:8080/Signup/", {
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

  return (
    <View>
      <Image
        source={pic2}
        style={{
          padding: 10,
          width: 150,
          height: 150,
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
      />

      <TextInput
        style={styles.inputstyles}
        label="name"
        value={username}
        mode="outlined"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="password"
        value={password}
        mode="outlined"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        style={{ margin: 10 }}
        mode="contained"
        onPress={() => props.navigation.navigate("Index")}
      >
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyles: {
    margin: 10,
  },
});

export default Login;
