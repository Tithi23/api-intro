function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

loadComment();

function displayComments(comments) {
    console.log(comments)
    const commentsContainer = document.getElementById('comments');
    for (const comment of comments) {
        const h4 = document.createElement('h4');
        h4.innerText = `post: ${comment.postId} 
        body: ${comment.body}
         email: ${comment.email}
         `;
        h4.style.border = '2px solid yellow';
        h4.style.backgroundColor = 'skyblue';
        h4.style.textAlign = 'center';
        commentsContainer.appendChild(h4);
    }
}