import React, { useState, useEffect } from "react";
import PortfolioProject from "./Card";
import Title from "./Title"

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
        <Title title="Portfolio"/>
        <div className="projects">
          {data.map((item, index) => (
          <PortfolioProject key= {index} icon = {item.icon}title={item.title} text={item.text} listgroup={item.listgroup} link={item.link} />
          )
          )}
        </div>
    </>
  );
}