import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

function CreatePets(props) {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const InsertData = () => {
    fetch("http://192.168.253.229:8080/AdoptPet/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        breed: breed,
        description: description,
        age: age,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.navigation.navigate("Pharmacy");
      })
      .catch((error) => console.log("error"));
  };

  const numCheck = () => {
    if (isNaN(age)) {
      alert("not a valid number");
    } else {
    }
  };

  return (
    <View>
      <TextInput
        style={styles.inputstyles}
        label="breed"
        value={breed}
        mode="outlined"
        onChangeText={(text) => setBreed(text)}
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
        label="age"
        keyboardType="phone-pad"
        value={age}
        multiline
        numberOfLines={1}
        onChangeText={(text) => setAge(text)}
        onBlur={numCheck()}
      />
      <TextInput
        style={styles.inputstyles}
        label="name"
        value={name}
        multiline
        onChangeText={(text) => setName(text)}
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

export default CreatePets;
