import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useCallback } from "react";
// import BlogContext from "../context/BlogContext";
import { Context } from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

export default function IndexScreen() {
  // const { data, addBlogPost } = useContext(BlogContext);
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } =
    useContext(Context);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // Function to fetch blog posts when the screen is focused
      const fetchBlogPosts = async () => {
        try {
          // Call getBlogPosts() here
          await getBlogPosts();
        } catch (error) {
          // Handle error if any
          console.error("Error fetching blog posts:", error);
        }
      };

      // Call fetchBlogPosts() when the screen is focused
      fetchBlogPosts();

      // Cleanup function when the component is unmounted or loses focus
      return () => {
        // Optionally, perform cleanup actions here

        console.log("Cleaning up MyScreen");
      };
    }, [])
  );

  /*   useEffect(() => {
    getBlogPosts();
  }, []); */

  return (
    <View>
      {/* <Button title="Add Post" onPress={addBlogPost} /> */}

      <Text>The Blog List</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>

                <TouchableOpacity
                  onPress={() => {
                    console.log(item.id);
                    deleteBlogPost(item.id);
                  }}
                >
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
  },
});
