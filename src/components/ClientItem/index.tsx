import { Container } from './styles';
import CheckBox from '../CheckBox';
import Switch from 'react-switch';
import { MdCreate, MdDelete } from 'react-icons/md';
import { memo } from 'react';

type ClientItemProps = {
  region: RegionsDataProps;
  toggleStatus: (idRegion: number) => void;
};

type RegionsDataProps = {
  idRegion: number;
  nameRegion: string;
  statusRegion: boolean;
};
function ClientItem({ region, toggleStatus }: ClientItemProps) {
  return (
    <Container>
      <td>
        <CheckBox checked={true} />
      </td>
      <td>{region.idRegion}</td>
      <td>{region.nameRegion}</td>

      <td>
        <div>
          <Switch
            onChange={() => toggleStatus(region.idRegion)}
            checked={region.statusRegion}
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
            <button type="button">
              <MdCreate />
            </button>
            <button type="button">
              <MdDelete color="#f45" />
            </button>
          </div>
        </div>
      </td>
    </Container>
  );
}

export default memo(ClientItem);
