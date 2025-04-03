import { useState } from "react";
import { Container } from "../../../../components/container";
import * as SC from "./styles";
import { Button } from "../../../../components/Button";

const DEFAULT_VALUES = {
  title: "",
  body: "",
};

export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
  const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES);

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitForm(formValues);

    !defaultValues && setFormValues(DEFAULT_VALUES);
  };

  const disabled = !formValues.title || !formValues.body;

  return (
    <Container>
      <SC.FormContainer>
        <SC.FormTitle>{title}</SC.FormTitle>
        <SC.Form onSubmit={onSubmit}>
          <SC.FormGroup>
            <SC.Label htmlFor="title">Заголовок</SC.Label>
            <SC.Input
              type="text"
              name="title"
              value={formValues.title}
              placeholder="Введите заголовок"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </SC.FormGroup>

          <SC.FormGroup>
            <SC.Label htmlFor="body">Содержание</SC.Label>
            <SC.TextArea
              name="body"
              value={formValues.body}
              placeholder="Введите текст"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </SC.FormGroup>

          <Button type="submit" disabled={disabled}>
            Сохранить
          </Button>
        </SC.Form>
      </SC.FormContainer>
    </Container>
  );
};
