import MyPost from "./mypost";

async function getPosts() {
  const postData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsData = await postData.json();
  return postsData;
}
const Post = async () => {
  const posts = await getPosts();
  return (
    <>
      <h2>Post Data</h2>
      {posts.map((post) => (
        <>
          <h4 key={post.id}>
            #{post.id}) Post Title: {post.title}
          </h4>
          {/* <button onClick={()=>alert("hello")} >Click Me!!</button> */}
          <MyPost data={post.id} />
        </>
      ))}
    </>
  );
};

export default Post;
