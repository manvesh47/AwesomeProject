import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

function ArticleEdit(props) {
  const data = props.route.params.data;
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  const updateData = () => {
    fetch(`http://192.168.253.229:8080/articles/${data.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, description }),
    })
      .then((rsep) => rsep.json())
      .then((data) => {
        props.navigation.navigate("Home", { data: data });
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
        icon="update"
        mode="contained"
        onPress={() => updateData()}
      >
        Update article
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputstyles: {
    margin: 10,
  },
});

export default ArticleEdit;
