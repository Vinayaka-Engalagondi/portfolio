import React, { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import StarIcon from "@mui/icons-material/Star";
import V1 from "./images/V1.jpeg";
import { userContext } from "./useContext/CreateContext";

const About = () => {
  const { setBgcolor } = useContext(userContext);

  useEffect(() => {
    setBgcolor("#D3CA44C9");
  });
  return (
    <div>
      <Box
        sx={{
          height: { md: "100vh", xs: "105vh", sm: "120vh" },
          background: "#495E57",
        }}
      >
        <Header />
        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
          <Grid
            item
            md={4}
            sm={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center  ",
            }}
          >
            <Box
              sx={{
                mt: { md: "220px", xs: "150px", sm: "150px" },
                height: { md: "65%", xs: "60%", sm: "65%" },
                width: { md: "70%", xs: "70%", sm: "50%" },
                borderRadius: "50%",
                // ml: {md:10,xs:6},
              }}
              component="img"
              src={V1}
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
              flexDirection: "column",
              mt: { md: "170px", xs: "20px", sm: "50px" },
            }}
          >
            <Box
              sx={{
                fontSize: { md: "38px", xs: "25px", sm: "30px" },
                fontWeight: 700,
                pl: 2,
                pr: 2,
                fontFamily: "Lucida Handwriting",
                color: "White   ",
                textAlign: "center",
              }}
            >
              Intelligent and Quick Learner
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ mt: 2.2, mr: -2, ml: 4 }}>
                <StarIcon
                  sx={{ width: "20px", height: "20px", color: "#e9e0e0" }}
                />
              </Box>
              <Box
                sx={{
                  fontSize: { md: "19px", xs: "14px", sm: "18px" },
                  pl: 4,
                  pr: 2,
                  fontFamily: "Verdana",
                  color: "#e9e0e0",
                  mr: "auto",
                  mt: 2,
                }}
              >
                Peace Person with Smiley Face
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ mt: 2.2, mr: -2, ml: 4 }}>
                <StarIcon
                  sx={{ width: "20px", height: "20px", color: "#e9e0e0" }}
                />
              </Box>
              <Box
                sx={{
                  fontSize: { md: "19px", xs: "14px", sm: "18px" },
                  pl: 4,
                  pr: 2,
                  fontFamily: "Verdana",
                  color: "#e9e0e0",
                  mr: "auto",
                  mt: 2,
                }}
              >
                An enthusiastic and adaptive individual with a background in
                agriculture
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ mt: 2.2, mr: -2, ml: 4 }}>
                <StarIcon
                  sx={{ width: "20px", height: "20px", color: "#e9e0e0" }}
                />
              </Box>
              <Box
                sx={{
                  fontSize: { md: "19px", xs: "14px", sm: "18px" },
                  pl: 4,
                  pr: 2,
                  fontFamily: "Verdana",
                  color: "#e9e0e0",
                  mr: "auto",
                  mt: 2,
                }}
              >
                Possessing a kind-hearted and empathetic nature that enhances
                teamwork and communication
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ mt: 2.2, mr: -2, ml: 4 }}>
                <StarIcon
                  sx={{ width: "20px", height: "20px", color: "#e9e0e0" }}
                />
              </Box>
              <Box
                sx={{
                  fontSize: { md: "19px", xs: "14px", sm: "18px" },
                  pl: 4,
                  pr: 2,
                  fontFamily: "Verdana",
                  color: "#e9e0e0",
                  mr: "auto",
                  mt: 2,
                }}
              >
                Eager to learn new technologies and methodologies and able to
                produce the best results in pressure situations
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
