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
import { useState, useEffect } from "react";
import { TextInput, Button, Card } from "react-native-paper";

function Signup(props) {
  const [name, setName] = useState(name);
  const [email, setEmail] = useState(email);
  const [mobile, setMobile] = useState(mobile);
  const [pwd, setPwd] = useState(pwd);

  const updateData = () => {
    fetch(`http://192.168.253.229:8080/Signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile, pwd }),
    })
      .then((rsep) => rsep.json())
      .then((data) => {
        props.navigation.navigate("Home");
      })
      .catch((error) => console.log("error"));
  };
  return (
    <View>
      <Image source={pic1} style={{ width: 100, height: 100 }} />
      <TextInput
        style={styles.inputstyles}
        label="name"
        value={name}
        mode="outlined"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="email"
        value={email}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="mobile"
        value={mobile}
        mode="outlined"
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputstyles}
        label="pwd"
        value={pwd}
        mode="outlined"
        onChangeText={(text) => setPwd(text)}
      />

      <Button
        style={{ margin: 10 }}
        mode="contained"
        onPress={() => updateData()}
      >
        Signup
      </Button>
      <Button style={{ margin: 10 }} mode="contained">
        if signup done then click here
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyles: {
    margin: 10,
  },
});

export default Signup;
