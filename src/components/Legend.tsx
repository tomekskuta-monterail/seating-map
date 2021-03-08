import styled from 'styled-components';

import { colors } from 'constants-data';

const LegendList = styled.ul`
  padding-left: 0;
`;

const LegendItem = styled.li<{ color: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  & div {
    width: 8px;
    height: 8px;
    background-color: ${({ color }) => color};
    margin-right: 8px;
  }
`;

function Legend() {
  return (
    <LegendList>
      <LegendItem color={colors.selected}>
        <div />
        Selected
      </LegendItem>
      <LegendItem color={colors.active}>
        <div />
        Available
      </LegendItem>
      <LegendItem color={colors.unavailable}>
        <div />
        Unavailable
      </LegendItem>
    </LegendList>
  );
}

export default Legend;
