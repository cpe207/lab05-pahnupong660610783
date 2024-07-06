// define interface for Student object
// assign interface/type to the function definition properly
function findTopNames(students) {
    var hight = students
        .filter(function (student) { return student.score > 8; })
        .map(function (student) { return student.name; });
    return hight;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//660610783 ภานุพงศ์ แก้วประมูล
