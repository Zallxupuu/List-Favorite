const laptopList = [
  {
    nama: "Macbook air m4",
    harga: 29000000,
    Storage: ["16gb/256gb", "16gb/512gb", "24gb/512gb"],
    keterangan: { cpu: "Chip M4", brand: "Apple" },
    dimiliki: false,
  },
  {
    nama: "Asus X441MA",
    harga: 1800000,
    Storage: ["4gb/1tb", "6gb/512gb"],
    keterangan: { cpu: "Intel Celeron N4020", brand: "Asus" },
    dimiliki: true,
  },
  {
    nama: "Thinkpad T14",
    harga: 26000000,
    Storage: ["16gb/512gb", "16gb/1tb", "32gb/512gb"],
    keterangan: { cpu: "Intel i5 Ultra", brand: "Lenovo" },
    dimiliki: true,
  },
  {
    nama: "HP Victus 15",
    harga: 15000000,
    Storage: ["16gb/512gb", "16gb/2tb", "32gb/512gb"],
    keterangan: { cpu: "Ryzen 7", brand: "HP" },
    dimiliki: false,
  },
  {
    nama: "Axioo hype 5",
    harga: 7000000,
    Storage: ["16gb/256gb", "16gb/512gb", "32/256gb"],
    keterangan: { cpu: "Ryzen 5", brand: "Axioo" },
    dimiliki: true,
  },
  {
    nama: "HP omnibook 5",
    harga: 14000000,
    Storage: ["16gb/256gb", "16gb/512gb"],
    keterangan: { cpu: "Intel i5", brand: "HP" },
    dimiliki: false,
  },
  {
    nama: "Asus ROG Zephyrus G14",
    harga: 45000000,
    Storage: ['32gb/512gb', '32gb/1tb'],
    keterangan: { cpu: "Ryzen 9", brand: "Asus" },
    dimiliki: false,
  },
  {
    nama: "Macbook air M1",
    harga: 15000000,
    Storage: ['8gb/256gb', '8gb/512gb'],
    keterangan: { cpu: "Chip M1", brand: "Apple" },
    dimiliki: true,
  },
  {
    nama: "Thinkpad P1",
    harga: 49000000,
    Storage: ["32gb/512gb", "32gb/1tb"],
    keterangan: { cpu: "Intel i7 Ultra", brand: "Lenovo" },
    dimiliki: false,
  },
  {
    nama: "Acer Aspire lite 14",
    harga: 7500000,
    Storage: ["8gb/256gb", "8gb/512gb"],
    keterangan: { cpu: "Intel i3", brand: "Acer" },
    dimiliki: false,
  },
];

//Menampilkan seluruh data
const Laptops = () =>{
    console.log('   === List Laptop ===    ')
    laptopList.forEach((items)=>{
        console.log(`Nama Laptop   : ${items.nama}`);
        console.log(`Harga Laptop  : Rp.${items.harga}`);
        console.log(`Spefisikasi   : \n   Storage    : ${items.Storage.join(' | ')} \n   Proccesor  : ${items.keterangan.cpu} \n   Brand      : ${items.keterangan.brand}`);
        console.log(`Dimiliki      : ${items.dimiliki ? 'tidak' : 'iya'}`);
        console.log('')
    })
}
Laptops();

// Filter Harga laptop diatas 20jt
const filterHarga = laptopList.filter((item)=>{
    return item.harga > 20000000;
})
console.log(filterHarga)

// Find laptop sesuai dengan namanya
const findLaptop = laptopList.find((item)=> item.nama === 'Macbook air M1')
console.log(findLaptop)