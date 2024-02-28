import { Box, Card, Chip, Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Header from "./Header";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import { userContext } from "./useContext/CreateContext";

function Projects() {
  const { setBgcolor, sliderContents } = useContext(userContext);

  const sliderRefs = sliderContents.map(() => React.createRef());

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    dots: false,
    adaptiveHeight: true,
    arrows: false,
  };
  useEffect(() => {
    setBgcolor("#F4A4A4");
  });

  return (
    <Box
      sx={{
        minHeight: { md: "100vh", xs: "105vh", sm: "120vh" },
        background: "#CBD5F0",
      }}
    >
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 15,
        }}
        md={12}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {sliderContents.map((listings, index) => (
            <Grid
              container
              key={index}
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                flexWrap: "wrap",
                boxShadow: "0px 2.4px 4.8px 0px rgba(0, 0, 0, 0.15)",
                minWidth: "80vw",
                backgroundColor: "#EEE",
                mb: 4,
              }}
              md={9}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      maxWidth: { md: "350px", xs: "310px" },
                      pt: 2,
                      pb: 2,
                    }}
                  >
                    <Container maxWidth={"sm"} sx={{ position: "relative" }}>
                      {/* Custom "Previous" button */}
                      <Box
                        className="custom-arrow custom-prev-arrow"
                        onClick={() => {
                          if (sliderRefs[index].current) {
                            sliderRefs[index].current.slickPrev();
                          }
                        }}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          display: "flex",
                          alignContent: "center",
                          transform: "translateY(-50%)",
                          zIndex: 1,
                          backgroundColor: "white",
                          borderRadius: "50%",
                          maxWidth: { md: "150px", xs: "60px" },
                          color: "#8E8F8F",
                          boxShadow:
                            "0px 2.6658482551574707px 5.331696510314941px rgba(0, 0, 0, 0.15)",
                        }}
                      >
                        <ArrowBackIosNewIcon
                          sx={{
                            width: { md: "16px", xs: "7px" },
                            height: { md: "16px", xs: "7px" },
                            p: 0.3,
                          }}
                        />
                      </Box>

                      <Slider ref={sliderRefs[index]} {...settings1}>
                        {listings.images.map((image, idx) => (
                          <div key={idx}>
                            <Card sx={{ borderRadius: "10px" }}>
                              <Box
                                component="img"
                                src={image.imagePath}
                                style={{
                                  width: "100%  ",
                                  height: "195px",
                                }}
                              ></Box>
                            </Card>
                          </div>
                        ))}
                      </Slider>

                      {/* Custom "Next" button */}
                      <Box
                        className="custom-arrow custom-next-arrow"
                        onClick={() => {
                          if (sliderRefs[index].current) {
                            sliderRefs[index].current.slickNext();
                          }
                        }}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          display: "flex",
                          alignContent: "center",
                          right: { md: 24.5, xs: 15.8 },
                          transform: "translateY(-50%)",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          maxWidth: { md: "150px", xs: "60px" },
                          color: "#8E8F8F",
                          boxShadow:
                            "0px 2.6658482551574707px 5.331696510314941px rgba(0, 0, 0, 0.15)",
                        }}
                      >
                        <ArrowForwardIosIcon
                          sx={{
                            width: { md: "16px", xs: "7px" },
                            height: { md: "16px", xs: "7px" },
                            p: 0.3,
                          }}
                        />
                      </Box>
                    </Container>
                  </Box>
                </Box>
                <Box sx={{ ml: 2, mt: { md: 1, xs: 2 } }}>
                  <Box
                    sx={{
                      color: "var(--Text-Color-Grey-Bold, #333)",
                      fontFamily: "Mulish, sans-serif",
                      fontSize: { md: "20px", xs: "18px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      mr: 1,
                      lineHeight: "normal",
                    }}
                  >
                    <a
                      href={}
                      style={{ textDecoration: "none" }}
                    >
                      {listings.title}
                    </a>
                  </Box>
                  <Box
                    sx={{
                      color: "var(--Text-Color-Grey-Bold, #333333e5)",
                      fontFamily: "Mulish, sans-serif",
                      fontSize: { md: "14px", xs: "10px" },
                      fontStyle: "normal",
                      fontWeight: 500,
                      mr: 1,
                      lineHeight: "normal",
                      mt: 2,
                    }}
                  >
                    {listings.discription.map((des) => (
                      <ul>
                        <li>{des}</li>
                      </ul>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      fontFamily: "Mulish, sans-serif",
                      color: "var(--Text-Color-Grey-Bold, #333)",
                      fontSize: { md: "14px", xs: "13.5px" },
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      mt: 4,
                      ml: 3.5,
                    }}
                  >
                    {listings.softwares.map((software) => (
                      <Chip
                        label={software}
                        sx={{
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          maxHeight: "25px",
                          mr: 1,
                          backgroundColor: "#38788763",
                          mb: 2.5,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Box>
      </Grid>
    </Box>
  );
}

export default Projects;
