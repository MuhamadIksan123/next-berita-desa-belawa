import About from '@/Components/Dashboard/About';
import Hero from '@/Components/Dashboard/Hero';
import HeaderNews from '@/Components/Dashboard/HeaderNews';
import { getNewsResponse } from '@/libs/api-libs';

const Page = async () => {
  const news = await getNewsResponse(1, 8);

  return (
    <div>
      <Hero />
      <About />
      {/* Berita Terikini */}
      <HeaderNews berita={news.data} />
    </div>
  );
};

export default Page;
