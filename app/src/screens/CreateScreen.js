import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useContext, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";

import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);

  const navigation = useNavigation();

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

// const CreateScreen = () => {
//   const route = useRoute();
//   const { id } = route.params;

//   const { state } = useContext(Context);

//   const blogPost = state.find((blogPost) => blogPost.id === id);

//   const navigation = useNavigation();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const { addBlogPost } = useContext(Context);

//   return (
//     <View>
//       <Text style={styles.label}>Enter Title: </Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//       ></TextInput>

//       <Text style={styles.label}>Enter Content: </Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={(text) => setContent(text)}
//       ></TextInput>

//       <Button
//         title="Add Blog Post"
//         onPress={() => {
//           addBlogPost(title, content, () => {
//             navigation.navigate("Index");
//           });
//         }}
//       ></Button>
//     </View>
//   );
// };

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
export default CreateScreen;
