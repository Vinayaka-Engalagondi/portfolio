import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userContext } from "./useContext/CreateContext";

const sliderContents = [
  {
    id: 1,
    title: "BACHELOR OF ENGINEERING",
    college: "Pes Institute of Technology & Management, Shivamogga",
    percentage: "82%",
    year: "Aug-2022",
  },
  {
    id: 2,
    title: "PRE-UNIVERSITY COLLEGE",
    college: "Government Pre-University College, Anavatti",
    percentage: "76%",
    year: "May-2018",
  },
  {
    id: 3,
    title: "SECONDAY SCHOOL LEAVING CERTIFICATE",
    college: "Government Junior College, Anavatti",
    percentage: "87%",
    year: "Apr-2016",
  },
  {
    id: 4,
    other: "OTHER COURSES",
    react: "React.js - The Complete Guide (incl. React Router & Redux)",
    javascript: "Complete Javascript Course - 2023",
    html: "Modern HTML & CSS Course",
  },
];
const Academics = () => {
  const sliderRef4 = useRef(null);

  const [slidesToShow4, setSlidesToShow4] = useState(2);
  const { setBgcolor } = useContext(userContext);

  useEffect(() => {
    setBgcolor("none");
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setSlidesToShow4(1);
      } else if (window.innerWidth >= 600) {
        setSlidesToShow4(2);
      } else if (window.innerWidth >= 400) {
        setSlidesToShow4(1);
      } else if (window.innerWidth >= 200) {
        setSlidesToShow4(1);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,autoplay: true, // Enable autoplay
    autoplaySpeed: 2500,
    slidesToShow: slidesToShow4,
    slidesToScroll: 1,
    arrows: false,  };

  return (
    <Box
      sx={{
        height: { md: "100vh", xs: "105vh", sm: "120vh" },
        background: "#686868",
      }}
    >
      <Header />
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Container
          maxWidth={"lg"}
          sx={{ mt: { md: 20, xs: 25 }, position: "relative" }}
        >
          {/* Custom "Previous" button */}
          <Box
            className="custom-arrow custom-prev-arrow"
            onClick={() => {
              if (sliderRef4.current) {
                sliderRef4.current.slickPrev();
              }
            }}
            sx={{
              position: "absolute",
              top: "50%",
              ml: { md: -4, xs: -2.3 },
              display: "flex",
              alignContent: "center",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "#292929",
              borderRadius: "50%",
              maxWidth: "150px",
              color: "White",
            }}
          >
            <ArrowBackIosNewIcon sx={{ width: "17px", height: "16px", p: 1 }} />
          </Box>

          <Slider ref={sliderRef4} {...settings4}>
            {sliderContents.map((slider) => (
              <div key={slider.id}>
                <Card
                  sx={{
                    margin: "0 16px",
                    backgroundColor: "#292929",
                    minHeight: 400,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      padding: "20px",
                      margin: "auto",
                    }}
                  >
                    {slider.title && (
                      <Box
                        sx={{
                          fontSize: { md: "40px", xs: "20px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "#dfd4b4",
                          textAlign: "center ",
                          mb: 8,
                          mt: 5,
                          fontWeight: 600,
                        }}
                      >
                        {slider.title}
                      </Box>
                    )}
                    {slider.college && (
                      <Box
                        sx={{
                          fontSize: { md: "33px", xs: "18px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "#d8d7d7",
                          textAlign: "center ",
                          mb: 2,
                        }}
                      >
                        {slider.college}
                      </Box>
                    )}
                    {slider.percentage && (
                      <Box
                        sx={{
                          fontSize: { md: "33px", xs: "18px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "white",
                          textAlign: "center ",
                        }}
                      >
                        Completed with {slider.percentage} in {slider.year}
                      </Box>
                    )}
                    {slider.other && (
                      <Box
                        sx={{
                          fontSize: { md: "40px", xs: "20px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "#dfd4b4",
                          textAlign: "center ",
                          mb: 8,
                          fontWeight: 600,
                          mt: 5,
                        }}
                      >
                        {slider.other}
                      </Box>
                    )}

                    {slider.react && (
                      <Box
                        sx={{
                          fontSize: { md: "33px", xs: "18px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "#d8d7d7",
                          textAlign: "center ",
                          mb: 2,
                        }}
                      >
                        {slider.react}
                      </Box>
                    )}
                    {slider.javascript && (
                      <Box
                        sx={{
                          fontSize: { md: "33px", xs: "18px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "#d8d7d7",
                          textAlign: "center ",
                          mb: 2,
                        }}
                      >
                        {slider.javascript}
                      </Box>
                    )}
                    {slider.html && (
                      <Box
                        sx={{
                          fontSize: { md: "33px", xs: "18px" },
                          fontFamily: "Mulish, sans-serif",
                          color: "#d8d7d7",
                          textAlign: "center ",
                          mb: 2,
                        }}
                      >
                        {slider.html}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
          {/* Custom "Next" button */}
          <Box
            className="custom-arrow custom-next-arrow"
            onClick={() => {
              if (sliderRef4.current) {
                sliderRef4.current.slickNext(); // Go to the next slide
              }
            }}
            sx={{
              position: "absolute",
              top: "50%",
              display: "flex",
              alignContent: "center",
              right: { md: -10, xs: -3 },
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "#292929",
              borderRadius: "50%", // Set the borderRadius to create a circle
              maxWidth: "150px", // Adjust the width and height to make it circular
              color: "white",
              boxShadow:
                "0px 2.6658482551574707px 5.331696510314941px rgba(0, 0, 0, 0.15)",
            }}
          >
            <ArrowForwardIosIcon sx={{ width: "17px", height: "16px", p: 1 }} />
          </Box>
        </Container>
      </Grid>
    </Box>
  );
};

export default Academics;
