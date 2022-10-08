import React from 'react'
import Regresar from "../assets/images/regresar.svg";
import { useNavigate } from 'react-router-dom'
import ComboBox from '../components/ComboBox';
import { AlertButton } from "../utils/AlertButton";
const EditGrade = () => {
    let gradeJSON = localStorage.getItem('grade')
    let grade = (JSON.parse(gradeJSON))
    const navigate = useNavigate()
    const Swal = require('sweetalert2')
    const handleReturn = () => {
        navigate(-1)
    }
    const handleEdit = (e) => {
        e.preventDefault();
        document.getElementById('grade').value = ''
        Swal.fire(
            AlertButton.dataAlert('Datos actualizados')
        ).then(() => {
            navigate('/grades')
        })
    }
    return (
        <>
            <div className='contenedor-admin'>
                <div className='grid grid-cols-12 items-center'>
                    <button onClick={handleReturn}>
                        <img src={Regresar} alt='Regresar' />
                    </button>
                    <p className='p-purple col-span-2'>Atrás</p>
                    <p className='p-bold-administracion col-span-9'> Editar datos</p>
                </div>
            </div>
            <hr className='administracion' />
            <div className='contenedor-admin'>
                <label htmlFor="grade" className='label-purple'>Nombre del grado<span className='span-field'>*</span></label>
                <input
                    id="grade"
                    name="grade"
                    className={`font-normal border-solid border-[1px] border-[#DBD8FF] rounded-[10px] py-2.5 px-2 focus:outline-2 focus:outline-[#A954FF] w-full`}
                    placeholder="Ingresar nombre del grado"
                    required
                    defaultValue={grade.curso}
                />
                <label htmlFor="grade" className='label-purple'>Docente a cargo<span className='span-field'>*</span></label>
                <ComboBox teachers={['Rubén	Argüero	Sánchez Juanajatoja', 'Anastasia Madeline Orellana Álvarez', 'Sara Josthyn Gutiérrez Lagos',
                    'Cain Nehemias Orellana Valenzuela', 'Yonathan Fabio Aguilera Poblete']} valueByDefault={grade.encargado} />
            </div>
            <button className='button-purple' style={{ position: 'absolute', left: '0px', marginLeft: '20px', width: 'calc(100% - 40px)', bottom: '20px' }} onClick={handleEdit}>
                Actualizar datos
            </button>
        </>
    )
}

export default EditGrade