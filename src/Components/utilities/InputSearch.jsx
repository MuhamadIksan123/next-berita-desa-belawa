'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == '') return;

    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault();
      router.push(`/kategori/${keyword}`);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    router.push(`/kategori`);
  }

  return (
    <div className="mx-auto max-w-xl pb-10">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="search" className="sr-only">
            Cari
          </label>

          <input
            type="text"
            placeholder="Cari Informasi"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-md transition focus:border-white focus:outline-none focus:ring focus:ring-color-primary"
            onKeyDown={handleSearch}
            ref={searchRef}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="submit"
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-color-primary px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-color-primary sm:mt-0 sm:w-auto"
            onClick={handleSearch}
          >
            <span className="text-sm font-medium"> Cari </span>
          </button>

          <button
            type="submit"
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-500 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-rose-500 sm:mt-0 sm:w-auto"
            onClick={handleReset}
          >
            <span className="text-sm font-medium"> Reset </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputSearch;
