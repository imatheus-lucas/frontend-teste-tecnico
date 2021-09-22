import { Container, NavLink } from './styles';
import { FiHome, FiUsers, FiBook, FiInfo } from 'react-icons/fi';
export default function SideNav() {
  return (
    <Container>
      <NavLink href="#">
        <FiHome size={20} />
      </NavLink>
      <NavLink href="#" className="active">
        <FiBook size={20} />
      </NavLink>
      <NavLink href="#">
        <FiUsers size={20} />
      </NavLink>
      <NavLink href="#">
        <FiInfo size={20} />
      </NavLink>
    </Container>
  );
}
