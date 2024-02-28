import React, { useContext, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import Header from "./Header";
import V2 from "./images/V2.jpeg";
import { userContext } from "./useContext/CreateContext";

export default function Home() {
  const { setBgcolor } = useContext(userContext);

  useEffect(() => {
    setBgcolor("none");
  });
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          background:
            "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400%",
          animation: "gradient 15s ease infinite",
          "@keyframes gradient": {
            "0%": {
              backgroundPosition: "0% 50%",
            },
            "50%": {
              backgroundPosition: "100% 50%",
            },
            "100%": {
              backgroundPosition: "0% 50%",
            },
          },
        }}
      >
        <Header />
        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            item
            md={4}
            sm={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                mt: { md: "200px", xs: "150px", sm: "150px" },
                height: { md: "65%", xs: "60%", sm: "65%" },
                width: { md: "70%", xs: "70%", sm: "50%" },
                borderRadius: "50%",
                // ml: {md:10,xs:6},
              }}
              component="img"
              src={V2}
              alt="Vinayaka Engalagondi"
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: { md: "200px", xs: "20px", sm: "50px" },
            }}
          >
            <Box
              sx={{
                fontSize: { md: "40px", xs: "35px" },
                fontWeight: 700,
                pl: 2,
                pr: 2,
                color: "White   ",
                textAlign: "center",
              }}
            >
              VINAYAKA ENGALAGONDI
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                fontFamily: "Lucida Handwriting",
                fontSize: { md: ["30px", "40px"], xs: ["25px", "35px"] },
                fontWeight: 600,
                paddingLeft: 2,
                paddingRight: 2,
                color: "white",
                textAlign: "center",
                marginTop: 2,
                overflow: "hidden",
                whiteSpace: "nowrap",
                animation: "typing 6s steps(40, end) infinite",
                borderRight: "2px solid",
                "@keyframes typing": {
                  from: {
                    width: 0,
                  },
                  to: {
                    width: "650px",
                  },
                },
              }}
            >
              Front-End React Developer
            </Box>
            <Box
              sx={{
                display: { md: "none", xs: "flex" },
                fontFamily: " Lucida Handwriting",
                fontSize: { md: "30px", xs: "25px" },
                fontWeight: 600,
                pl: 2,
                pr: 2,
                color: "white",
                textAlign: "center",
                mt: 2,
              }}
            >
              Front-End React Developer
            </Box>

            <Button
              sx={{
                fontFamily: " Lucida Handwriting",
                background: "rgba(255, 255, 255, 0.49)",
                mt: 2,
                color: "white",
                width: { md: "40%", xs: "80%", sm: "35%" },
                "&:hover": {
                  backgroundColor: "#564e4e6b",
                },
              }}
              onClick={() => {
                window.location.href = "tel:7760244373";
              }}
            >
              Let's Chat
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
