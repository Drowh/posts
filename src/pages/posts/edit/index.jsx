import { useDispatch, useSelector } from "react-redux";
import { PostForm } from "../components/PostForm";
import { useParams, useNavigate } from "react-router-dom";
import { editPost } from "../../../redux/slices/postSlice";
import { Typo } from "./../../../components/ui/Typo";

export const EditPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.posts.posts);

  const onSubmitForm = (formValues) => {
    dispatch(editPost(formValues));
    navigate("/posts"); // Перенаправление на страницу со всеми постами после сохранения
  };

  if (!list) {
    return <Typo>Пост не найден</Typo>;
  }

  const findedPost = list.find((item) => item.id === Number(id));

  if (!findedPost) {
    return <Typo>Пост не найден</Typo>;
  }

  return (
    <>
      <PostForm
        title={"Редактирование поста"}
        onSubmitForm={onSubmitForm}
        defaultValues={findedPost}
        postId={id} // Передаем ID поста для кнопки отмены
      />
    </>
  );
};
