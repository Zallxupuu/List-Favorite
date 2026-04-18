const animeList = [
  {
    judul: "Tokyo ghoul",
    totalEps: 12,
    genre: ["horror", "fantasy", "action", "suspense"],
    keterangan: { studio: "studio perriot", source: "manga" },
    finished: true,
  },
  {
    judul: "Death note",
    totalEps: 37,
    genre: ["supernatural", "suspense"],
    keterangan: { studio: "madhouse", source: "manga" },
    finished: true,
  },
  {
    judul: "Ateliar of witch hat",
    totalEps: 13,
    genre: ["fantasy", "action"],
    keterangan: { studio: "bug films", source: "manga" },
    finished: true,
  },
  {
    judul: "Sousou no Frieren",
    totalEps: 28,
    genre: ["adventure", "award winning", "fantasy", "drama"],
    keterangan: { studio: "madhouse", source: "manga" },
    finished: true,
  },
  {
    judul: "Kimi no na wa",
    totalEps: 1,
    genre: ["award winning", "drama"],
    keterangan: { studio: "comix wave films", source: "original" },
    finished: true,
  },
  {
    judul: "Bocchi the rock",
    totalEps: 12,
    genre: ["comedy"],
    keterangan: { studio: "cloverworks", source: "4-koma manga" },
    finished: true,
  },
  {
    judul: "Violet evergarden",
    totalEps: 13,
    genre: ["Drama"],
    keterangan: { studio: "Kyoto animation", source: "light novel" },
    finished: true,
  },
  {
    judul: "Shigatsu wa kimi no uso",
    totalEps: 22,
    genre: ["drama", "romance"],
    keterangan: { studio: "A-1 pictures", source: "manga" },
    finished: true,
  },
  {
    judul: "Mob psycho 100",
    totalEps: 12,
    genre: ["action", "comedy", "supernatural"],
    keterangan: { studio: "bones", source: "web manga" },
    finished: true,
  },
  {
    judul: "One Punch Man",
    totalEps: 12,
    genre: ["action", "comedy"],
    keterangan: { studio: "madhouse", source: "web manga" },
    finished: true,
  },
];

// Menampilkan sleuruh list Anime favorite
const Animes = () => {
  console.log("My anime favorite : ");
  animeList.forEach((items) => {
    console.log("\n");
    console.log(
      `Judul : ${items.judul} \n Episodes : ${items.totalEps} \n Genre : ${items.genre.join(", ")} \n Keterangan : \n   Studio: ${items.keterangan.studio} \n   Source : ${items.keterangan.source} \n Status : ${items.finished ? "belum selesai" : "selesai"}`,
    );
  });
};

Animes();

// Filter anime yang emiliki 12 episode
const filterEpisode = animeList.filter((items) => {
  return items.totalEps === 12;
});
console.log(filterEpisode);

console.log("\n");

// find judul anime tertentu
const findAnime = animeList.find((item) => item.judul === "Tokyo ghoul");
console.log(findAnime);
