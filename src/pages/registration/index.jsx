import { Button } from "../../components/ui/Button";
import { Container } from "../../components/container/styles";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Form, FormTitle } from "../../components/ui/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userId = Date.now();
      const newUser = { id: userId, ...formValues };

      if (!users) {
        localStorage.setItem("users", JSON.stringify([newUser]));
        alert("Вы успешно зарегистрировались");
        navigate("/auth");
        return;
      }

      if (users.find((user) => user.email === formValues.email)) {
        alert("Пользователь с таким email уже существует");
        return;
      }

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      alert("Вы успешно зарегистрировались");
      navigate("/auth");
    } catch (error) {
      console.error(error);
    }
  };

  const disabled =
    !formValues.name ||
    !formValues.surname ||
    !formValues.email ||
    !formValues.password;
  return (
    <Container>
      <Form onSubmit={onSubmit} autoComplete="off">
        <FormTitle>Регистрация</FormTitle>
        <Field htmlFor="title">
          Имя
          <Input
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Введите ваше Имя"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field htmlFor="surname">
          Фамилия
          <Input
            type="text"
            name="surname"
            value={formValues.surname}
            placeholder="Введите вашу Фамилию"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field htmlFor="email">
          Email
          <Input
            type="email"
            name="email"
            value={formValues.email}
            placeholder="Введите ваш Email"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Field htmlFor="password">
          Пароль
          <Input
            type="password"
            name="password"
            value={formValues.password}
            placeholder="Введите ваш пароль"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </Field>
        <Button type="submit" disabled={disabled}>
          Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
};
