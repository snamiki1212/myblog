interface DrawerItem {
  type: 'row' | 'divider';
  row?: {
    primaryText: string;
    secondaryText?: string;
    icon: 'home' | 'place' | 'face' | 'desktop_mac' | 'airplanemode_active'; // chooseme: https://material.io/resources/icons/
    to: string;
  };
}

export const DrawerItem: DrawerItem[] = [
  {
    type: 'row',
    row: {
      primaryText: 'Home',
      icon: 'home',
      to: '/',
    },
  },
  {
    type: 'row',
    row: {
      primaryText: 'AboutMe',
      secondaryText: 'このブログを書いた人',
      icon: 'face',
      to: '/about/',
    },
  },
  {
    type: 'divider',
  },
  {
    type: 'row',
    row: {
      primaryText: 'Tech',
      secondaryText: '技術系の記事',
      icon: 'desktop_mac',
      to: '/categories/tech/',
    },
  },
  {
    type: 'row',
    row: {
      primaryText: 'World',
      secondaryText: '海外でのキャリア',
      icon: 'airplanemode_active',
      to: '/categories/world/',
    },
  },
  {
    type: 'row',
    row: {
      primaryText: 'Local Guide',
      secondaryText: 'Google Map の SNS',
      icon: 'place',
      to: '/categories/local-guide/',
    },
  },
];

export default DrawerItem;
