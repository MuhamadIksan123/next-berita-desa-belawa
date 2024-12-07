import data from '../../DATA.json';

export const getNewsResponse = (page, limit, query = '') => {
  return new Promise((resolve) => {
    // Filter data berdasarkan query jika ada
    const filteredData = query
      ? data.filter(
          (item) => item.judul.toLowerCase().includes(query.toLowerCase()) // Contoh pencarian berdasarkan title
        )
      : data;

    const startIndex = (page - 1) * limit; // Indeks awal
    const endIndex = startIndex + limit; // Indeks akhir
    const slicedData = filteredData.slice(startIndex, endIndex); // Data sesuai batas halaman
    const totalData = filteredData.length; // Total jumlah data yang sesuai pencarian
    const totalPages = Math.ceil(totalData / limit); // Hitung jumlah halaman

    resolve({
      data: slicedData,
      totalData: totalData,
      totalPages: totalPages,
    });
  });
};

export const getNewsById = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((news) => news.id === id); // Cari data berdasarkan id
    if (item) {
      resolve(item); // Jika ditemukan, kembalikan data
    } else {
      reject(new Error('Data not found')); // Jika tidak ditemukan, kembalikan error
    }
  });
};
