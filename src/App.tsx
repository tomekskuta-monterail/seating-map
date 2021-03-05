import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Logs from 'components/Logs';
import SeatingMap from 'components/SeatingMap';
import Sectors from 'components/Sectors';

import SeatingMapFile from 'seating-map.svg';

const H1 = styled.h1`
  padding: 0 40px;
`;

function App() {
  const isMountedRef = useRef(true);

  const [mapFile, setMapFile] = useState<string | null>(null);
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const fetchMap = async () => {
    const map = (await axios.get(SeatingMapFile)).data;

    if (isMountedRef.current) {
      setMapFile(map);
    }
  };

  useEffect(() => {
    fetchMap();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <H1>Seating Map</H1>
      </header>
      <Logs hoveredSector={hoveredSector} selectedSector={selectedSector} />
      <Sectors
        hoveredSector={hoveredSector}
        selectedSector={selectedSector}
        setHoveredSector={setHoveredSector}
        setSelectedSector={setSelectedSector}
      />
      <SeatingMap map={mapFile} />
    </div>
  );
}

export default App;
