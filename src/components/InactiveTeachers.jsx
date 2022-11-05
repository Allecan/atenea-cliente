import React from 'react'
import Arrow from "../../src/assets/images/arrow_right.svg";
import { Link } from "react-router-dom";

const InactiveTeachers = ({uid, name, grado}) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold">{name}</p>
        <Link to={`/cuenta/docente/${uid}`}>
        <img className="mt-3 cursor-pointer" src={Arrow} alt="arrow" />
        </Link>
      </div>

      <div className="flex  space-x-2 mt-1 mb-2 ">
        <p className="text-xs">Docente de: </p>
        <p className="text-xs font-bold">{grado ? grado : "Ningún grado"}</p>
      </div>
      <hr className="bg-[#DBD8FF]" />
    </>
  )
}

export default InactiveTeachers