import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
function Create(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const InsertData = () => {
    fetch("http://192.168.253.229:8080/articles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title: title, description: description }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.navigation.navigate("Home");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <View>
      <TextInput
        style={styles.inputstyles}
        label="Title"
        value={title}
        mode="outlined"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.inputstyles}
        label="descriptions"
        value={description}
        multiline
        numberOfLines={10}
        onChangeText={(text) => setDescription(text)}
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

export default Create;
