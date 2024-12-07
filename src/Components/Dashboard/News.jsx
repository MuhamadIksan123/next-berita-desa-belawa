import Image from 'next/image';
import Link from 'next/link';

const News = ({ berita }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
      {berita.map((data, index) => {
        return (
          <Link
            href={`/berita/${data.id}`}
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200 transition shadow-lg mb-2 group"
          >
            <Image
              alt=""
              src={data.foto}
              width={350}
              height={350}
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 group-hover:bg-sky-500">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500 group-hover:text-color-accent"
              >
                {data.waktu}
              </time>

              <h3 className="mt-0.5 font-semibold text-lg text-color-secondary line-clamp-1 group-hover:text-color-accent">
                {data.judul}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify group-hover:text-color-accent">
                {data.deskripsi}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default News;
