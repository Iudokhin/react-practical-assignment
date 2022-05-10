export const updatePost = (postId, data) => {


        fetch(`http://localhost:8080/post/${postId}`, {
            method: "PUT",
            headers : {
                'Content-Type' : ' application/json'
            },
            body:JSON.stringify(
                data
            )
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}



export const createPost = (postId, data) => {
    fetch(`http://localhost:8080/post/`, {
        method: "POST",
        headers : {
            'Content-Type' : ' application/json'
        },
        body:
        JSON.stringify({
            title:'penis',
            username:'albert'
        })
    })
}
    

