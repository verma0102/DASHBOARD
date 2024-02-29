import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const Nav = [
    {
        name: 'DashBoard',
        to: '/dashboard',
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
        name: 'DropDown',
        to: null,
        icon: <FolderOutlinedIcon />,
        subList: [
            {
                name: 'About',
                to: '/About',
                icon: <MailIcon />
            },
            {
                name: 'Contact',
                to: '/Contact',
                icon: <InboxIcon />
            },
           
          

        ]
    }

]

export default Nav;