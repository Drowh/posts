import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { useEffect } from "react";
import { getFreshPosts, getPosts } from "../../redux/slices/postSlice";
import { Typo } from "../../components/ui/Typo";
import { Loader } from "../../components/ui/Loader";

export const MainPage = () => {
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.posts.postForView);
  const { posts, loading } = useSelector((state) => state.posts.freshPosts);
  const { list } = useSelector((state) => state.posts.posts);

  useEffect(() => {
    const loadData = async () => {
      if (!list) {
        await dispatch(getPosts());
      }

      if (!posts) {
        dispatch(getFreshPosts());
      }
    };

    loadData();
  }, [dispatch, list, posts]);

  return (
    <>
      {loading && <Loader />}
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
