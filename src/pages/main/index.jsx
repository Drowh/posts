import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { useEffect } from "react";
import { getFreshPosts, getPosts } from "../../redux/slices/postSlice";

export const MainPage = () => {

  const dispatch = useDispatch();

  const {post} = useSelector((state) => state.posts.postForView);
  const {posts, loading} = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getPosts()).then(() => {
      dispatch(getFreshPosts());
    });
  }, []);
  return (
    <>
    {loading && <Typo>Loading...</Typo>}
      {posts && (
        <>
          <Typo>Свежие публикации</Typo>
          <Posts posts={posts} />
        </>
      )}
      {post && (
        <>
          <Typo>Последний просмотренный пост</Typo>
          <Posts posts={[post]} />
        </>
      )}
    </>
  );
};
