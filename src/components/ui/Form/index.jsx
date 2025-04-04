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
