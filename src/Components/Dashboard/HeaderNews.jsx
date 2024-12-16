import News from './News';

const HeaderNews = ({ berita }) => {
  return (
    <section id="portfolio" className="bg-gray-100">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="font-bold text-color-dark text-xl sm:text-2xl lg:text-4xl">
            Rekomendasi Berita
          </h2>
        </div>
      </div>

      <News berita={berita} />
    </section>
  );
};

export default HeaderNews;
