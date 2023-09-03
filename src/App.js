import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Calculator from './Components/Calculator/Calculator';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  
    <>
    <Header/>
    <main>

    <Calculator/>
    </main>
    <Footer/>
      </>
  );
}

export default App;

// import React, { useState } from 'react';

// const GpaCgpaCalculator = () => {
//   const [courses, setCourses] = useState([
//     { grade: 0, creditHours: 0 },
//   ]);
//   const [semesterGpa, setSemesterGpa] = useState(null);
//   const [cgpa, setCgpa] = useState(null);

//   const addCourse = () => {
//     setCourses([...courses, { grade: 0, creditHours: 0 }]);
//   };

//   const updateGrade = (index, value) => {
//     const updatedCourses = [...courses];
//     updatedCourses[index].grade = parseFloat(value);
//     setCourses(updatedCourses);
//   };

//   const updateCreditHours = (index, value) => {
//     const updatedCourses = [...courses];
//     updatedCourses[index].creditHours = parseFloat(value);
//     setCourses(updatedCourses);
//   };

//   const calculateSemesterGpa = () => {

//     let totalGradePoints = 0;
//     let totalCreditHours = 0;

//     courses.forEach((course) => {
//       totalGradePoints += course.grade * course.creditHours;
//       totalCreditHours += course.creditHours;
//     });

//     const semesterGpa = totalGradePoints / totalCreditHours;
//     setSemesterGpa(semesterGpa.toFixed(2));
//   };

//   const calculateCgpa = () => {
//     let totalGradePoints = 0;
//     let totalCreditHours = 0;

//     courses.forEach((course) => {
//       totalGradePoints += course.grade * course.creditHours;
//       totalCreditHours += course.creditHours;
//     });

//     const cgpa = totalGradePoints / totalCreditHours;
//     setCgpa(cgpa.toFixed(2));
//   };

//   return (
//     <div>
//       <h2>GPA & CGPA Calculator</h2>
//       {courses.map((course, index) => (
//         <div key={index}>
//           <label>
//             Grade for Course #{index + 1} (0.0 to 4.0):
//             <input
//               type="number"
//               step="0.01"
//               value={course.grade}
//               onChange={(e) => updateGrade(index, e.target.value)}
//             />
//           </label>
//           <label>
//             Credit Hours for Course #{index + 1}:
//             <input
//               type="number"
//               value={course.creditHours}
//               onChange={(e) => updateCreditHours(index, e.target.value)}
//             />
//           </label>
//         </div>
//       ))}
//       <button onClick={addCourse}>Add More Courses</button>
//       <button onClick={calculateSemesterGpa}>Calculate Semester GPA</button>
//       <button onClick={calculateCgpa}>Calculate CGPA</button>

//       {semesterGpa !== null && <p>Semester GPA: {semesterGpa}</p>}
//       {cgpa !== null && <p>CGPA: {cgpa}</p>}
//     </div>
//   );
// };

// export default GpaCgpaCalculator;
