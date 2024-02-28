import React, { createContext, useState } from "react";

import prop1 from "../images/prop1.png";
import prop2 from "../images/prop2.png";
import prop3 from "../images/prop3.png";
import prop4 from "../images/prop4.png";
import prop5 from "../images/prop5.png";
import cheffy1 from "../images/cheff1.png";
import cheffy2 from "../images/cheff2.png";
import cheffy3 from "../images/cheff3.png";
import cheffy4 from "../images/cheff4.png";
import vcams1 from "../images/vcams1.png";
import vcams2 from "../images/vcams2.png";
import vcams3 from "../images/vcams3.png";
import vcams4 from "../images/vcams4.png";
import nurture1 from "../images/nurture1.png";
import nurture2 from "../images/nurture2.png";
import nurture3 from "../images/nurture3.png";
import nurture4 from "../images/nurture4.png";

export const userContext = createContext();

export const UserContextProvider = (props) => {
  const sliderContents = [
    {
      id: 1,
      title: "CHEFFY-HUB",
      discription: [
        "Developed a food delivery platform similar to 'Swiggy' as a fresher, contributing significantly to the web development aspects of the project. ",
        "Actively contributed to problem-solving, code reviews, and debugging sessions, demonstrating adaptability and quick learning.",
        "Currently, the project is in the production phase, showcasing the practical application of acquired skills in a real-world scenario.",
      ],
      softwares: ["React.js", "Redux", "Javascript", "Material UI", "Java"],
      images: [
        { imagePath: cheffy1 },
        { imagePath: cheffy2 },
        { imagePath: cheffy3 },
        { imagePath: cheffy4 },
      ],
      link:'https://cheffyhub.com/'
    },
    {
      id: 2,
      title: "PROP-BROKER",
      discription: [
        "Developed a comprehensive property posting and listing software designed for the sale and lease of properties.",
        "Collaborated in the design and implementation of a visually appealing user interface, enhancing the overall user experience.",
        "Majorly contributed to the development of functionalities related to property posting, search, and detailed property information display.",
        "Worked on the integration of a robust backend system to support property data management and retrieval.",
      ],
      softwares: ["React.js", "Javascript", "Material UI", "Java"],
      images: [
        { imagePath: prop1 },
        { imagePath: prop2 },
        { imagePath: prop3 },
        { imagePath: prop4 },
        { imagePath: prop5 },
      ],
      link:'https://propertybricks.co.in/'
    },
    {
      id: 3,
      title: "V-CAMS",
      discription: [
        "Developed a comprehensive billing software tailored for V-CAMS, a company specializing in camera equipment, tripods, lights, and related shooting products.",
        "Implemented features that streamline the product listing process, automatically generating QR or barcodes for listed items.",
        "Designed and developed a seamless scanning system for generating bills, enhancing the overall user experience for both V-CAMS and its customers.",
        "Demonstrated autonomy and self-management in handling the entire frontend development lifecycle of the project as a freelancer.",
      ],
      softwares: ["React.js", "Javascript", "Material UI", "PHP"],
      images: [
        { imagePath: vcams1 },
        { imagePath: vcams2 },
        { imagePath: vcams3 },
        { imagePath: vcams4 },
      ],
      link:''
    },
    {
      id: 4,
      title: "Nurture",
      discription: [
        "Leading the frontend development of 'NURTURE,' a hospital management software, currently under construction.",
        "Directly managing and mentoring a team of three junior interns, providing guidance and oversight in their contributions to the project.",
        "Designing and implementing features for patient listing, document management, and billing processes, ensuring a comprehensive solution for hospital operations.",
        "Demonstrating leadership in coordinating tasks, optimizing the workflow, and fostering a collaborative environment within the development team.",
      ],
      softwares: ["React.js", "Javascript", "Material UI", "PHP"],
      images: [
        { imagePath: nurture1 },
        { imagePath: nurture2 },
        { imagePath: nurture3 },
        { imagePath: nurture4 },
      ],
    },
  ];
    const [bgColor, setBgcolor] = useState();

  return (
    <userContext.Provider value={{ bgColor, setBgcolor,sliderContents }}>
    {props.children}
  </userContext.Provider>
);

};
