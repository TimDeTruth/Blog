import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

// import { BlogProvider } from "./src/context/BlogContext";
// import BlogContext from "./src/context/BlogContext";

import { Provider } from "./src/context/BlogContext";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
const Stack = createStackNavigator();

const App = ({}) => {
  // const navigation = useNavigation();
  const route = useRoute();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: "Blogs",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Create");
                }}
              >
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          // options={ShowScreen.options}
          options={ShowScreen.options}
          // options={({ navigation }) => ({
          //   title: "Show Blog",
          //   headerRight: ({}) => (
          //     <TouchableOpacity
          //       onPress={() => {
          //         console.log("route in index.js ", route);
          //         console.log("navigation in index.js ", navigation);
          //         navigation.navigate("Edit");
          //       }}
          //     >
          //       <EvilIcons name="pencil" size={30} />
          //     </TouchableOpacity>
          //   ),
          // })}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: "Create a blog" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: "Edit blog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
