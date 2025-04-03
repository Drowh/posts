import { useState } from "react";
import { Container } from "../../../../components/container";
import { useDispatch } from "react-redux";
import * as SC from "./styles";
import { addPost } from "../../../../redux/slices/postSlice";

const DEFAULT_VALUES = {
  title: "",
  body: "",
};

export const PostForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(formValues));
    setFormValues(DEFAULT_VALUES);
  };

  const disabled = !formValues.title || !formValues.body;
  
  return (
    <Container>
      <SC.FormContainer>
        <SC.FormTitle>Добавить новый пост</SC.FormTitle>
        <SC.Form onSubmit={onSubmit}>
          <SC.FormGroup>
            <SC.Label htmlFor="title">Заголовок</SC.Label>
            <SC.Input
              type="text"
              name="title"
              value={formValues.title}
              placeholder="Введите заголовок поста"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </SC.FormGroup>

          <SC.FormGroup>
            <SC.Label htmlFor="body">Содержание</SC.Label>
            <SC.TextArea
              name="body"
              value={formValues.body}
              placeholder="Введите текст поста"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </SC.FormGroup>

          <SC.SubmitButton type="submit" disabled={disabled}>
            Сохранить
          </SC.SubmitButton>
        </SC.Form>
      </SC.FormContainer>
    </Container>
  );
};
