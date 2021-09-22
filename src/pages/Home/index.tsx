import { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import ClientItem from '../../components/ClientList/ClientItem';
import TableHeaderActions from '../../components/TableHeaderActions';

import { MdUnfoldMore, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '../../services/api';
import {
  Table,
  ScrollingTable,
  Pagination,
  Wrapper,
  Main,
  PaginatiionButton,
  PaginationItem,
} from './styles';

type RegionsDataProps = {
  idRegion: number;
  nameRegion: string;
  statusRegion: boolean;
};
export default function Home() {
  const [regions, setRegions] = useState<RegionsDataProps[]>([]);

  const fetchRegiosList = async () => {
    const data = await api.GET('/region/list');

    const regions = data.regions.map((region: RegionsDataProps) => {
      return {
        idRegion: region.idRegion,
        nameRegion: region.nameRegion,
        status: false,
      };
    });
    setRegions(regions);
  };

  const handleToggleStatus = useCallback(
    async (idRegion: number) => {
      const region = regions.find(
        (region: RegionsDataProps) => region.idRegion === idRegion,
      );
      if (region) {
        region.statusRegion = !region.statusRegion;

        setRegions(prev => {
          return prev.map(region => {
            if (region.idRegion === idRegion) {
              return region;
            }
            return region;
          });
        });
      }
    },
    [regions],
  );

  useEffect(() => {
    fetchRegiosList();
  }, []);
  return (
    <>
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
                    <ClientItem
                      key={region.idRegion}
                      region={region}
                      toggleStatus={handleToggleStatus}
                    />
                  ))}
                </tbody>
              </Table>
            </ScrollingTable>
          </section>

          <Pagination>
            <small>Visualizado 1 - 25 de 70 clientes</small>
            <div>
              <PaginatiionButton>
                <MdChevronLeft />
              </PaginatiionButton>
              <PaginationItem className="active">1</PaginationItem>
              <PaginationItem>2</PaginationItem>
              <PaginationItem>3</PaginationItem>
              <PaginationItem>4</PaginationItem>
              <PaginationItem>5</PaginationItem>
              <PaginatiionButton>
                <MdChevronRight />
              </PaginatiionButton>
            </div>
          </Pagination>
        </Main>
      </Wrapper>
    </>
  );
}
