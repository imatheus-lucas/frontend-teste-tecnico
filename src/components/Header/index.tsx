import { FiBell } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Badge from '../Badge';
import { Container } from './styles';
export default function Header() {
  return (
    <Container>
      <span>ekantika</span>
      <div>
        <span>
          <Badge />
          <FiBell size={20} />
        </span>
        <button>
          <img
            src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
            alt="Ekantika"
          />
          <span>Lorem ipsum Dolor</span>
          <MdKeyboardArrowDown size={20} color="#fff" />
        </button>
      </div>
    </Container>
  );
}
