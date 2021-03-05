import styled from 'styled-components';

type Props = {
  map: string | null;
};

const Map = styled.div`
  margin: 40px auto;
  max-width: 600px;
`;

function SeatingMap(props: Props) {
  const { map } = props;

  return map ? <Map dangerouslySetInnerHTML={{ __html: map }} /> : null;
}

export default SeatingMap;
