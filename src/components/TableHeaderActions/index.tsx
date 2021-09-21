import { Container } from './styles';
import CheckBox from '../CheckBox';
import { MdExpandMore, MdSearch } from 'react-icons/md';
export default function TableHeaderActions() {
  return (
    <Container>
      <div>
        <CheckBox checked={true} />
        <button className="btn action">
          Acões
          <MdExpandMore />
        </button>
        <button className="btn apply">Aplicar</button>
      </div>
      <div>
        <div className="input__search">
          <MdSearch />
          <input type="text" placeholder="Buscar" />
        </div>
        <button className="btn new_client">NOVO CLIENTE</button>
      </div>
    </Container>
  );
}
