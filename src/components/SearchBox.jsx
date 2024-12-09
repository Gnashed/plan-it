// import { useEffect, useState } from 'react';
// import StudentCard from './students/StudentCard';
// import { getAllStudents } from '../api/studentData';
// import { useAuth } from '../utils/context/authContext';

// export default function SearchBox() {
//   const [students, setStudents] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     getAllStudents(user.uid).then(setStudents);
//   }, []);

//   const handleChange = (e) => {
//     const userInput = e.target.value;
//     const results = students.filter((student) => {

//     })

//     if (userInput === '') {
//       setStudents([]);
//     } else {
//       setStudents(userInput);
//       console.warn(students);
//     }
//   };

//   return (
//     <>
//       <input type="text" name="search" id="search-box" placeholder="search for a student" onChange={handleChange} aria-label="Search" className="mb-5" style={{ width: '40rem', height: '1.75rem' }} />

//       {/* <div className="search-results"> */}
//       {students.map((item) => (
//         <StudentCard className="search-student-card" key={item.firebaseKey} studentObj={item} />
//       ))}
//       {/* </div> */}
//     </>
//   );
// };
