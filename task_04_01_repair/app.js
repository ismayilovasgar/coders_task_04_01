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
let demo = setInterval(() => {
  const birthday = new Date("03-28-2024");
  let now = new Date();
  let between = now - birthday;
  let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
  let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
  let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
  let saniye = Math.trunc((between / 1000) % 60);
  console.clear();
  console.log(
    `%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,
    `color:${getRandColor()};`
  );
}, 1000);

clearInterval(demo);

function getRandColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  return `rgb(${r},${g},${b})`;
}

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
    name: "cosqun",
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
  let arr1 = [];
  let filter_students = students
    .filter((st) => st.name.toLowerCase().includes(search_name.toLowerCase()))
    .map((el) => arr1.push(`${el.name} ${el.surname}`));
  console.log(arr1.join(", ") + ".");
}
// searchByName();

// - 3

let text = prompt("Enter text: ");
let i = 0;
let direction = true;
// hello i === o
let interval = setInterval(() => {
  if (i === text.length) {
    direction = false;
  }

  if (i === 1) {
    direction = true;
  }

  if (direction) {
    i++;
  } else {
    // hello -- hell -- hel -- he -- h
    i--;
    if (i === 1) {
      clearInterval(interval);
    }
  }

  console.log(text.slice(0, i));
}, 200);
