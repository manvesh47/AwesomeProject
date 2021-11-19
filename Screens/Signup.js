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
import pic2 from "../images/pic2.png";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import { TextInput, Button, Card, Checkbox } from "react-native-paper";
import { Hoverable, Pressable } from "react-native-web-hover";
import RadioButtons, { RadioButton } from "react-native-radio-buttons";

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pwd, setPwd] = useState("");
  const [option, setOption] = useState("");
  const [data, setData] = useState([]);

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
        props.navigation.navigate("Index");
      })
      .catch((error) => console.log("error"));
  };

  const loadData = () => {
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

  const checkTextInput = () => {
    if (!name.trim()) {
      alert("please enter your name");
      return;
    }
    if (!email.trim()) {
      alert("please enter your email");
      return;
    }
    if (!mobile.trim()) {
      alert("please enter valid mobile number");
      return;
    }
    if (!pwd.trim()) {
      alert("please enter your password");
      return;
    }
    updateData();
  };

  const handleOnChange = () => {
    // don't remember from where i copied this code, but this works.
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
    } else {
      alert("please enter a valid email");
    }
  };

  const numCheck = () => {
    if (isNaN(mobile)) {
      alert("not a valid number");
    } else {
    }
  };

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
        value={name}
        mode="outlined"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.inputstyles}
        label="email"
        value={email}
        mode="outlined"
        onChangeText={(value) => setEmail(value)}
        onBlur={handleOnChange}
      />
      <TextInput
        style={styles.inputstyles}
        label="mobile"
        value={mobile}
        keyboardType="phone-pad"
        mode="outlined"
        onChangeText={(value) => setMobile(value)}
        onBlur={numCheck}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputstyles}
        label="pwd"
        value={pwd}
        mode="outlined"
        onChangeText={(value) => setPwd(value)}
      />

      <Pressable
        style={({ hovered, focused, pressed }) => [
          styles.buttonRoot,
          hovered && styles.buttonHovered,
          focused && styles.buttonFocused,
          pressed && styles.buttonPressed,
        ]}
      >
        {({ hovered, focused, pressed }) => (
          <Button
            style={{ margin: 10 }}
            mode="contained"
            onPress={checkTextInput}
          >
            Signup
          </Button>
        )}
      </Pressable>
      <Hoverable>
        {({ hovered }) => (
          <Button
            style={{ margin: 10 }}
            mode="contained"
            onPress={() => props.navigation.navigate("Login", { data: data })}
          >
            if signup done then click here
          </Button>
        )}
      </Hoverable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyles: {
    margin: 10,
  },
});

export default Signup;
