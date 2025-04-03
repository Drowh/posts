import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { useEffect } from "react";
import { getPosts } from "../../redux/slices/postSlice";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }
  }, [list, dispatch]);

  if (!list && loading) {
    return <Typo>Loading...</Typo>;
  }

  if (!list) {
    return <>404</>;
  }

  return (
    <>
      <Typo>Публикации</Typo>
      <Posts posts={list}  />
    </>
  );
};
