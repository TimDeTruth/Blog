// import { View, Text } from "react-native";
// import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import { useNavigation } from "@react-navigation/native";
import jsonServer from "../api/jasonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    //dont need anymore cause we use endpoint
    /*     case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]; */
    case "get_blogposts":
      return action.payload;

    default:
      return state;
  }
};
const getBlogPosts = (dispatch) => {
  return async () => {
    // response.data === [{} {} {}]
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editblogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      console.log("the id here: ", id);
      await jsonServer.put(`/blogposts/${id}`, {
        title: title,
        content: content,
      });

      dispatch({ type: "edit_blogpost", payload: { id, title, content } });

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error("axios error:", error.message);
    }
  };
};

//before adding api
/* const getBlogPosts = (dispatch) => {
  return async () => {
    // response.data === [{} {} {}]
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    // navigation.navigate("Index");
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editblogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });

    if (callback) {
      callback();
    }
  };
}; */

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editblogPost, getBlogPosts },
  []
  // [{ title: "Test Post", content: "Test content", id: "123" }]
);

//using reducer
// import { View, Text } from "react-native";
// import React, { useReducer } from "react";

// const BlogContext = React.createContext("");

// const blogReducer = (state, action) => {
//   switch (action.type) {
//     case "add_blogpost":
//       return [...state, { title: `Blog Post #${state.length + 1}` }];
//     default:
//       return state;
//   }
// };

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: "add_blogpost" });
//   };

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
// export default BlogContext;

//using useState
// import { View, Text } from "react-native";
// import React, { useState } from "react";

// const BlogContext = React.createContext("");

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   const addBlogPost = (title) => {
//     setBlogPosts([
//       ...blogPosts,
//       { title: `Blog Post #${blogPosts.length + 1}` },
//     ]);
//   };

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
