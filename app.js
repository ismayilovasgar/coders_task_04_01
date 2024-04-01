// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)
// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.
// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

// - 1
function getRandomColor(min, max) {
  let colors = [
    "green", // 0
    "red", // 1
    "blue", // 2
    "yellow", // 3
    "navy", // 4
    "gray", // 5
    "purple", // 6
    "fuchsia", // 7
    "aqua", // 8
  ]; //0 - 8
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return colors[num];
}

let demo = setInterval(() => {
  let now = new Date();
  let birthday = new Date("04-21-2024");
  let between = birthday - now;

  let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
  let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
  let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
  let saniye = Math.trunc((between / 1000) % 60);
  console.clear();
  console.log(
    `%c ${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,
    `color:${getRandomColor(0, 8)};`
  );
}, 1000);
clearInterval(demo);

// - 2
let students = [
  {
    id: 1,
    name: "veli",
    surname: "eliyev",
    age: 38,
    skill_id: 3,
    grade: 80,
    hobby: "chess",
  },
  {
    id: 2,
    name: "nicat",
    surname: "hesenli",
    age: 22,
    skill_id: 1,
    grade: 94,
    hobby: "swimming",
  },
  {
    id: 3,
    name: "zaur",
    surname: "memmedov",
    age: 29,
    skill_id: 4,
    grade: 70,
    hobby: "football",
  },
  {
    id: 4,
    name: "cosqun",
    surname: "kazimov",
    age: 21,
    skill_id: 2,
    grade: 93,
    hobby: "basketball",
  },
];

function searchByName() {
  let search_name = prompt("Telebe adi daxil edin: ");
  students
    .filter((student) => student.name === search_name)
    .map((el) => console.log(`Telebe: ${el.name} ${el.surname} ${el.age}`));
}
// searchByName();


// - 3 
//  let words =prompt("soz daxil edin:");
