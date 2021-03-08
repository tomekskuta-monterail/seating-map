import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios, { CancelTokenSource } from 'axios';

import Logs from 'components/Logs';
import SeatingMap from 'components/SeatingMap';
import Sectors from 'components/Sectors';
import Legend from 'components/Legend';

import seatingMapFile from 'seating-map.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px 40px;
`;

const H1 = styled.h1`
  margin: 0;
`;

const LinkToRepo = styled.a`
  color: black;
  font-weight: bold;
`;

const MapWrapper = styled.div`
  margin: 40px auto;
  max-width: 600px;
`;

function App() {
  const [mapFile, setMapFile] = useState<string | null>(null);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const fetchMap = async (cancelToken: CancelTokenSource['token']) => {
    const map = (await axios.get(seatingMapFile, { cancelToken })).data;
    setMapFile(map);
  };

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    fetchMap(cancelTokenSource.token);

    return () => {
      cancelTokenSource.cancel();
    };
  }, []);

  return (
    <>
      <Header>
        <H1>Seating Map</H1>
        <LinkToRepo
          href="https://github.com/tomekskuta-monterail/seating-map"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the repo
        </LinkToRepo>
      </Header>
      <Logs hoveredSector={hoveredSector} selectedSector={selectedSector} />
      <Sectors
        hoveredSector={hoveredSector}
        selectedSector={selectedSector}
        setHoveredSector={setHoveredSector}
        setSelectedSector={setSelectedSector}
      />
      <MapWrapper>
        <SeatingMap
          map={mapFile}
          hoveredSector={hoveredSector}
          selectedSector={selectedSector}
          setHoveredSector={setHoveredSector}
          setSelectedSector={setSelectedSector}
        />
        <Legend />
      </MapWrapper>
    </>
  );
}

export default App;
