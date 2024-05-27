import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params;
  console.log("the id in editscreen: " + id);

  const { state, editblogPost } = useContext(Context);

  const blogPostToEdit = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{
        title: blogPostToEdit.title,
        content: blogPostToEdit.content,
      }}
      onSubmit={(title, content) => {
        editblogPost(id, title, content, () => navigation.goBack());
      }}
    />
  );
};

// const EditScreen = () => {
//   const route = useRoute();
//   const { id } = route.params;
//   console.log("the id in editscreen: " + id);

//   const { state } = useContext(Context);

//   const blogPostToEdit = state.find((blogPost) => blogPost.id === id);

//   const [title, setTitle] = useState(blogPostToEdit.title);
//   const [content, setContent] = useState(blogPostToEdit.content);

//   return (
//     <View>
//       <Text style={styles.label}>Edit Title: </Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={(newTitle) => setTitle(newTitle)}
//       ></TextInput>

//       <Text style={styles.label}>Edit Content: </Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={(newContent) => setContent(newContent)}
//       ></TextInput>

//       <Button title="Save" onPress={() => {}}></Button>
//     </View>
//   );
// };

export default EditScreen;

const styles = StyleSheet.create({
  //   label: {
  //     fontSize: 20,
  //     marginBottom: 5,
  //     marginLeft: 5,
  //   },
  //   input: {
  //     fontSize: 18,
  //     borderWidth: 1,
  //     borderBlockColor: "black",
  //     marginBottom: 15,
  //     padding: 5,
  //     margin: 5,
  //   },
});
