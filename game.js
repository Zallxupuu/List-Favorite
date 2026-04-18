const gameList = [
  {
    nama: "GTA San Andreas",
    rilis: 2004,
    Platform: ["Mobile", "Pc/Computer", "PlayStation", "Xbox"],
    Keterangan: {
      Developer: "Rockstar North",
      genre: ["Open world", "action adventure"],
    },
    multiplayer: true,
  },
  {
    nama: "Fre Fire",
    rilis: 2017,
    Platform: ["Mobile", "Pc/Computer"],
    Keterangan: { Developer: "Garena", genre: ["Battle Royale", "action"] },
    multiplayer: true,
  },
  {
    nama: "Def Jam",
    rilis: 2004,
    Platform: ["PlayStation", "Game Cube", "Xbox"],
    Keterangan: { Developer: "EA Games", genre: ["Fighting"] },
    multiplayer: true,
  },
  {
    nama: "Minecraft",
    rilis: 2011,
    Platform: ["Mobile", "Pc/Computer", "PlayStation", "Xbox"],
    Keterangan: {
      Developer: "Mojang Studio",
      genre: ["Open world", "Sandbox", "Survivalz4"],
    },
    multiplayer: true,
  },
  {
    nama: "Black",
    rilis: 2006,
    Platform: ["PlayStation", "Xbox"],
    Keterangan: {
      Developer: "Criterion Games",
      genre: ["First-Person Shooter"],
    },
    multiplayer: false,
  },
  {
    nama: "Roblox",
    rilis: 2006,
    Platform: ["Mobile", "Pc/Computer", "Xbox", "Playstation"],
    Keterangan: {
      Developer: "Roblox Corporation",
      genre: ["Minigames", "Game creation system"],
    },
    multiplayer: true,
  },
  {
    nama: "NFS: Most Wanted",
    rilis: 2005,
    Platform: ["Pc", "PlayStation", "Xbox", "Gameboy"],
    Keterangan: { Developer: "EA Games", genre: ["Open world", "Racing"] },
    multiplayer: true,
  },
  {
    nama: "Schedule 1",
    rilis: 2025,
    Platform: ["Pc/Computer"],
    Keterangan: {
      Developer: "TVGS",
      genre: ["Open world", "Economic Simulation", "crime", "comedy"],
    },
    multiplayer: true,
  },
  {
    nama: "Growtopia",
    rilis: 2012,
    Platform: ["Mobile", "Pc/Computer"],
    Keterangan: { Developer: "Ubisoft", genre: ["Sandbox", "Adventure"] },
    multiplayer: true,
  },
  {
    nama: "Mortal Kombat",
    rilis: 1992,
    Platform: ["Mobile", "Pc/Computer", "PlayStation", "Xbox"],
    Keterangan: {
      Developer: "Midway Games",
      genre: ["Fighting", "action adventure"],
    },
    multiplayer: true,
  },
];

// Menampilkan seluruh data Game
const allShow = () => {
  console.log("List Game Terfavorite : ");
  gameList.forEach((items) => {
    console.log("");
    console.log(`Nama Game  : ${items.nama}`);
    console.log(`Tahun Rilis    : ${items.rilis}`);
    console.log(`Platform   : ${items.Platform}`);
    console.log(`Developer : ${items.Keterangan.Developer}`);
    console.log(`Genre  : ${items.Keterangan.genre}`);
    console.log(
      `Mode   : ${items.multiplayer ? "Multiplayer" : "Singleplayer"}`,
    );
  });
};
allShow();

//Filter sesuai tahun rilis yang ditentukan
const filterMode = gameList.filter((items) => {
  return items.multiplayer === false;
});
console.log(filterMode);

// Find nama game yang diinginkan
const findGame = gameList.find((item) => item.nama === "Minecraft");
console.log(findGame);
