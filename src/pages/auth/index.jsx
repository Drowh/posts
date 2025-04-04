import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Container } from "../../components/container";
import { Form, FormTitle } from "../../components/ui/form";
import { Field } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { useDispatch } from "react-redux"
import { login } from "../../redux/slices/authSlice";

export const AuthPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const onSubmit = (e) => {
      e.preventDefault();
      try {
const users = JSON.parse(localStorage.getItem("users")) || [];
        
        if (!users) {
          alert("Пользователь не найден");
          return;
        }
        const currentUser = users.find(
          (user) => user.email === formValues.email && user.password === formValues.password
        );
        if (!currentUser) {
          alert("Пользователь не найден");
          return;
        }

        dispatch(login(currentUser));
        navigate("/posts");

      } catch (error) {
        console.error(error);
      }
    };

  const onChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const disabled = !formValues.email || !formValues.password;
  return (
    <Container>
      <Form onSubmit={onSubmit} autoComplete="off">
        <FormTitle>Авторизация</FormTitle>
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
          Авторизоваться
        </Button>
      </Form>
    </Container>
  );
};
