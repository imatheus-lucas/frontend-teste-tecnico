import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import {
  Container,
  Table,
  ScrollingTable,
  Pagination,
  Wrapper,
  Main,
} from './styles';
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
import TableHeaderActions from '../../components/TableHeaderActions';
import { useEffect, useState } from 'react';
import { fetchApi } from '../../services/api';

type RegionsDataProps = {
  idRegion: number;
  nameRegion: string;
};
export default function Home() {
  const [regions, setRegions] = useState<RegionsDataProps[]>([]);
  const fetchRegiosList = async () => {
    const data = await fetchApi('/region/list');
    setRegions(data.regions);
  };
  useEffect(() => {
    fetchRegiosList();
  }, []);
  return (
    <Container>
      <Header />
      <Wrapper>
        <SideNav />
        <Main>
          <h1>Gestão de clientes</h1>
          <section>
            <TableHeaderActions />
            <ScrollingTable>
              <Table>
                <thead>
                  <tr>
                    <th></th>
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
                <tbody>
                  {regions.map(region => (
                    <tr key={region.idRegion}>
                      <td>
                        <CheckBox checked={false} />
                      </td>
                      <td>{region.idRegion}</td>
                      <td>{region.nameRegion}</td>

                      <td>
                        <div>
                          <Switch
                            onChange={() => {}}
                            checked={true}
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ScrollingTable>
          </section>
          <Pagination>
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
          </Pagination>
        </Main>
      </Wrapper>
    </Container>
  );
}
