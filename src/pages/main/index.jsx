import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Typo } from "../../components/Typo";
import { useEffect } from "react";
import { getFreshPosts } from "../../redux/slices/postSlice";

export const MainPage = () => {

  const dispatch = useDispatch();

  const postForView = useSelector((state) => state.posts.postForView);
  const freshPosts = useSelector((state) => state.posts.freshPosts);

  useEffect(() => {
    dispatch(getFreshPosts())
  }, [])
  return (
    <>
      {freshPosts && (
        <>
          <Typo>Свежие публикации</Typo>
          <Posts posts={freshPosts} />
        </>
      )}
      {postForView && (
        <>
          <Typo>Последний просмотренный пост</Typo>
          <Posts posts={[postForView]} />
        </>
      )}
    </>
  );
};
