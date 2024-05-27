import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const BlogPostForm = ({ onSubmit, initialValues = {} }) => {
  const navigation = useNavigation();

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>

      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      ></TextInput>

      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      ></Button>
    </View>
  );
};

//will be depreciated in future releases, us JS defautl paramaters
// BlogPostForm.defaultProps = {
//   initialValues: {
//     title: "",
//     content: "",
//   },
// };

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderBlockColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
});
export default BlogPostForm;
