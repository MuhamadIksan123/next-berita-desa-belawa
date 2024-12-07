import News from './News';

const HeaderNews = ({ berita }) => {
  return (
    <section id="portfolio" className="pt-28 pb-16 bg-gray-100">
      <div className="w-full px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="font-bold text-color-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
            Rekomendasi Berita
          </h2>
        </div>
      </div>

      <News berita={berita} />
    </section>
  );
};

export default HeaderNews;
