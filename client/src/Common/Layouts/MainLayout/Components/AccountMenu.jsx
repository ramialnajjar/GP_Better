import React from "react";
import { useNavigate } from "react-router";

// Mui
import {
  Button,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Tooltip,
  useTheme,
  Typography,
} from "@mui/material";

// Assets
import { Settings, Logout, ArrowDropDownOutlined } from "@mui/icons-material";

// Project Imports
import CapitalizeFirstLetter from "../../../Utils/CapitalizeFirstLetter";
import { IdentityHelper } from "../../../Utils/IdentityHelper";

const AccountMenu = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    IdentityHelper.removeToken();
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <Button
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "none",
              gap: "1rem",
            }}
          >
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.85rem"
                sx={{ color: theme?.palette?.secondary[100] }}
              >
                {CapitalizeFirstLetter(user.firstName) +
                  " " +
                  CapitalizeFirstLetter(user.lastName)}
              </Typography>
              <Typography
                fontSize="0.75rem"
                sx={{ color: theme?.palette?.secondary[200] }}
              >
                {CapitalizeFirstLetter(user.userType)}
              </Typography>
            </Box>
            <ArrowDropDownOutlined
              sx={{
                color: theme?.palette.secondary[300],
                fontSize: "25px",
              }}
            />
          </Button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings color="primary" fontSize="small" />
          </ListItemIcon>
          <Typography color={theme.palette.primary.main}>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout color="primary" fontSize="small" />
          </ListItemIcon>
          <Typography color={theme.palette.primary.main}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
