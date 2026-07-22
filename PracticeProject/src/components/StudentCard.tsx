import { Button } from "@/components/ui/button";
import type { Student } from "../types/Student";

interface StudentCardProps {
  student: Student;
  onDelete: (id: number) => void;
}

function StudentCard({
  student,
  onDelete,
}: StudentCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md transition hover:shadow-lg">
      <h3 className="mb-4 text-2xl font-bold text-slate-800">
        {student.name}
      </h3>

      <div className="space-y-2 text-slate-600">
        <p>
          <span className="font-semibold">Age:</span> {student.age}
        </p>

        <p>
          <span className="font-semibold">Department:</span>{" "}
          {student.department}
        </p>

        <p>
          <span className="font-semibold">CGPA:</span> {student.cgpa}
        </p>
      </div>

      <Button
        variant="destructive"
        className="mt-6 w-full"
        onClick={() => onDelete(student.id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default StudentCard;