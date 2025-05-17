import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { addPost } from "../../../redux/slices/postSlice";

export const AddPostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = (formValues) => {
    dispatch(addPost(formValues));
    navigate("/posts");
  };
  return (
    <PostForm title="Добавление нового поста" onSubmitForm={onSubmitForm} />
  );
};
