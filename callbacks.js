const posts = [
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;

        })
        document.body.innerHTML = output;
    },1000)
}
//we add a callback beacause the dom was already painted by the time taken to create post
function createPosts(post,callback) {
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}
getPosts();
createPosts({title:'Post three',body:'This is post three'},getPosts);