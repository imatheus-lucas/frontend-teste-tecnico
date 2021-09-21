import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import { Container, TableHeader } from './styles';
import { MdExpandMore, MdUnfoldMore, MdSearch } from 'react-icons/md';
import CheckBox from '../../components/CheckBox';
export default function Home() {
  return (
    <Container>
      <Header />
      <SideNav />
      <main>
        <h1>Gestão de clientes</h1>
        <section>
          <TableHeader>
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
          </TableHeader>
        </section>
      </main>
    </Container>
  );
}
