import styled from 'styled-components';

import { sectors, colors } from 'constants-data';

type Props = {
  hoveredSector: string | null;
  selectedSector: string | null;
  setHoveredSector: (sector: string | null) => void;
  setSelectedSector: (sector: string | null) => void;
};

type SectorProps = {
  hovered: boolean;
  selected: boolean;
};

const getBackgroundColor = ({ hovered, selected }: SectorProps) => {
  if (hovered) {
    return colors.hovered;
  }
  if (selected) {
    return colors.selected;
  }
  return 'transparent';
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
  margin: 20px auto;
`;

const Sector = styled.button<SectorProps>`
  padding: 5px;
  background-color: ${getBackgroundColor};
  border: 1px black solid;
  border-radius: 50px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

function Sectors(props: Props) {
  const {
    hoveredSector,
    selectedSector,
    setHoveredSector,
    setSelectedSector,
  } = props;

  const onClick = (sector: string) => {
    const newSelectedSector = selectedSector === sector ? null : sector;
    setSelectedSector(newSelectedSector);
  };

  return (
    <Wrapper>
      {sectors.map((sector) => (
        <Sector
          key={sector}
          hovered={sector === hoveredSector}
          selected={sector === selectedSector}
          onMouseEnter={() => setHoveredSector(sector)}
          onMouseLeave={() => setHoveredSector(null)}
          onClick={() => onClick(sector)}
        >
          {sector}
        </Sector>
      ))}
    </Wrapper>
  );
}

export default Sectors;
