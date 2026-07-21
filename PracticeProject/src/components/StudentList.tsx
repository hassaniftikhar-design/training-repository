import StudentCard from "./StudentCard";
import type { Student } from "../types/Student";

interface StudentListProps {
  students: Student[];
}
function StudentList({students}:StudentListProps){
    return (

        <div className="list">
            {students.map((student)=>(
                <StudentCard key={student.id}
                student={student}
                />
            ))}
        </div>
    );
}

export default StudentList;
