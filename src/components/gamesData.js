// gamesData.js
import coffeeguru from '../assets/coffeeguru.png';
import harmonyheroes from '../assets/harmonyheroes.png';
import timhortons from '../assets/timhortons.png';
import krashkart from '../assets/krashkart.png';
import grimreaper from '../assets/grimreaper.png';
import cottoncandy from '../assets/cottoncandy.png';
import bravefox from '../assets/bravefox.png';
import hotdogplanet from '../assets/hotdogplanet.png';

import none from '../assets/none.png';

const games = [
  {
    id: 9,
    title: 'Prototype',
    year: 2025,
    description: 'It is a prototype of basic mobile games. In Progress...',
    image: none,
    webgl: 'https://github.com/yoyohohoh/Prototype',
    exe: 'https://github.com/yoyohohoh/Prototype',
    unity: 'https://github.com/yoyohohoh/Prototype',
    demo: 'https://github.com/yoyohohoh/Prototype',
    details: 'https://github.com/yoyohohoh/Prototype/blob/main/README.md'
  },

  {
    id: 8,
    title: 'Coffee Guru',
    year: 2025,
    description: '☕ A cozy coffee-making simulator.',
    image: coffeeguru,
    webgl: 'https://yobisaboy.itch.io/la-la-latte-coffee-guru',
    exe: 'https://github.com/yobisaboy/CoffeeGuru',
    unity: 'https://github.com/yoyohohoh/COMP395_GroupProject/tree/game',
    demo: 'https://youtu.be/S_MBiHWrwnI',
    details: 'https://github.com/yobisaboy/CoffeeGuru/blob/main/README.md'
  },
  {
    id: 7,
    title: 'Harmony Heroes',
    year: 2025,
    description: '🎵 A turn-based rhythm battle game.',
    image: harmonyheroes,
    webgl: 'https://yobisaboy.itch.io/harmony-heroes',
    exe: 'https://github.com/yobisaboy/HarmonyHeros',
    unity: 'https://github.com/CR3XX12/COMP390_001_HarmonyHero',
    demo: 'https://youtu.be/efdeuWxwAgQ',
    details: 'https://github.com/yobisaboy/HarmonyHeros/blob/main/README.md'
  },
  {
    id: 5,
    title: 'Krash Kart',
    year: 2024,
    description: '🏎️ A 2-player car racing game.',
    image: krashkart,
    webgl: 'https://yobisaboy.itch.io/krash-kart',
    exe: 'https://github.com/yobisaboy/KrashKart',
    unity: 'https://github.com/yoyohohoh/COMP396_FinalProject',
    demo: 'https://youtu.be/eu1CTlrcLD0',
    details: 'https://github.com/yobisaboy/KrashKart/blob/main/README.md'
  },
  {
    id: 4,
    title: 'Grim Reaper',
    year: 2024,
    description: '💀 An Android mobile platform game.',
    image: grimreaper,
    webgl: 'https://yobisaboy.itch.io/grim-reaper-pc',
    exe: 'https://github.com/yobisaboy/GrimReaper',
    unity: 'https://github.com/yobisaboy/GrimReaper/tree/main/project/GrimReaper',
    demo: 'https://youtu.be/9t5YjaY0nkM?si=Nnx_WbGuCoL2l531&t=28',
    details: 'https://github.com/yobisaboy/GrimReaper/blob/main/README.md'
  },
  {
    id: 6,
    title: 'Tim Hortons Simulation',
    year: 2025,
    description: '📊 An M/M/1 queue system simulation.',
    image: timhortons,
    webgl: 'https://yobisaboy.itch.io/tim-hortons-simulation',
    exe: 'https://github.com/yobisaboy/TimHortonsSimulation',
    unity: 'https://github.com/yoyohohoh/COMP395_GroupProject/tree/simulations',
    demo: 'https://youtu.be/39MNSWLmlmo',
    details: 'https://github.com/yobisaboy/TimHortonsSimulation/blob/main/README.md'
  },
  {
    id: 3,
    title: 'Cotton Candy',
    year: 2023,
    description: '🍬 A single/multiplayer game inspired by Super Mario Bros.',
    image: cottoncandy,
    webgl: 'https://yobisaboy.itch.io/cotton-candy',
    exe: 'https://github.com/yobisaboy/CottonCandy',
    unity: 'https://github.com/yoyohohoh/comp305assignment2',
    demo: 'https://youtu.be/_vgcpcpx14M',
    details: 'https://github.com/yobisaboy/CottonCandy/blob/main/README.md'
  },
  {
    id: 2,
    title: 'Brave Fox',
    year: 2023,
    description: '🦊 A simple 2D platform game.',
    image: bravefox,
    webgl: 'https://yobisaboy.itch.io/brave-fox',
    exe: 'https://github.com/yobisaboy/BraveFox',
    unity: 'https://github.com/yoyohohoh/comp305assignment1', 
    demo:'https://youtu.be/rE0mhi8fU4w',
    details:'https://github.com/yobisaboy/BraveFox/blob/main/README.md' 
  },
  {
    id: 1,
    title: 'Hot Dog Planet',
    year: 2022,
    description: '🌭 A game inspired by Space Invaders.',
    image: hotdogplanet,
    webgl: 'https://yobisaboy.itch.io/hot-dog-planet',
    exe: 'https://github.com/yobisaboy/HotDogPlanet',
    unity: 'https://github.com/yobisaboy/HotDogPlanet/tree/main/project', 
    demo:'https://youtu.be/4BP1nk-JLbQ',
    details:'https://github.com/yobisaboy/HotDogPlanet/blob/main/README.md' 
  },
];

export default games;
