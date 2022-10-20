import { useEffect, useState } from "react";
// import useGeneralStore from "../../context/GeneralContext";
import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";
// import SinglePost from "../../components/singlePostBox/SinglePostBox";

const Home = () => {
  const axiosInstance = useAxios();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await axiosInstance
      .get("/feed/")
      .then((req) => {
        // console.warn(req.data.data, "SUCCESS fetch at home");
        setPosts((prev) => [...req.data.data, ...prev]);
      })
      .catch(() => console.error("this Home====ERROR"));
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <HomeStyles className="mainSection">
      {posts.map((post) => (
        <div key={`GIF_${post.gifId}` || `ARTICLE_${post.articleId}`}>
          <h1>{post.title}</h1>
          <img src={post.imageUrl || ""} alt="" />
          {post.gifId ? <h3>This is a GIF</h3> : <h3>This is the ARTICLE</h3>}
          <p>
            <span>Created On: </span>
            <span>{post.createdOn}</span>
          </p>
        </div>
      ))}
      {/* <SinglePost /> */}
      <HomeDemo />
    </HomeStyles>
  );
};

export default Home;
