// function attachEvents() {
//    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
//    document.getElementById('btnViewPost').addEventListener('click', loadDetails);
// }

// attachEvents();

// async function loadPosts() {
//     let menu = document.getElementById('posts');
//     // за да изтрием всички стари неща
//     menu.replaceChildren();

//     let posts = await getAllPosts();

//     for (let post of posts) {
//         let option = document.createElement('option');
//         option.value = post.id;
//         option.textContent = post.title;

//         menu.appendChild(option);
//     }
// }

// async function loadDetails() {
//     let menu = document.getElementById('posts');
//     let postId = menu.value;

//    let postData = await getPostById(postId);
//    let comments = await getCommentsByPostId(postId);

// //    let [postData, comments] = await Promise.all([
// //         getPostById(postId),
// //         getCommentsByPostId(postId)
// //     ]);

//    document.getElementById('post-title').textContent = postData.title;
//    document.getElementById('post-body').textContent = postData.body;

//    let list = document.getElementById('post-comments');
//    list.replaceChildren();

//    for (let comment of comments) {
//     let row = document.createElement('li');
//     row.id = comment.id;
//     row.textContent = comment.text;

//     list.appendChild(row);
//    }
// }

// // за да тества в нета пиша await  getAllPosts()
// async function getAllPosts() {
//     let res = await fetch('http://localhost:3030/jsonstore/blog/posts');

//     if (!res.ok) {
//         alert('Request error');
//         throw new Error('Request error');
//     }

//     // тъй като data идва като обект
//     let data = await res.json();
//     // ще върнем масив
//     return Object.values(data);
// }

// // за да тествам пиша await getAllPosts() копирам едно id
// // await getPostById(' ') поставям копираното id
// async function getPostById(postId) {
//     let res = await fetch('http://localhost:3030/jsonstore/blog/posts');
//     let posts = await res.json();

//     return posts[postId];
// }

// // за да тествам пиша await getAllPosts() копирам едно id
// // await getCommentsByPostId(' ') поставям копираното id
// async function getCommentsByPostId(postId) {
//     let res = await fetch('http://localhost:3030/jsonstore/blog/comments');
//     let data = await res.json();

//    return Object.values(data).filter(c => c.postId == postId);
// }

function attachEvents() {
    let postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
 
    document.getElementById('btnLoadPosts').addEventListener('click', () => { onPostsRequest(postUrl) });
    document.getElementById('btnViewPost').addEventListener('click', () => { onViewPost(commentsUrl) });
}
 
async function onPostsRequest(url) {
    let data;
 
    try {
        let response = await fetch(url);
        data = await response.json();
    } catch {
        return;
    }
 
    let selectPost = document.getElementById('posts');
 
    for (let [key, value] of Object.entries(data)) {
        let option = document.createElement('option');
 
        option.textContent = value.title;
        option.value = key;
 
        selectPost.appendChild(option);
    }
}
 
async function onViewPost(url) {
    let post = document.getElementById('posts');
    let postComments;
    let postData;
 
    try {
        const [postResponse, commentsResponse] = await Promise.all([
            fetch('http://localhost:3030/jsonstore/blog/posts'),
            fetch(url)
        ]);
 
        postData = await postResponse.json();
 
        let commentsData = await commentsResponse.json();
        postComments = Object.values(commentsData).filter(comment => comment.postId === post.value);
    } catch {
        return;
    }
 
    // Fetch-вах поста с URL-а + post.value и после долните две ги сетвах
    // с postData.title и postData.body. При мен се показваше правилно,
    // 3ти и 4ти тест не минаваха.
 
    document.getElementById('post-title').textContent = post.selectedOptions[0].textContent;
    document.getElementById('post-body').textContent = postData[post.value].body;
    
    let comments = document.getElementById('post-comments');
    comments.replaceChildren();
 
    for (let comment of postComments) {
        let li = document.createElement('li');
        li.textContent = comment.text;
        li.id = comment.id;
 
        comments.appendChild(li);
    }
}   
 
attachEvents();


// function attachEvents() {
//     let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
//     let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
 
//     let loadBtn = document.getElementById('btnLoadPosts');
//     let viewBtn = document.getElementById('btnViewPost');
 
//     let selectSection = document.getElementById('posts');
//     let postTitle = document.getElementById('post-title');
//     let postBody = document.getElementById('post-body');
//     let list = document.getElementById('post-comments');
 
//     loadBtn.addEventListener('click', loadPosts);
//     viewBtn.addEventListener('click', loadComments);
 
//     async function loadPosts () {
//         try {
//             let posts = await fetch(postsUrl);
//             let postData = await posts.json();
 
//             let postEntries = Object.entries(postData);
 
//             for (let [key, post] of postEntries) {
//                 let newOption = document.createElement('option');
//                 newOption.value = key;
//                 newOption.textContent = post.title;
 
//                 selectSection.appendChild(newOption);
//             }
 
//         } catch (error) {
//             console.error(error);
//         }
//     }
 
//     async function loadComments () {
//         let currentKey = selectSection.value;
//         let currentPost;
 
//         try {
//             let posts = await fetch(postsUrl);
//             let postData = await posts.json();
 
//             let currentPost = postData[currentKey];
 
//             postTitle.textContent = currentPost.title;
//             postBody.textContent = currentPost.body;
 
//         } catch (error) {
//             console.error(error);
//         }
 
//         try {
//             let comments = await fetch(commentsUrl);
//             let commentsData = await comments.json();
//             list.innerHTML = '';
            
//             let filteredComments = Object.values(commentsData).filter(c => c.postId === currentKey);
 
//             filteredComments.forEach(comment => {
//                 const li = document.createElement('li');
//                 li.textContent = comment.text;
//                 list.appendChild(li);
//             });
 
//         } catch (error) {
//             console.log(error);
//         }
//     }
 
// }
 
// attachEvents();

