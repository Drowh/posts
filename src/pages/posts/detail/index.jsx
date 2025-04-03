import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "../../../components/Link";
import { getPostById, showPost } from "../../../redux/slices/postSlice";

import * as SC from "./styles";
import { Loader } from "../../../components/Loader";

export const DetailPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();

  useEffect(() => {
    const intId = Number(id);
    const findedPosts = list?.find((item) => item.id === intId);
    if (findedPosts) {
      dispatch(showPost(findedPosts));
    } else {
      dispatch(getPostById(intId));
    }
  }, [id, list, dispatch]);

  if (postForView.loading) {
    return (
      <SC.PostContainer>
        <Loader />
        <Typo>Loading...</Typo>
      </SC.PostContainer>
    );
  }

  if (
    !postForView.post ||
    !Object.prototype.hasOwnProperty.call(postForView.post, "id")
  ) {
    return (
      <SC.PostContainer>
        <Typo>Пост не найден.</Typo>
      </SC.PostContainer>
    );
  }

  const { post } = postForView;

  const image =
    post.image ||
    "https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773881.jpg?t=st=1742436114~exp=1742439714~hmac=361bd9adc9d2c4d90add6c2386375923111f0e5d614a6d463a3bf2ee7daaec0b&w=826";

  return (
    <SC.PostContainer>
      <SC.PostTitle>
        <Typo>{post.title}</Typo>
      </SC.PostTitle>
      <SC.PostImage src={image} alt={post.title} />
      <SC.PostContent>{post.body}</SC.PostContent>
      <Link to="/posts/">
        Обратно к публикации
        <FaArrowUp />
      </Link>
    </SC.PostContainer>
  );
};
