export type Fakemon = {
  name: string;
  id: number;
  type: string;
  attack: number;
  defense: number;
  hp: number;
};
export const fakemonsData: Fakemon[] = [
  {
    name: "Flameon",
    id: 1,
    type: "Fire",
    attack: 85,
    defense: 60,
    hp: 75,
  },
  {
    name: "Aquarion",
    id: 2,
    type: "Water",
    attack: 70,
    defense: 65,
    hp: 80,
  },
  {
    name: "Leafid",
    id: 3,
    type: "Grass",
    attack: 75,
    defense: 70,
    hp: 85,
  },
  {
    name: "Thundor",
    id: 4,
    type: "Electric",
    attack: 90,
    defense: 55,
    hp: 70,
  },
  {
    name: "Rockster",
    id: 5,
    type: "Rock",

    attack: 80,
    defense: 90,
    hp: 60,
  },
  {
    name: "Frostbite",
    id: 6,
    type: "Ice",
    attack: 65,
    defense: 75,
    hp: 80,
  },
  {
    name: "Dragoon",
    id: 7,
    type: "Dragon",
    attack: 95,
    defense: 85,
    hp: 90,
  },
  {
    name: "Phantom",
    id: 8,
    type: "Ghost",
    attack: 80,
    defense: 60,
    hp: 70,
  },
  {
    name: "Psychic",
    id: 9,
    type: "Psychic",
    attack: 70,
    defense: 55,
    hp: 75,
  },
  {
    name: "Bugster",
    id: 10,
    type: "Bug",
    attack: 60,
    defense: 50,
    hp: 65,
  },
];
