import type { Student } from "../types/Student";

// interface StudentCardProps {
//   student: Student;
// }

function StudentCard({ student }: { student: Student }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>

      <p>Age : {student.age}</p>

      <p>Department : {student.department}</p>

      <p>CGPA : {student.cgpa}</p>
    </div>
  );
}

export default StudentCard;