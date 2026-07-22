import StudentCard from "./StudentCard";
import type { Student } from "../types/Student";

interface StudentListProps {
  students: Student[];
  onDelete: (id: number) => void;
}

function StudentList({
  students,
  onDelete,
}: StudentListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;