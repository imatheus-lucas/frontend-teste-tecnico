import { Container } from './styles';
import { FiHome, FiUsers, FiBook, FiInfo } from 'react-icons/fi';
export default function SideNav() {
  return (
    <Container>
      <a href="#">
        <FiHome size={20} />
      </a>
      <a href="#" className="active">
        <FiBook size={20} />
      </a>
      <a href="#">
        <FiUsers size={20} />
      </a>
      <a href="#">
        <FiInfo size={20} />
      </a>
    </Container>
  );
}
