import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Typo } from "../../../components/ui/Typo";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "../../../components/ui/Link";
import { Button } from "../../../components/ui/button";
import {
  getPostById,
  showPost,
  deletePost,
} from "../../../redux/slices/postSlice";

import * as SC from "./styles";
import { Loader } from "../../../components/ui/Loader";

export const DetailPostPage = () => {
  const { id } = useParams();
  const { list } = useSelector((state) => state.posts.posts);
  const postForView = useSelector((state) => state.posts.postForView);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  

  const [postForDelete, setPostForDelete] = useState(null);

  const showEditAndDeleteButtons = user && list;

  const onDeletePost = () => {
    dispatch(deletePost(postForDelete));
    setPostForDelete(null);
    return navigate("/posts");
  };

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
      <>
        <Typo>
          <Loader />
          Loading...
        </Typo>
      </>
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
      {postForDelete && (
        <SC.ModalOverlay>
          <SC.Modal>
            <SC.ModalHeader>
              <h2>
                Вы точно уверены, что хотите удалить публикацию c ID -{" "}
                {postForDelete.id}
              </h2>
            </SC.ModalHeader>
            <SC.ButtonContent>
              <SC.Button onClick={() => onDeletePost(postForDelete)}>
                Да!
              </SC.Button>
              <Button onClick={() => setPostForDelete(null)}>Нет</Button>
            </SC.ButtonContent>
          </SC.Modal>
        </SC.ModalOverlay>
      )}
      <SC.PostTitle>
        <Typo>{post.title}</Typo>
      </SC.PostTitle>
      <SC.PostImage src={image} alt={post.title} />
      <SC.PostContent>{post.body}</SC.PostContent>
      <SC.WrapperLinks>
        <Link to="/posts/">
          Обратно к публикации
          <FaArrowUp />
        </Link>
        {showEditAndDeleteButtons && (
          <Link to={`/posts/${post.id}/edit`}>
            Редактировать
            <FaArrowUp />
          </Link>
        )}
        {showEditAndDeleteButtons && (
          <Button onClick={() => setPostForDelete(post)}>Удалить</Button>
        )}
      </SC.WrapperLinks>
    </SC.PostContainer>
  );
};
