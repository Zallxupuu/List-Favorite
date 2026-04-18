const musicList = [
  {
    judul: "back to firends",
    tahunRilis: 2024,
    genre: ["indie pop"],
    keterangan: { author: "sombr" },
    spotify: true,
  },
  {
    judul: "Say yes to heaven",
    tahunRilis: 2023,
    genre: ["indie pop", "folk pop", "melankolis"],
    keterangan: { author: "lana del rey" },
    spotify: true,
  },
  {
    judul: "traitor",
    tahunRilis: 2021,
    genre: ["indie pop", "guitor rock", "folk"],
    keterangan: { author: "Olivia rodrigo" },
    spotify: false,
  },
  {
    judul: "love in the dark",
    tahunRilis: 2015,
    genre: ["pop soul", "Orchestral pop", "Torch Ballad"],
    keterangan: { author: "Adele" },
    spotify: true,
  },
  {
    judul: "I wanna be yours",
    tahunRilis: 2013,
    genre: ["rock indie", "pop rock"],
    keterangan: { author: "Arctic Monkeys" },
    spotify: true,
  },
  {
    judul: "Hujan",
    tahunRilis: 2007,
    genre: ["pop rock"],
    keterangan: { author: "Utopia" },
    spotify: false,
  },
  {
    judul: "Rayuan perempuan gila",
    tahunRilis: 2023,
    genre: ["folk pop"],
    keterangan: { author: "Nadin amizah" },
    spotify: false,
  },
  {
    judul: "Karena Kamum",
    tahunRilis: 2011,
    genre: ["pop", "pop rock"],
    keterangan: { author: "Geisha" },
    spotify: true,
  },
  {
    judul: "Penyangkalan",
    tahunRilis: 2025,
    genre: ["metal"],
    keterangan: { author: "for Revenge" },
    spotify: true,
  },
  {
    judul: "back to firends",
    tahunRilis: 2010,
    genre: ["pop ballad", "pop"],
    keterangan: { author: "Astrid" },
    spotify: true,
  },
];

const allShow = musicList.forEach(() => {
  console.log("List musik : ");
  musicList.forEach((items) => {
    console.log('\n')
    console.log(`Judul lagu : ${items.judul} \nTahun rilis : ${items.tahunRilis} \nGenre : ${items.genre} \nAuthor : ${items.keterangan.author} \nTersedia di Spotify : ${items.spotify ? "tidak" : "iya"}`);
  });
});
// Menampilkan semua data
allShow;

// Filter yang memilki tahun rilis dibawah 2023
const filterTahunRilis = musicList.filter((items)=>{
    return items.tahunRilis < 2023;
})
console.log(filterTahunRilis);

// Find Musik sesuai judul
const findMusic = musicList.find((item)=> item.judul === 'Hujan')
console.log(findMusic)