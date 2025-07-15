import React, { useState, useEffect } from "react";
import PortfolioProject from "./Card";

export default function Portfolio () {

  const [ data, setData ] = useState([]);

  useEffect(()=>{
    fetch('./projects.json')
    .then(response => response.json())
    .then(datos => setData(datos))
    .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <h2>Portfolio</h2>
      <div className="projects">
        {data.map((item, index) => (
        <PortfolioProject key= {index} title={item.title} text={item.text} listgroup={item.listgroup} link={item.link} />
        )
        )}
      </div>
    </>
  );
}