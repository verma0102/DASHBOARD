import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Routing from "../route/Routing";
import Nav from "../nav/Nav";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";

const drawerWidth = 220;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  // Adjust the Toolbar styling here
  "& .MuiToolbar-root": {
    backgroundColor: "#3e5863",
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  overflowX: "auto", // Enable horizontal scrolling
  scrollbarWidth: "thin", // Customize the scrollbar width (use 'auto' or 'thin' as per your preference)
  scrollbarColor: "#4CAF50 #fff", // Customize the scrollbar color
  WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS devices
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "blue",
      "&::-webkit-scrollbar": {
        width: "5px", // Adjust the width as needed
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#65818e",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#fff",
      },
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#282c34",
      "&::-webkit-scrollbar": {
        width: "5px", // Adjust the width as needed
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#65818e",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#fff",
      },
    },
  }),
}));

const MenuNavigation = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [mainSelectedItem, setMainSelectedItem] = useState(null);
  const [subListSelectedItem, setSubListSelectedItem] = useState(null);

  const handleMainItemClick = (index) => {
    if (mainSelectedItem === index) {
      setMainSelectedItem(null);
    } else {
      setMainSelectedItem(index);
      setSubListSelectedItem(null);
    }
  };

  const handleSubListItemClick = (index) => {
    setSubListSelectedItem(index);
  };

  // logOut
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            noWrap
            component="div"
            style={{ fontSize: 20 }}
          >
            DASHBOARD
          </Typography>
          <div style={{ flexGrow: 1 }} />

          <div>
            <IconButton
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              sx={{
                marginRight: 1,
              }}
            >
              <AccountCircleIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>ProFile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  logOut();
                }}
              >
                LogOut
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              backgroundColor: "transparent",
            }}
          >
            <h3>
              <marquee>DASHBOARD</marquee>
            </h3>
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            style={{ backgroundColor: "red" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "#fff" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "#fff" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {Nav?.map((mainItem, mainIndex) => (
            <React.Fragment key={mainIndex}>
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor:
                    mainSelectedItem === mainIndex ? "green" : "transparent",
                  paddingTop: 0,
                  paddingBottom: 0.3,
                }}
                onClick={() => handleMainItemClick(mainIndex)}
              >
                <ListItemButton
                  component={Link}
                  to={mainItem.to}
                  sx={{
                    minHeight: 28,
                    justifyContent: "initial",
                    px: 2.5,
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 3,
                      justifyContent: "center",
                      "& svg": {
                        fontSize: 20,
                      },
                      color: "#c4cec6",
                    }}
                  >
                    {mainItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={mainItem.name}
                    sx={{
                      color: "#c4cec6",
                      opacity: 1,
                    }}
                  />
                  {mainItem.subList &&
                    (mainSelectedItem === mainIndex ? (
                      open ? (
                        <ExpandMoreIcon sx={{ color: "red" }} />
                      ) : (
                        <KeyboardArrowRight sx={{ color: "white" }} />
                      )
                    ) : (
                      <KeyboardArrowRight sx={{ color: "white" }} />
                    ))}
                </ListItemButton>
              </ListItem>
              {mainSelectedItem === mainIndex && mainItem.subList && (
                <List sx={{ paddingLeft: 2 }}>
                  {mainItem?.subList.map((subText, subIndex) => (
                    <ListItem
                      key={subIndex}
                      disablePadding
                      sx={{
                        display: "block",
                        backgroundColor:
                          subListSelectedItem === subIndex + 1
                            ? "darkblue"
                            : "transparent",
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                      onClick={() => handleSubListItemClick(subIndex + 1)}
                    >
                      <ListItemButton
                        component={Link}
                        to={subText.to}
                        sx={{
                          minHeight: 28,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                          paddingTop: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                            alignItems: "center",
                            "& svg": {
                              fontSize: 20,
                            },
                            color: "#c4cec6",
                          }}
                        >
                          {subText.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subText.name}
                          sx={{
                            color: "#c4cec6",
                            opacity: open ? 1 : 0,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 0, p: 1 }}>
        <DrawerHeader />
        <Routing />
      </Box>
    </Box>
  );
};
export default MenuNavigation;
