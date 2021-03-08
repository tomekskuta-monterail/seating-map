import { classNames } from 'constants-data';

export const replaceEscapedCharactersWithWhitespace = (name?: string) =>
  name?.replace(/(_x5F_)|(_)/g, ' ') || null;

export const getSection = (
  mapRefElement: HTMLDivElement | null,
  sectionId: string,
) =>
  mapRefElement?.querySelector(`#${sectionId?.replace(/ /g, '_')}`) ||
  mapRefElement?.querySelector(`#${sectionId?.replace(/ /g, '_x5F_')}`);

export const cloneElement = (
  element: SVGElement | HTMLElement,
  mapRefElement: HTMLElement | null,
) => {
  const clonedElement = element?.cloneNode() as SVGElement;
  clonedElement?.classList.add(classNames.cloned);

  if (mapRefElement?.firstChild instanceof SVGElement) {
    mapRefElement?.firstChild?.appendChild(clonedElement);
  }

  return clonedElement;
};

export const removeClonedElement = (
  element: SVGElement | HTMLElement,
  mapRefElement: HTMLElement | null,
) => {
  if (element && mapRefElement?.firstChild instanceof SVGElement) {
    mapRefElement?.firstChild?.removeChild(element);
  }
};
