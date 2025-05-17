import * as SC from "./styles";

export const Typo = ({ children, asText }) => {
  return asText ? (
    <SC.TextContent>{children}</SC.TextContent>
  ) : (
    <SC.Title>{children}</SC.Title>
  );
};
