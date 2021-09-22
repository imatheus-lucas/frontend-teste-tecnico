import { MdUnfoldMore } from 'react-icons/md';
import { Container, ScrollingTable, Table, Search, THeader } from './styles';
import CheckBox from '../Basics/CheckBox';
import Button from '../Basics/Button';
import { MdSearch } from 'react-icons/md';
import Select from '../Basics/Select';
interface ClientListProps {
  children: React.ReactNode;
}
export default function ClientList({ children }: ClientListProps) {
  return (
    <Container>
      <THeader>
        <div>
          <CheckBox checked={true} />

          <Select>
            <option value="">Açoes</option>
          </Select>

          <Button outlined>Aplicar</Button>
        </div>
        <div>
          <Search>
            <MdSearch />
            <input type="text" placeholder="Buscar" />
          </Search>
          <Button>Novo Cliente</Button>
        </div>
      </THeader>
      <ScrollingTable>
        <Table>
          <thead>
            <tr>
              <td></td>
              <th>
                ID
                <MdUnfoldMore />
              </th>
              <th>
                REGIÃO
                <MdUnfoldMore />
              </th>

              <th>
                STATUS
                <MdUnfoldMore />
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </Table>
      </ScrollingTable>
    </Container>
  );
}
