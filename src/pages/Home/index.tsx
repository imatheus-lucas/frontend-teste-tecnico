import { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import ClientItem from '../../components/ClientList/ClientItem';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '../../services/api';
import {
  Pagination,
  Wrapper,
  Main,
  PaginatiionButton,
  PaginationItem,
} from './styles';
import ClientList from '../../components/ClientList';

interface RegionsDataProps {
  idRegion: number;
  nameRegion: string;
  statusRegion: boolean;
}
export default function Home() {
  const [regions, setRegions] = useState<RegionsDataProps[]>([]);
  const [countClients, setCountClients] = useState(0);

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
    setCountClients(regions.length);
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

          <ClientList>
            {regions.map(region => (
              <ClientItem
                key={region.idRegion}
                region={region}
                toggleStatus={handleToggleStatus}
              />
            ))}
          </ClientList>
          <Pagination>
            <small>Visualizado 1 - 1 de {countClients} clientes</small>
            <div>
              <PaginatiionButton>
                <MdChevronLeft />
              </PaginatiionButton>
              <PaginationItem active>1</PaginationItem>
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
