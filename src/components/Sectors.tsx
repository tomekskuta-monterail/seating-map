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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 20px auto;
`;

const Sector = styled.button<SectorProps>`
  padding: 5px;
  margin-bottom: 10px;
  background-color: ${({ selected }) =>
    selected ? colors.selected : 'transparent'};
  border: 1px black solid;
  border-radius: 50px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  @media (hover: hover) {
    ${({ hovered }) => hovered && `background-color: ${colors.hovered};`}
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
