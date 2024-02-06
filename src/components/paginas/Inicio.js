import React from 'react';
import { useContext } from "react";
import { context } from "../../context/authContext";

export function Inicio() {
  
  const authContext = useContext(context)

  return <div>Inicio</div>
}
export default Inicio;
