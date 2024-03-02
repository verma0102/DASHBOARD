import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const Nav = [
    {
        name: 'Home',
        to: '/Home',
        icon: <InboxIcon />,
        subList: null
    },
    {
        name: 'About',
        to: '/About',
        icon: <InboxIcon />,
        subList: null
    },
    {
        name: 'Contact',
        to: '/Contact',
        icon: <MailIcon />,
        subList: null
    },
   
    {
        name: 'subItem',
        to: null,
        icon: <FolderOutlinedIcon />,
        subList: [
            {
                name: 'Demo',
                to: '/Demo',
                icon: <MailIcon />
            },
            {
                name: 'Visitor',
                to: '/Visitor',
                icon: <InboxIcon />
            },
           
        ]
    }

]

export default Nav;