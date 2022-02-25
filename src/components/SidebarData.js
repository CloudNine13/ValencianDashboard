import * as bsIcons from 'react-icons/bs';
import * as giIcons from 'react-icons/gi';
import * as aiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Valenbisi',
        path: '/',
        icon: <bsIcons.BsBicycle />,
        cName: 'nav-text'
    },
    {
        title: 'Quioscos de flores',
        path: '/flowers',
        icon: <giIcons.GiFlowerPot />,
        cName: 'nav-text'
    },
    {
        title: 'Medida de bici',
        path: '/bicycles',
        icon: <aiIcons.AiOutlineBarChart />,
        cName: 'nav-text'
    },
]