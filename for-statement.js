for (let counter = 1; counter <= 20; counter++) {
  console.log(counter);
}

let nama = {
  namaDepan: 'Rifky',
  namaBelakang: 'Ferdiansyah',
  namaPanggialan: 'woi',
};

for (let properti in nama) {
  console.log(`${properti} = ${nama[properti]}`);
}
