/**
 * To run this file in Gitpod, use the
 * command node filter.js in the terminal
 */

// Simple Filtering
const people = [
  {
    name: "Michael",
    age: 23,
  },
  {
    name: "Lianna",
    age: 16,
  },
  {
    name: "Paul",
    age: 18,
  },
];

// const pplOver21 = people.filter(person => person.age >= 21)


// const returnPaul = people.filter((person) => person.name === "Paul")[0];
// console.log(returnPaul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skills: [
      { name: "javascript", yrsExperience: 1 },
      { name: "html", yrsExperience: 5 },
      { name: "css", yrsExperience: 3 },
    ],
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skills: [
      { name: "javascript", yrsExperience: 0 },
      { name: "html", yrsExperience: 4 },
      { name: "css", yrsExperience: 2 },
    ],
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skills: [
      { name: "javascript", yrsExperience: 1 },
      { name: "html", yrsExperience: 1 },
      { name: "css", yrsExperience: 5 },
    ],
  },
];

const has5yrsExp = skill => skill.yrsExperience >= 5

const hasStrongSkills = student =>
student.skills.filter(has5yrsExp).length > 0;

const candidates = students.filter(hasStrongSkills)

// console.log(candidates)

const candNames = candidates.map(candidate => candidate.name)
console.log(candNames)


// const strongExp = students.filter(student => {
//   let checkExp = student.skills.filter(skill => skill.yrsExperience >= 5)
//   console.log(checkExp)
//   return checkExp.length > 0;
//   })
  
//   console.log(strongExp)
  


