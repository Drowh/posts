import { useDispatch, useSelector } from "react-redux";
import { PostForm } from "../components/PostForm";
import { useParams } from "react-router-dom";
import { editPost } from "../../../redux/slices/postSlice";
import { Typo } from "../../../components/Typo";

export const EditPostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.posts.posts);
  const onSubmitForm = (formValues) => {
    dispatch(editPost(formValues));
  };

  if (!list) {
    return <Typo>Пост не найден</Typo>;
  }

  const findedPost = list.find((item) => item.id === Number(id));


  return (
    <>
      <PostForm
        title={"Редактирование поста"}
        onSubmitForm={onSubmitForm}
        defaultValues={findedPost}
      />
    </>
  );
};
