// import React, { useState, useEffect } from "react";
// import Alumno from "../components/Alumno";
// import SearchBar from "../components/SearchBar";
// import Retroceder from "../components/Retroceder";

// import { getAllStudents } from "../services/controllerDirector";
// import { searchByStudentName } from "../utils/FunctionUtils";
// import { GetGradesByID } from "../services/controllerDocentes";

// const AllAlumnos = () => {
//   let gradoJSON = localStorage.getItem("seteargrado");
//   let seteargrado = JSON.parse(gradoJSON);
//   const [actual, setActual] = useState([]);
//   const [hidden, setHidden] = useState("");
//   const [myStudents, setMyStudents] = useState([]);
//   let [allStudents, setAllStudents] = useState([]);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API

//     let gradoJSON = localStorage.getItem("seteargrado");
//     let seteargrado = JSON.parse(gradoJSON);

//     const handleGetAllStudents = async () => {
//       let response = await getAllStudents();
//       if (response.status === 200) {
//         console.log(response.body);

//         if (seteargrado.grado === "PreKinder") {
//           setActual(response.body.prePrimaria.preKinder.data);
//         }
//         if (seteargrado.grado === "Kinder") {
//           setActual(response.body.prePrimaria.kinder.data);
//         }
//         if (seteargrado.grado === "Parvulos") {
//           setActual(response.body.prePrimaria.parvulos.data);
//         }
//         if (seteargrado.grado === "Primero primaria") {
//           setActual(response.body.primaria.primero.data);
//         }
//         if (seteargrado.grado === "Segundo primaria") {
//           setActual(response.body.primaria.segundo.data);
//         }
//         if (seteargrado.grado === "Tercero primaria") {
//           setActual(response.body.primaria.tercero.data);
//         }
//         if (seteargrado.grado === "Cuarto primaria") {
//           setActual(response.body.primaria.cuarto.data);
//         }
//         if (seteargrado.grado === "Quinto primaria") {
//           setActual(response.body.primaria.quinto.data);
//         }
//         if (seteargrado.grado === "Sexto primaria") {
//           setActual(response.body.primaria.sexto.data);
//         }
//       } else {
//         console.log(response.body);
//       }
//     };

//     handleGetAllStudents();
//   }, []);

//   const handleSearchAlumno = (e) => {
//     console.log(allStudents);
//     if (e.target.value === "") {
//       setHidden("");
//       setAllStudents([]);
//     } else {
//       setHidden("hidden");
//       // let arrayAux = actual;
//       // setAllStudents(arrayAux);
//       // console.log("Concatenados", arrayAux);
//       console.log("AllStudents", allStudents);
//       console.log("ver arreglo", actual);
//       allStudents = searchByStudentName(actual, e.target.value);
//       setAllStudents(allStudents);
//       console.log("AllStudents", allStudents);
//     }
//   };

//   useEffect(() => {
//     // Update the document title using the browser API
//     let uidgradeJSON = localStorage.getItem("seteargrado");
//     let useGrade = JSON.parse(uidgradeJSON);

//     const handleMyStudents = async () => {
//       let response = await GetGradesByID(useGrade.uidgrade);
//       if (response.status === 200) {
//         console.log(response.body);
//         setMyStudents(response.body.students);
//         console.log(myStudents);
//       } else {
//         console.log(response);
//       }
//     };

//     handleMyStudents();
//   }, []);

//   return (
//     <>
//       <div className="contenedor contenedor-admin mb-[80px]">
//         <Retroceder text={seteargrado.grado} />

//         <div className="my-2">
//           <SearchBar
//             onChange={handleSearchAlumno}
//             placeholder="Buscar un Alumno"
//           />
//         </div>
//         <div className={hidden}>
//           <div className="text-start m-5">
//             <label className="font-sans text-[16px]">
//               Número de alumnos en{" "}
//               <label className="font-semibold text-[16px] text-[#4D3483]">
//                 {seteargrado.grado}:{" "}
//                 <label className="font-semibold text-[16px]">
//                   {seteargrado.total}
//                 </label>
//               </label>{" "}
//             </label>
//           </div>

//           <div className="my-[30px]">
//             {actual.map((estudiante) => (
//               <Alumno
//                 nombre={estudiante.name}
//                 uid={estudiante.uid}
//                 key={estudiante.uid}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="">
//           {allStudents.map((estudiante) => (
//             <Alumno
//               nombre={estudiante.name}
//               uid={estudiante.uid}
//               key={estudiante.uid}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AllAlumnos;
