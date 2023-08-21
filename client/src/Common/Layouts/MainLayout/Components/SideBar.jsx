import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Mui
import {
  Box,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Collapse,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

// Third Party
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

// Project Imports
import GetMenus from "../../../Routes/SideBarMenus";
import { FlexBetween } from "../../../Components/FlexBetween";
import { DrawerHeader, Drawer } from "../Utils/SideBarHelpers";
import CapitalizeFirstLetter from "../../../Utils/CapitalizeFirstLetter";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, user, children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const SideBarMenus = GetMenus(user.userType);
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={isSidebarOpen}>
        <PerfectScrollbar>
          <DrawerHeader>
            <FlexBetween gap="1.5rem">
              <Typography variant="h4" fontWeight="bold">
                Road Damage
              </Typography>
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {!isSidebarOpen ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>
            </FlexBetween>
          </DrawerHeader>
          {/* SIDEBAR OPENED STATUS */}
          {isSidebarOpen ? (
            <Stack height="93%" justifyContent="space-between">
              <List>
                {SideBarMenus.map(({ text, path, icon, children }) => {
                  if (!icon) {
                    return (
                      <React.Fragment key={text}>
                        <Divider />
                        <Typography
                          variant="h4"
                          fontWeight="regular"
                          sx={{ m: "2.25rem 0 1rem 3rem" }}
                        >
                          {text}
                        </Typography>
                      </React.Fragment>
                    );
                  }
                  return (
                    <>
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate(path);
                            setActive(path);
                          }}
                          sx={{
                            backgroundColor:
                              active === path
                                ? theme.palette.secondary.light
                                : "transparent",
                            color:
                              active === path
                                ? theme.palette.primary.main
                                : theme.palette.secondary.main,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              ml: "2rem",
                              color:
                                active === path
                                  ? theme.palette.primary.main
                                  : theme.palette.secondary.main,
                            }}
                          >
                            {icon}
                          </ListItemIcon>
                          <ListItemText primary={text} key={text + "Text"} />
                          {children &&
                            (active === path ? <ExpandLess /> : <ExpandMore />)}
                        </ListItemButton>
                      </ListItem>
                      {children && (
                        <Collapse
                          in={
                            active === path ||
                            children.some((child) => child.path === active)
                          }
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {children.map(({ text, path, icon }) => (
                              <ListItemButton
                                onClick={() => {
                                  navigate(path);
                                  setActive(path);
                                }}
                                sx={{
                                  backgroundColor:
                                    active === path
                                      ? theme.palette.secondary.light
                                      : "transparent",
                                  color:
                                    active === path
                                      ? theme.palette.primary.main
                                      : theme.palette.secondary.main,
                                }}
                              >
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  paddingLeft="2rem"
                                >
                                  <ListItemIcon
                                    sx={{
                                      ml: "2rem",
                                      color:
                                        active === path
                                          ? theme.palette.primary.main
                                          : theme.palette.secondary.main,
                                    }}
                                  >
                                    {React.cloneElement(icon, {
                                      fontSize: "small",
                                    })}
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{ marginLeft: "-1.25rem" }}
                                    primaryTypographyProps={{
                                      fontSize: "0.75rem",
                                    }}
                                    primary={text}
                                    key={text + "Text"}
                                  />
                                </Stack>
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </>
                  );
                })}
              </List>
              <Box marginBottom="1rem">
                <Divider variant="middle" />
                <FlexBetween
                  textTransform="none"
                  gap="1rem"
                  m="1.5rem 2rem 0 3rem"
                >
                  <Box textAlign="left">
                    <Typography
                      fontWeight="bold"
                      fontSize="0.9rem"
                      sx={{ color: theme.palette.secondary[100] }}
                    >
                      {CapitalizeFirstLetter(user.firstName) +
                        " " +
                        CapitalizeFirstLetter(user.lastName)}
                    </Typography>
                    <Typography
                      fontSize="0.8rem"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      {CapitalizeFirstLetter(user.userType)}
                    </Typography>
                  </Box>
                  <ListItemButton
                    onClick={() => {
                      navigate("/auth/account");
                      setActive("/auth/account");
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: "2rem",
                        color: theme.palette.primary.main,
                      }}
                    >
                      <SettingsOutlined />
                    </ListItemIcon>
                  </ListItemButton>
                </FlexBetween>
              </Box>
            </Stack>
          ) : (
            <Stack height="93%" justifyContent="space-between">
              <List>
                {/* SIDEBAR ClOSED STATUS */}
                {SideBarMenus.map(({ text, path, icon }) => {
                  if (!icon) return <Divider key={text} />;

                  return (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        onClick={() => {
                          navigate(path);
                          setActive(path);
                        }}
                        sx={{
                          minHeight: 48,
                          justifyContent: isSidebarOpen ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: isSidebarOpen ? 3 : "auto",
                            justifyContent: "center",
                            color:
                              active === path
                                ? theme.palette.primary.main
                                : theme.palette.secondary.main,
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <Box marginBottom="1rem">
                <Divider variant="middle" />
                <ListItemButton
                  onClick={() => {
                    navigate(`/auth/account`);
                    setActive("/auth/account");
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: isSidebarOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isSidebarOpen ? 3 : "auto",
                      justifyContent: "center",
                      color:
                        active === "account"
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main,
                    }}
                  >
                    <SettingsOutlined />
                  </ListItemIcon>
                </ListItemButton>
              </Box>
            </Stack>
          )}
          <Divider />
        </PerfectScrollbar>
      </Drawer>
      <Box component="div" sx={{ flex: "1 1 auto" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
