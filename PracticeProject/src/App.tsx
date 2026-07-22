import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import type { Student } from "./types/Student";
import { studentsData } from "./data/students";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setStudents(studentsData);
  }, []);
     
  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [students, search]);

  const addStudent = (
    name: string,
    age: number,
    department: string,
    cgpa: number
  ) => { 
    const newStudent: Student = {
      id: Date.now(),
      name,
      age,
      department,
      cgpa,
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const deleteStudent = (id: number) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };           

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">

        <Header />

      <div className="mb-8 flex items-center gap-4">
  <div className="flex-1">
    <SearchBar
      search={search}
      onSearch={handleSearch}
    />
  </div>

  <AddStudent
    onAddStudent={addStudent}
  />
</div>
        <p className="mt-6 rounded-lg bg-blue-100 p-4 text-center text-lg font-semibold text-blue-800">
          Total Students: {filteredStudents.length}
        </p>

        <div className="mt-8">
          <StudentList
            students={filteredStudents}
            onDelete={deleteStudent}
          />
        </div>

        <section className="mt-8 flex justify-center gap-4">
          <Button
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={() => setCount(0)}
          >
            Reset Counter
          </Button>
        </section>

      </div>
    </div>
  );
}

export default App;