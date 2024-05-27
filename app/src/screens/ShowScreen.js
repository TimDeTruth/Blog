import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

// let blogID;

const ShowScreen = () => {
  const route = useRoute();
  //   console.log(route);
  const { id } = route.params;
  //   blogID = id;
  console.log("the id in showscreen: " + id);

  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.options = ({ route }) => {
  // Define navigation options here
  const navigation = useNavigation();
  console.log("here", route);
  const { id } = route.params;

  return {
    title: "Show a Blogs",
    // id: blogID,
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: id })}>
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

// ShowScreen.options = {
//   // Define navigation options here
//   //   return {
//   title: "Show a blossgssggaaag",
//   headerRight: () => {
//     <TouchableOpacity>
//       <EvilIcons name="pencil" size={30} />
//     </TouchableOpacity>;
//   },
//   // headerRight: ({ navigation }) => (
//   //   <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
//   //     <EvilIcons name="pencil" size={30} />
//   //   </TouchableOpacity>
//   // ),
//   //   };
// };

// ShowScreen.options = ({ navigation }) => {
//   // Define navigation options here
//   return {
//     title: "Show a blossgggg",
//     headerRight: ({ navigation }) => (
//       <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
//         <EvilIcons name="pencil" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// };

export default ShowScreen;

const styles = StyleSheet.create({});
