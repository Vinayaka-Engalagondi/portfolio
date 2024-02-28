import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { Box, Grid } from "@mui/material";
import cgs from "./images/cgs.webp";
import { userContext } from "./useContext/CreateContext";

export default function Experience() {
  const { setBgcolor } = useContext(userContext);

  useEffect(() => {
    setBgcolor("#8A40D5C9");
  });
  return (
    <Box
      sx={{
        minHeight: { md: "100vh", xs: "105vh", sm: "120vh" },
        background: "#C7DBF7",
      }}
    >
      <Header />
      <Grid
        container
        md={12}
        pt={18}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: {md:35,xs:2},
        }}
      >
        <Grid item md={2.5} xs={12}>
          <Box component="img" alt="" src={cgs} sx={{maxWidth:{md:1000,xs:300}}}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              mt: 1,
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "Lucida Handwriting",
            }}
          >
            FRONT-END REACT DEVELOPER
          </Box>
          <Box sx={{ mt: 3, fontSize: "16px", fontFamily: "Verdana" }}>
            From Feb-2023 - Present
          </Box>
          <Box sx={{ mt: 2, fontSize: "16px", fontFamily: "Verdana" }}>
            <ul>
              <Box sx={{ marginLeft: -2, mb: 1 ,fontSize:'17px', color:'#3e2f2f'}}>PROPERTY BROKER</Box>
              <li style={{fontFamily: "Verdana", fontSize:"14px", color:'#444141cf'}}>
                Led the development of a dynamic property posting and listing
                software, emphasizing efficient functionalities for sales and
                leases. Applied React.js, Javascript, Material UI, and Java to
                create a user-centric platform, enhancing the property
                transaction experience.
              </li>
              <Box sx={{ marginLeft: -2, mb: 1, mt: 2 ,fontSize:'17px',color:'#3e2f2f'}}>NURTURE</Box>
              <li style={{fontFamily: "Verdana", fontSize:"14px",color:'#444141cf'}}>
                Currently overseeing the frontend development of "NURTURE," a
                comprehensive hospital management software. Leading a team of
                three junior interns, contributing to the creation of an
                intuitive and efficient interface for patient listing, document
                management, and billing processes.
              </li>
              <Box sx={{ marginLeft: -2, mb: 1, mt: 2, fontSize:'17px', color:'#3e2f2f' }}>CHEFFY-HUB</Box>
              <li style={{fontFamily: "Verdana", fontSize:"14px",color:'#444141cf'}}>
                Contributed as a fresher to the development of "CHEFFY-HUB," a
                project akin to 'Swiggy.' Utilized React.js, Redux, Javascript,
                Material UI, and Java in the production phase, gaining practical
                experience in diverse web development aspects.
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
