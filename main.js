
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
  const { count, age } = dtoIn;
  let dtoOut=[];
  for (let i = 0; i < count; i++) {
    const randomAge = getRandomAge(age.min, age.max);
    const employee = createRandomEmployee(randomAge);
    dtoOut.push(employee);
  }
  console.log(dtoOut);
  return dtoOut;
}

let Gender=Object.freeze({
  MALE: "male",
  FEMALE: "female"
});

let WorkingHours=Object.freeze({
  FULLTIME: 40,
  MAJORITY: 30,
  PARTTIME: 20,
  QUARTER:10
})

const firstNames = [
  "Jan", "Jakub", "Josef", "Petr", "Martin", "Tomáš", "Jiří", "Ondřej", "Adam", "Filip",
  "David", "Daniel", "Vojtěch", "Matěj", "Lukáš", "Marek", "Dominik", "Šimon", "Tobiáš", "Václav",
  "Eliška", "Anna", "Tereza", "Marie", "Lucie", "Adéla", "Ema", "Natálie", "Sofie", "Viktorie",
  "Nela", "Julie", "Laura", "Barbora", "Veronika", "Kristýna", "Sára", "Emma", "Kateřina", "Jana",
  "Helena", "Alžběta", "Denisa", "Monika", "Eva", "Hana", "Ivana", "Zuzana", "Daniela", "Petra"
];

const lastNames = [
  "Novák", "Nováková", "Svoboda", "Svobodová", "Novotný", "Novotná",
  "Dvořák", "Dvořáková", "Černý", "Černá", "Procházka", "Procházková",
  "Veselý", "Veselá", "Horák", "Horáková", "Marek", "Pokorný",
  "Pokorná", "Marková", "Pospíšil", "Hájek", "Beneš", "Benešová",
  "Král", "Králová", "Fiala", "Fialová", "Zeman", "Zemanová",
  "Doležal", "Doležalová", "Navrátil", "Navrátilová", "Urban", "Urbanová",
  "Růžička", "Němec", "Kopecký", "Kopecká", "Blažek", "Blažková",
  "Musil", "Musilová", "Malý", "Malá", "Kadlec", "Šimek", "Machová"
];


function getRandomFirstName(){
  let randomIndex=Math.floor(Math.random() * firstNames.length);
  return firstNames[randomIndex];
}

function getRandomLastName(){
  let randomIndex=Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIndex];
}

function getRandomGender() {
  let genders = Object.values(Gender);
  let randomIndex = Math.floor(Math.random() * genders.length);
  return genders[randomIndex];
}

function getRandomWorkingHours(){
  let workingHours=Object.values(WorkingHours);
   let randomIndex = Math.floor(Math.random() * workingHours.length); 
   return workingHours[randomIndex];
}

function getRandomAge(ageMin, ageMax) {
  const min = ageMin;
  const max = ageMax;
  if (min >= max) {
    throw new Error("Invalid range");
  }
  return Math.random() * (max - min) + min;
}

function getRandomBirthDate(age) {
  const ageInMs = age * (365.25 * 24 * 60 * 60 * 1000);
  const birthDate = new Date(new Date().getTime() - ageInMs);
  return birthDate.toISOString();
}

function createRandomEmployee(age) {
  const generatedName = getRandomFirstName();
  const generatedSurname = getRandomLastName(); 
  const generatedGender = getRandomGender();
  const generatedWorkingHours = getRandomWorkingHours();
  const generatedBirthDate = getRandomBirthDate(age); 
  return {gender: generatedGender, birthdate: generatedBirthDate, name: generatedName, surname: generatedSurname, workload: generatedWorkingHours }; 
}