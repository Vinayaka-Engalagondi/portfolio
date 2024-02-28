import { Box, Button, Fade, Grid, Menu, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { userContext } from "./useContext/CreateContext";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const { bgColor, setBgcolor } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <Box
        sx={{ display:{md:'flex', xs:'none'},
          background: bgColor,
          height: "80px",
          position: "fixed",
          zIndex: 1000,
          width: "100%",
        }}
      >
        <Grid container sx={{ p: 3 }}>
          <Grid item>
            <Box
              sx={{
                color: "black",
                fontFamily: "  Lucida Console;",
                fontSize: "31px",
                fontWeight: 800,
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
                setBgcolor("rgba(176, 85, 85, 0.63)");
              }}
            >
              VINAYAKA ENGALAGONDI
            </Box>
          </Grid>
          <Grid item sx={{ ml: "auto", mr: 5 }}>
            <Box
              sx={{ display: "flex", flexDirection: "row", gap: 8, mt: -0.8 }}
            >
              <Button
                sx={{
                  fontWeight: location.pathname === "/About" ? 600 : 500,
                  color: "white",
                  fontFamily: "Verdana",
                  fontSize: "18px",

                  textTransform: "none",
                }}
                onClick={() => navigate("/About")}
              >
                About
              </Button>
              <Button
                sx={{
                  fontWeight: location.pathname === "/Experience" ? 600 : 500,
                  color: "white",
                  fontFamily: "Verdana",
                  fontSize: "18px",

                  textTransform: "none",
                }}
                onClick={() => navigate("/Experience")}
              >
                Experience
              </Button>
              <Button
                sx={{
                  fontWeight: location.pathname === "/Academics" ? 600 : 500,
                  color: "white",
                  fontFamily: "Verdana",
                  fontSize: "18px",

                  textTransform: "none",
                }}
                onClick={() => navigate("/Academics")}
              >
                Academics
              </Button>
              <Button
                sx={{
                  fontWeight: location.pathname === "/Projects" ? 600 : 500,
                  color: "white",
                  fontFamily: "Verdana",
                  fontSize: "18px",

                  textTransform: "none",
                }}
                onClick={() => navigate("/Projects")}
              >
                Projects
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: {xs:"flex",md:'none'},
          flexDirection: "row",
          justifyContent: "space-between",
          background: bgColor,
          height: "80px",
          position: "fixed",
          zIndex: 1000,
          width: "100%",
        }}
      >
        <Box
          sx={{
            color: "black",
            fontFamily: "  Lucida Console;",
            fontSize: "26px",
            fontWeight: 800,
            cursor: "pointer",pt:1.5, pl:.5
          }}
          onClick={() => {
            navigate("/");
            setBgcolor("rgba(176, 85, 85, 0.63)");
          }}
        >
          VINAYAKA ENGALAGONDI
        </Box>
        <Box>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
            sx={{color:'white',pt:3.6}}
          >
            <MenuIcon/>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
            }}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/")
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);navigate("/About")
              }}
            >
             About
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);navigate("/Experience")
              }}
            >
              Experience
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);navigate("/Academics")
              }}
            >
              Academics
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);navigate("/Projects")
              }}
            >
              Projects
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </div>
  );
}
