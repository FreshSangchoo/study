// 미션 1.
let foods = [
  { name: "Burger", calories: 800 },
  { name: "Apple", calories: 52 },
  { name: "Pizza", calories: 550 },
  { name: "Salad", calories: 150 },
];

for (let i = 0; i < foods.length; i++) {
  if (foods[i].calories >= 500) console.log(foods[i].name);
}

// 미션 2.
function Animal(species, sounds) {
  (this.species = species),
    (this.sounds = sounds),
    (this.makeSound = function () {
      return `${this.species}이(가) ${this.sounds} 소리를 냅니다.`;
    });
}

const dog = new Animal("개", "멍멍");
console.log(dog.makeSound());

const cat = new Animal("고양이", "야옹");
console.log(cat.makeSound());
