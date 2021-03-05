import styled from 'styled-components';

type Props = {
  hoveredSector: string | null;
  selectedSector: string | null;
};

const Wrapper = styled.div`
  margin: 0 40px;

  & div:first-child {
    margin-bottom: 8px;
  }

  & span {
    margin-right: 10px;
  }
`;

function Logs(props: Props) {
  const { hoveredSector, selectedSector } = props;

  return (
    <Wrapper>
      <div>
        <span>Hovered Sector:</span>
        <strong>{hoveredSector}</strong>
      </div>
      <div>
        <span>Selected Sector:</span>
        <strong>{selectedSector}</strong>
      </div>
    </Wrapper>
  );
}

export default Logs;
