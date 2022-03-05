import * as bsIcons from 'react-icons/bs';
import * as giIcons from 'react-icons/gi';
import * as aiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Valenbisi',
        path: '/',
        icon: <bsIcons.BsBicycle />,
        cName: 'sidebar-text'
    },
    {
        title: 'Quioscos de flores',
        path: '/flowers',
        icon: <giIcons.GiFlowerPot />,
        cName: 'sidebar-text'
    },
    {
        title: 'Medida de bici',
        path: '/bicycles',
        icon: <aiIcons.AiOutlineBarChart />,
        cName: 'sidebar-text'
    },
]