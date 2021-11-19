import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

function CreatePharmacy(props) {
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const InsertData = () => {
    fetch("http://192.168.253.229:8080/Pharmacy/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        contact: contact,
        description: description,
        location: location,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.navigation.navigate("Pharmacy");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <View>
      <TextInput
        style={styles.inputstyles}
        label="Contact"
        value={contact}
        mode="outlined"
        onChangeText={(text) => setContact(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="descriptions"
        value={description}
        multiline
        numberOfLines={10}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="name"
        value={name}
        multiline
        numberOfLines={1}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="location"
        value={location}
        multiline
        numberOfLines={5}
        onChangeText={(text) => setLocation(text)}
      />

      <Button
        style={{ margin: 10 }}
        icon="pencil"
        mode="contained"
        onPress={() => InsertData()}
      >
        insert article
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyles: {
    margin: 10,
  },
});

export default CreatePharmacy;
