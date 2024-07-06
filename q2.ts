// define interface for Student object

interface Student{
  name: string;
  score: number;

}

// assign interface/type to the function definition properly
function findTopNames(students: Student[]):string[] {
  const hight = students
  .filter(student => student.score > 8)
  .map(student => student.name)
  return hight;


}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//660610783 ภานุพงศ์ แก้วประมูล
