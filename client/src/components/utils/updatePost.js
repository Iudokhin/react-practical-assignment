export const updatePost = (postId, data, rerender) => {

        fetch(`http://localhost:8080/post/${postId}`, {
            method: "PUT",
            headers : {
                'Content-Type' : ' application/json'
            },
            body:JSON.stringify(
                data
            )
        })
        .then(rerender(prev => !prev))
        .catch(err => console.log(err))
}



export const createPost = ( data, rerender ) => {
    fetch(`http://localhost:8080/post/`, {
        method: "POST",
        headers : {
            'Content-Type' : ' application/json'
        },
        body:
        JSON.stringify({
            title:data.title,
            username:data.username
        })
    })
    .then(rerender(prev => !prev))
}

export const uploadPhoto = ( postId, photoPath) => {

    let formData = new FormData()
    formData.append('picture', photoPath)

    fetch(`http://localhost:8080/post/${postId}/picture`, {
                method: "POST",
                body: formData 
    })
}

export const deletePost = ( postId, rerender ) => {
    fetch(`http://localhost:8080/post/${postId}`, {
        method: "DELETE"
    })
    .then(rerender(prev => !prev))
}

export const createComment = ( data, rerender ) => {
    fetch(`http://localhost:8080/comment`, {
        method: "POST",
        headers : {
            'Content-Type' : ' application/json'
        },
        body:
        JSON.stringify(data)
    })
    .then(rerender(prev => !prev))
}

export const deleteComment = ( commentId, rerender ) => {
    fetch(`http://localhost:8080/comment/${commentId}`, {
        method: "DELETE"
    })
    .then(rerender(prev => !prev))
}

export const updateComment = ( commentId, data, rerender ) => {
    fetch(`http://localhost:8080/comment/${commentId}`, {
        method: "PUT",
        headers : {
            'Content-Type' : ' application/json'
        },
        body:JSON.stringify(data)
    })
    .then(rerender(prev => !prev))
}
    
    

