import { createAsyncThunk } from "@reduxjs/toolkit";
import { COMMENT, PAGE, POST, SEARCH, URL } from "../../components/utils/constants";


export const loadPosts = createAsyncThunk('post/loadPosts', 
    (page) => {
        return fetch(URL+POST+PAGE+page)
            .then(resp => resp.json())
})


export const updatePost = (postId, data) => {
        fetch(URL + POST + `${postId}`, {
            method: "PUT",
            headers: {
            "Content-Type": " application/json",
            },
            body: JSON.stringify(data),
        })
        .then(resp => resp.json())
        .catch((err) => console.log(err));
}


export const createPost = createAsyncThunk('post/createPost', 
    (data) => {
        return fetch(URL + POST, {
            method: "POST",
            headers: {
                "Content-Type": " application/json",
            },
            body: JSON.stringify({
                title: data.title,
                username: data.username,
            }),
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
})

export const deletePost = createAsyncThunk('post/deletePost', 
    (postId) => {
       return fetch(URL + POST + `${postId}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .catch(err => console.log(err))
  })


export const uploadPhoto = async (postId, photoPath) => {
        let formData = new FormData();
        formData.append("picture", photoPath);

        return fetch(URL + POST + `${postId}/picture`, {
            method: "POST",
            body: formData,
        })

}

export const createComment = createAsyncThunk('comment/createComment',
  (data) => {
    return fetch(URL + COMMENT, {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
})

export const deleteComment = createAsyncThunk('comment/deleteComment', 
  (commentId) => {
    return fetch(URL + COMMENT + `${commentId}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .catch(err => console.log(err))
})

export const updateComment = async (commentId, data) => {
    return fetch(URL + COMMENT + `${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const filterPosts = createAsyncThunk('post/filerPosts',
  (keyword) => {
    return fetch(URL + POST + SEARCH + `${keyword}`)
    .then(res => res.json())
    .catch(err => console.log(err))
})
