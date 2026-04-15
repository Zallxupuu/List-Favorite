let foodList = [
  {
    namaMakanan: "Bakso",
    harga: 7000,
    varian: ["urat", "biasa", "mercon"],
    kontak: { nomor: 628008008008, instagram: "@baksoenak" },
    freeongkir: true,
  },
  {
    namaMakanan: "Seblak",
    harga: 20000,
    varian: ["dumpling", "jamur", "kerupuk"],
    kontak: { nomor: 628008008007, instagram: "@seblakmantap" },
    freeongkir: true,
  },
  {
    namaMakanan: "mie ayam",
    harga: 6000,
    varian: ["mieso", "special", "jumbo"],
    kontak: { nomor: 628008008006, instagram: "@pusatmieayam" },
    freeongkir: true,
  },
  {
    namaMakanan: "martabak",
    harga: 18000,
    varian: ["coklat", "kacang", "keju"],
    kontak: { nomor: 628008008005, instagram: "@martabakmalam" },
    freeongkir: false,
  },
  {
    namaMakanan: "soto",
    harga: 7000,
    varian: ["ayam", "sapi", "betawi"],
    kontak: { nomor: 628008008004, instagram: "@sotojos" },
    freeongkir: true,
  },
  {
    namaMakanan: "telur",
    harga: 4000,
    varian: ["balado", "mata sapi", "dadar"],
    kontak: { nomor: 628008008003, instagram: "@telurfantasy" },
    freeongkir: false,
  },
  {
    namaMakanan: "permen",
    harga: 1000,
    varian: ["masnis", "asam", "pedas"],
    kontak: { nomor: 628008008002, instagram: "@permen" },
    freeongkir: false,
  },
  {
    namaMakanan: "mie",
    harga: 4500,
    varian: ["goreng", "kuah"],
    kontak: { nomor: 628008008001, instagram: "@mienyos" },
    freeongkir: true,
  },
  {
    namaMakanan: "sate",
    harga: 20000,
    varian: ["ayam", "sapi", "kelinci"],
    kontak: { nomor: 628008007008, instagram: "@satekang" },
    freeongkir: false,
  },
  {
    namaMakanan: "nasi goreng",
    harga: 15000,
    varian: ["special", "jumbo", "biasa"],
    kontak: { nomor: 628008006008, instagram: "@nasgorgoreng" },
    freeongkir: true,
  },
];

// Menampilkan semua data
const allShow = () => {
  console.log("List Makanan :");
  foodList.forEach((foods, index) => {
    console.log('\n')
    console.log(`${index + 1}. Makanan : ${foods.namaMakanan} \n    Harga : ${foods.harga} \n    Varian : ${foods.varian.join(', ')} \n    Instagram : ${foods.kontak.instagram} \n    Freeongkir : ${(foods.freeongkir ? 'tidak' : 'iya')}`);
  });
};
allShow();

// Filter yang memiliki harga dibawah 20.000
const filterHarga = foodList.filter((items) => {
  return items.harga < 20000;
});
// console.log(filterHarga);

// Find makanan
const findFood = foodList.find((food) => food.namaMakanan == "Bakso");
// console.log(findFood);
