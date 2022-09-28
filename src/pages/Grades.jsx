import React from 'react'
import SearchBar from '../components/SearchBar'
import Grade from '../components/Grade'
import AddGrade from '../components/AddGrade'

const Grades = () => {
  localStorage.clear()
  return (
    <div className='contenedor contenedor-admin'>
      <SearchBar />
      <h1 className='h1-administracion'>Nivel Pre-primario</h1>
      <Grade curso={"Pre-kínder"} encargado={"Rubén	Argüero	Sánchez Juanajatoja"} id={"1"} alumnos={0} />
      <Grade curso={"Kínder"} encargado={"Anastasia Madeline Orellana Álvarez"} id={"2"} alumnos={0} />
      <Grade curso={"Párvulos"} encargado={"Sara Josthyn Gutiérrez Lagos"} id={"3"} alumnos={0} />
      <h1 className='h1-administracion'>Nivel Primario</h1>
      <Grade curso={"Primero primaria"} encargado={"Rubén	Argüero	Sánchez Juanajatoja"} id={"4"} alumnos={0} />
      <Grade curso={"Segundo primaria"} encargado={"Anastasia Madeline Orellana Álvarez"} id={"5"} alumnos={0} />
      <Grade curso={"Tercero primaria"} encargado={"Sara Josthyn Gutiérrez Lagos"} id={"6"} alumnos={0} />
      <Grade curso={"Cuarto primaria"} encargado={"Nadie"} id={"7"} alumnos={0} />
      <Grade curso={"Quinto primaria"} encargado={"Nadie"} id={"8"} alumnos={0} />
      <Grade curso={"Sexto primaria"} encargado={"Cain Nehemias Orellana Valenzuela"} id={"9"} alumnos={0} />
      <h1 className='h1-administracion'>Otros</h1>
      <Grade curso={"Educación física"} encargado={"Yonathan Fabio Aguilera Poblete"} id={"10"} alumnos={0} />
      <AddGrade />
    </div>
  )
}

export default Grades