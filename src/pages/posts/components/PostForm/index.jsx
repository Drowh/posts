import { useState } from "react";
import { Container } from "../../../../components/container";
import { Button } from "../../../../components/ui/Button";
import { Form, FormTitle } from "../../../../components/ui/Form";
import { Field } from "../../../../components/ui/Field";
import { TextArea } from "../../../../components/ui/TextArea";
import { Input } from "../../../../components/ui/Input";

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
      <Form onSubmit={onSubmit}>
        <FormTitle>{title}</FormTitle>
        <Field htmlFor="title">
          Заголовок
          <Input
            type="text"
            name="title"
            value={formValues.title}
            placeholder="Введите заголовок"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field htmlFor="body">
          Содержание
          <TextArea
            name="body"
            value={formValues.body}
            placeholder="Введите текст"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Button type="submit" disabled={disabled}>
          Сохранить
        </Button>
      </Form>
    </Container>
  );
};
