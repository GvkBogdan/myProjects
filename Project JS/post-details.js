
//6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

const url = new URL(location.href);// створюємо нову силку з нашого локейшена
const JSNPost = url.searchParams.get('titlePost'); //
const titlePost = JSON.parse(JSNPost) // отримуємо готового юзера
console.log(titlePost);


let postInfo = document.getElementsByClassName('Info-post')[0];


let postTitle = document.createElement('p')
postTitle.innerHTML = `<h3> Title of post: ${titlePost.title}</h3>`;

let postBody = document.createElement('p')
postBody.innerHTML = `<h4> Post description: ${titlePost.body}</h4>`;

let postUserId = document.createElement('p');
postUserId.innerHTML = `<h4>User_userId - ${titlePost.userId}</h4>`;

let postId = document.createElement('p');
postId.innerHTML = `<h4>User_id - ${titlePost.id}</h4>`;


postTitle.appendChild(postBody)
postInfo.appendChild(postTitle);
postInfo.appendChild(postUserId);
postInfo.appendChild(postId);



//8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


fetch(`https://jsonplaceholder.typicode.com/posts/${titlePost.id}/comments`)
    .then(comment => comment.json())
    .then(comment => {

        let commentsPost = document.getElementsByClassName('Commets-post')[0];
        commentsPost.innerHTML = '';

        for (const commentsOfPost of comment) {

            let commentBlock = document.createElement('div')
            commentBlock.innerHTML = '<h2>Сomments about the post</h2>';

            let commentName = document.createElement('p');
            commentName.innerHTML = ` <h3> Title of comments: ${commentsOfPost.name} </h3>`

            let commentBody = document.createElement('p');
            commentBody.innerHTML = `<h4>Comments description: ${commentsOfPost.body}</h4>`;

            let commentEmail = document.createElement('p');
            commentEmail.innerHTML = `<h5>email of user comment: ${commentsOfPost.email}</h5>`;

            commentBlock.appendChild(commentName);
            commentBlock.appendChild(commentBody);
            commentBlock.appendChild(commentEmail);
            commentsPost.appendChild(commentBlock);




        }


})