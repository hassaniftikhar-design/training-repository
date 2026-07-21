import { useCallback, useEffect, useMemo, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBAr";
import StudentList from "./components/StudentList";

import type { Student } from "./types/Student";
import { studentsData } from "./data/Students";

import "./App.css";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
 const [count,setcount]=useState(0);

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

  return (
    <div className="container">
      <Header/>
<button type= "button"
className="counter"
onClick={()=>setcount((count)=>count+1)}>
  Count is {count}

   </button>
   <button type="button" 
   className="counter"
onClick={()=>setcount(0)}>
  reset Counter
</button>
      <SearchBar
        search={search}
        onSearch={handleSearch}
      />

      <p>Total Students : {filteredStudents.length}</p>

      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;