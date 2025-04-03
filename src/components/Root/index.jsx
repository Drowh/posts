import { Outlet } from "react-router-dom";
import * as SC from "./styles";
import { Container } from "../container";

export const Root = () => (
  <>
    <Container>
      <SC.Menu>
        <SC.MenuItem to={"/"}>Главная</SC.MenuItem>
        <SC.MenuItem to={"/posts"}>Список постов</SC.MenuItem>
        <SC.MenuItem to={"/posts/add"}>Добавление поста</SC.MenuItem>
        <SC.MenuItem to={"/auth"}>Авторизация</SC.MenuItem>
        <SC.MenuItem to={"/registration"}>Регистрация</SC.MenuItem>
      </SC.Menu>
    </Container>
    <Outlet />
  </>
);
