import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import { Container, TableContainer, TableHeader } from './styles';
import {
  MdExpandMore,
  MdUnfoldMore,
  MdSearch,
  MdCreate,
  MdDelete,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import CheckBox from '../../components/CheckBox';
import Switch from 'react-switch';
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
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    ID
                    <MdUnfoldMore />
                  </th>
                  <th>
                    NOME
                    <MdUnfoldMore />
                  </th>
                  <th>
                    CNPJ
                    <MdUnfoldMore />
                  </th>
                  <th>
                    STATUS
                    <MdUnfoldMore />
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }, (v, k) => k).map(item => (
                  <tr style={item == 1 ? { opacity: 0.5 } : {}}>
                    <td>
                      <CheckBox checked={false} />
                    </td>
                    <td>1</td>
                    <td>Coca-Cola company</td>
                    <td>12345678901234</td>
                    <td>
                      <Switch
                        onChange={() => {}}
                        checked={item != 1}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={20}
                        width={40}
                        handleDiameter={14}
                        offColor={'#dddddd'}
                        onColor={'#614CF9'}
                        className="react-switch"
                      />
                      <div>
                        <button>
                          <MdCreate />
                        </button>
                        <button>
                          <MdDelete color="#f45" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </section>
        <div className="footer">
          <span>Visualizado 1 - 25 de 70 clientes</span>
          <div>
            <button className="btn prev">
              <MdChevronLeft />
            </button>
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <button className="btn next">
              <MdChevronRight />
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
}
