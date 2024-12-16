import About from '@/Components/Dashboard/About';
import HeaderNews from '@/Components/Dashboard/HeaderNews';
import Hero from '@/Components/Dashboard/Hero';
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
