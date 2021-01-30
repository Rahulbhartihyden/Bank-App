'use strict';
const julia_data = [3, 5, 2, 12, 7];
const kate_data = [4, 1, 15, 8, 3];

// const checkDogs = function (data1, data2) {
//   const julia_data_corrected = data1.slice();
//   julia_data_corrected.splice(0, 1);
//   julia_data_corrected.splice(-2);
//   const dogs = julia_data_corrected.concat(kate_data);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult,  and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };
// checkDogs(julia_data, kate_data);
// let HumanAge;
const clacAverageHumanAge = function (dogsAge) {
  const humanAge = dogsAge.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultAge = humanAge.filter(age => age >= 18);
  const average = adultAge.reduce((acc, age) => acc + age, 0) / adultAge.length;

  console.log(humanAge);
  console.log(adultAge);
  console.log(average);
};
clacAverageHumanAge(julia_data);
