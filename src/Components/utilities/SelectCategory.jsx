import { useRouter } from 'next/navigation';
import React from 'react';

const SelectCategory = ({ selectedCategory, setSelectedCategory }) => {
  const router = useRouter();
  const categories = [
    { value: '', label: 'All' },
    { value: 'KKM', label: 'KKM' },
    { value: 'Potensi', label: 'Potensi' },
    { value: 'Pemerintahan Desa', label: 'Pemerintahan Desa' },
    { value: 'Layanan', label: 'Layanan' },
    { value: 'reset', label: 'Reset' }, // Tambahkan opsi reset
  ];

  const handleSelectChange = (event) => {
    event.preventDefault();
    const value = event.target.value;

    if (value === 'reset') {
      console.log('Resetting category...'); // Debugging log
      setSelectedCategory(''); // Reset kategori
      router.push('/kategori'); // Kembali ke halaman populer
    } else {
      console.log('Setting category to:', value); // Debugging log
      setSelectedCategory(value); // Mengubah kategori yang dipilih
    }
  };

  const handleTabClick = (category) => {
    setSelectedCategory(category); // Mengubah kategori berdasarkan tab yang dipilih
  };

  return (
    <div className="my-4 lg:my-10">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          className="w-full rounded-lg border border-gray-400 text-center py-2"
          onChange={handleSelectChange}
          value={selectedCategory} // Mengatur value untuk dropdown
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:flex sm:justify-center">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {categories.map((cat) => (
              <a
                key={cat.value}
                href="#"
                className={`inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium ${
                  selectedCategory === cat.value
                    ? 'border-sky-500 text-sky-600'
                    : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
                onClick={(e) => {
                  e.preventDefault(); // Mencegah reload halaman
                  handleTabClick(cat.value); // Mengubah kategori berdasarkan tab yang dipilih
                }}
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
