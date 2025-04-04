import * as SC from "./styles";

export const Form = ({ children, ...rest }) => {
  return (
    <SC.FormContainer>
      <SC.Form {...rest}>{children}</SC.Form>
    </SC.FormContainer>
  );
};

export const FormTitle = ({ children }) => {
  return <SC.FormTitle>{children}</SC.FormTitle>;
};

// Пример использования:
// import { Form, FormGroup, Input, TextArea, FormTitle } from "./Form";

// const ExampleForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Форма отправлена");
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormTitle>Создать пост</FormTitle>
//       <FormGroup label="Заголовок">
//         <Input type="text" placeholder="Введите заголовок" required />
//       </FormGroup>
//       <FormGroup label="Описание">
//         <TextArea placeholder="Введите описание" required />
//       </FormGroup>
//       <FormGroup>
//         <Input type="submit" value="Отправить" />
//       </FormGroup>
//     </Form>
//   );
// };