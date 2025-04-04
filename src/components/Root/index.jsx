import { Outlet } from "react-router-dom";
import * as SC from "./styles";
import { Container } from "../container";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export const Root = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      <Container>
        <SC.Menu>
          <SC.MenuItem to={"/"}>Главная</SC.MenuItem>
          <SC.MenuItem to={"/posts"}>Список постов</SC.MenuItem>
          {!user && <SC.MenuItem to={"/auth"}>Авторизация</SC.MenuItem>}
          {!user && <SC.MenuItem to={"/registration"}>Регистрация</SC.MenuItem>}
          {user &&<SC.MenuItem to={"/posts/add"}>Добавление поста</SC.MenuItem>}
          {user && <SC.MenuItem to={"/auth"} onClick={onLogout}>Выход</SC.MenuItem>}
        </SC.Menu>
      </Container>
      <Outlet />
    </>
  );
};
