export interface ListProps {
  title: string;
  link: string;
}

export interface TopAreasProps {
  title: string;
  link: string;
}

export interface NavigationItemsProps {
  title: string;
  list: ListProps[];
  showTopAreas: boolean;
  showHoverCardFooter: boolean;
  hoverCardWidth: number;
}
