import Detail from '@/Components/Detail';
import { getNewsById } from '@/libs/api-libs';

const Page = async ({ params: { id } }) => {
  const news = await getNewsById(id);

  return <Detail news={news} />;
};

export default Page;
