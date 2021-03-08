import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import {
  cloneElement,
  getSection,
  removeClonedElement,
  replaceEscapedCharactersWithWhitespace,
} from 'utils';
import { sectors, classNames, colors } from 'constants-data';

type Props = {
  map: string | null;
  hoveredSector: string | null;
  selectedSector: string | null;
  setHoveredSector: (sector: string | null) => void;
  setSelectedSector: (sector: string | null) => void;
};

const MapWrapper = styled.div`
  & * {
    transition: fill 0.2s;
  }

  & *.${classNames.active}, & *.${classNames.active} * {
    fill: ${colors.active};
    cursor: pointer;
  }

  & *.${classNames.selected}, & *.${classNames.selected} * {
    fill: ${colors.selected};
  }

  @media (hover: hover) {
    & *.${classNames.hovered}, & *.${classNames.hovered} * {
      fill: ${colors.hovered};
    }
  }

  & *.${classNames.cloned}, & *.${classNames.cloned} * {
    fill: transparent;
    stroke: transparent;
  }
`;

function SeatingMap(props: Props) {
  const {
    map,
    hoveredSector,
    selectedSector,
    setHoveredSector,
    setSelectedSector,
  } = props;

  const mapRef = useRef<HTMLDivElement>(null);
  const mapRefElement = mapRef.current;

  useLayoutEffect(() => {
    if (!map || !mapRef.current) {
      return;
    }

    sectors.forEach((sectorId) => {
      const element = getSection(mapRef.current, sectorId);

      if (element instanceof SVGElement) {
        element.classList.add(classNames.active);
        element.dataset.active = 'true';

        if (element instanceof SVGGElement && element.children?.length) {
          Array.from(element.children).forEach((childElement) => {
            if (childElement instanceof SVGElement) {
              childElement.classList.add(classNames.active);
              childElement.dataset.active = 'true';
              childElement.dataset.groupId = element.id;
            }
          });
        }
      }
    });
  }, [map, mapRef]);

  useLayoutEffect(() => {
    if (!hoveredSector || !mapRefElement) {
      return;
    }

    const element = getSection(mapRefElement, hoveredSector);

    element?.classList.add(classNames.hovered);

    let clonedElement: SVGElement;
    let clonedChildren: SVGElement[];

    if (element instanceof SVGGElement && element.children?.length) {
      clonedChildren = Array.from(element.children).reduce<SVGElement[]>(
        (acc, childElement) => {
          if (childElement instanceof SVGElement) {
            return [...acc, cloneElement(childElement, mapRefElement)];
          }
          return acc;
        },
        [],
      );
    } else if (element instanceof SVGElement) {
      clonedElement = cloneElement(element, mapRefElement);
    }

    return () => {
      removeClonedElement(clonedElement, mapRefElement);
      clonedChildren?.length &&
        clonedChildren?.forEach((childElement) =>
          removeClonedElement(childElement, mapRefElement),
        );

      element?.classList.remove(classNames.hovered);
    };
  }, [hoveredSector, mapRefElement]);

  useLayoutEffect(() => {
    if (!selectedSector || !mapRefElement) {
      return;
    }

    const element = getSection(mapRefElement, selectedSector);

    element?.classList.add(classNames.selected);

    return () => {
      element?.classList.remove(classNames.selected);
    };
  }, [selectedSector, mapRefElement]);

  const onMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      event.target instanceof SVGElement &&
      event.target?.dataset.active === 'true'
    ) {
      setHoveredSector(
        replaceEscapedCharactersWithWhitespace(
          event.target.dataset.groupId || event.target.id,
        ),
      );
    } else {
      setHoveredSector(null);
    }
  };

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      event.target instanceof SVGElement &&
      event.target?.dataset.active === 'true'
    ) {
      const selectedId = replaceEscapedCharactersWithWhitespace(
        event.target.dataset.groupId || event.target.id,
      );
      setSelectedSector(selectedId === selectedSector ? null : selectedId);
    }
  };

  return map ? (
    <MapWrapper
      ref={mapRef}
      dangerouslySetInnerHTML={{ __html: map }}
      onMouseOver={onMouseOver}
      onClick={onClick}
    />
  ) : null;
}

export default SeatingMap;
