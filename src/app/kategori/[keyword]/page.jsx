'use client';

import News from '@/Components/Dashboard/News';
import InputSearch from '@/Components/utilities/InputSearch';
import Pagination from '@/Components/utilities/Pagination';
import { getNewsResponse } from '@/libs/api-libs';
import { useEffect, useState } from 'react';

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // State untuk menyimpan total halaman

  const fetchData = async () => {
    const newsBelawa = await getNewsResponse(
      page,
      12,
      decodedKeyword
    ); // Kirim keyword sebagai query ke fungsi
    setNews(newsBelawa.data);
    setTotalPages(newsBelawa.totalPages); // Simpan total halaman
  };

  useEffect(() => {
    fetchData();
  }, [page, decodedKeyword]); // Tambahkan decodedKeyword sebagai dependensi

  return (
    <section className="bg-gray-100 px-6 py-24 lg:px-8">
      <InputSearch />

      {/* <SelectCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      /> */}

      <News berita={news} />
      <Pagination page={page} lastPage={totalPages} setPage={setPage} />
    </section>
  );
};

export default Page;
