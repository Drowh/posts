import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Container } from "../../components/Container";
import { Form, FormTitle } from "../../components/ui/form";
import { Field } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { 
  login, 
  updateFormField, 
  setError, 
  selectAuthForm, 
  selectIsFormValid,
  selectAuthError,
  authHelpers
} from "../../redux/slices/authSlice";

export const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const formValues = useSelector(selectAuthForm);
  const isFormValid = useSelector(selectIsFormValid);
  const error = useSelector(selectAuthError);

  const onSubmit = (e) => {
    e.preventDefault();
    
    try {
      const authResult = authHelpers.authenticateUser(formValues.email, formValues.password);
      
      if (!authResult.success) {
        dispatch(setError(authResult.message));
        alert(authResult.message);
        return;
      }
      
      dispatch(login(authResult.user));
      navigate("/posts");
    } catch (error) {
      console.error(error);
      dispatch(setError("Произошла ошибка при авторизации"));
    }
  };

  const onChange = (name, value) => {
    dispatch(updateFormField({ name, value }));
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} autoComplete="off">
        <FormTitle>Авторизация</FormTitle>
        {error && <div className="error-message">{error}</div>}
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
        <Button type="submit" disabled={!isFormValid}>
          Авторизоваться
        </Button>
      </Form>
    </Container>
  );
};