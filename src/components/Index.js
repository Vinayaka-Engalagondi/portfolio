import React, { useState } from "react";
import About from "./About";

export default function Index() {
    const [tabValue, setTabValue ]=useState(1)
  return (
    <>
      {tabValue===1&&<About setTabValue={setTabValue}/>}
    </>
  );
}
