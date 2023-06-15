import { Container, Button, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { AppContext } from "../components/AppContext.js";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../http/userAPI.js";

const Admin = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    logout();
    user.logout();
    navigate("/login", { replace: true });
  };

  return (
    <Container>
      <h1>Панель управления</h1>
      <p>Это панель управления магазином для администратора</p>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/admin/orders">Заказы в магазине</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/admin/brands">Бренды каталога</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/admin/products">Товары каталога</Link>
        </ListGroup.Item>
      </ListGroup>
      <Button onClick={handleLogout}>Выйти</Button>
    </Container>
  );
};

export default Admin;
