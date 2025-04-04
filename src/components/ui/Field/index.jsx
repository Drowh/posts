import * as SC from "./styles";

export const Field = ({ label, children }) => {
  return (
    <SC.Field>
      {label && <SC.Label>{label}</SC.Label>}
      {children}
    </SC.Field>
  );
};