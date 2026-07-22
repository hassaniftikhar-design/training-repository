import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AddStudentProps {
  onAddStudent: (
    name: string,
    age: number,
    department: string,
    cgpa: number
  ) => void;
}

function AddStudent({ onAddStudent }: AddStudentProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState<number>(0);
  const [error, setError] = useState("");
const [open, setOpen] = useState(false);
  function handleSubmit() {
    setError("");

    if (!name || !age || !department) {
      setError("Please fill all fields.");
      return;
    }

    if (cgpa < 0 || cgpa > 4) {
      setError("CGPA must be between 0 and 4.");
      return;
    }

  onAddStudent(
  name,
  Number(age),
  department,
  cgpa
);

setName("");
setAge("");
setDepartment("");
setCgpa(0);

setOpen(false);


  }

  return (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger render={<Button/>}>
      <Button>Add Student</Button>
    </DialogTrigger>

    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Add Student</DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        {error && (
          <p className="rounded-md border border-red-300 bg-red-100 p-3 text-red-700">
            {error}
          </p>
        )}

        <Input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <Input
          type="number"
          step="0.1"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(Number(e.target.value))}
        />

        <Button className="w-full" onClick={handleSubmit}>
          Add Student
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);
}

export default AddStudent;