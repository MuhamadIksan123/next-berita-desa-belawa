'use client';

import { Globe, GoogleDriveLogo, InstagramLogo } from '@phosphor-icons/react';
import Link from 'next/link';

const Detail = ({ news }) => {
  const iconMapping = {
    InstagramLogo: InstagramLogo,
    Globe: Globe,
    GoogleDriveLogo: GoogleDriveLogo,
  };
  
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-xl mt-4 sm:mt-0 font-bold lg:text-4xl">
            Detail Informasi
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
              alt=""
              src={news.foto}
              className="object-cover shadow-xl border border-color-dark"
            />
          </div>

          <div className="sm:pb-28">
            <article className="space-y-4 text-gray-600">
              <div className="flow-root">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 py-3 lg:grid-cols-[80px_1fr]">
                    <dt className="flex font-medium text-gray-900 lg:justify-between gap-2 pr-2">
                      <span>Judul</span>
                      <span>:</span>
                    </dt>
                    <dd className="text-gray-700">{news.judul}</dd>
                  </div>

                  <div className="grid grid-cols-1 py-3 lg:grid-cols-[80px_1fr]">
                    <dt className="flex font-medium text-gray-900 lg:justify-between gap-2 pr-2">
                      <span>Kategori</span>
                      <span>:</span>
                    </dt>
                    <dd className="text-gray-700">{news.kategori}</dd>
                  </div>

                  <div className="grid grid-cols-1 py-3 lg:grid-cols-[80px_1fr]">
                    <dt className="flex font-medium text-gray-900 lg:justify-between gap-2 pr-2">
                      <span>Waktu</span>
                      <span>:</span>
                    </dt>
                    <dd className="text-gray-700">{news.waktu}</dd>
                  </div>

                  <div className="grid grid-cols-1 py-3 lg:grid-cols-[80px_1fr]">
                    <dt className="flex font-medium text-gray-900 lg:justify-between gap-2 pr-2">
                      <span>Media</span>
                      <span>:</span>
                    </dt>
                    <dd className="flex text-gray-700 gap-1">
                      {news.media.map((data, index) => {
                        const IconComponent = iconMapping[data.icon]; // Get the corresponding icon component
                        return (
                          <Link key={index} href={data.link}>
                            <IconComponent size={24} />
                          </Link>
                        );
                      })}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 py-3 lg:grid-cols-[80px_1fr]">
                    <dt className="flex font-medium text-gray-900 lg:justify-between gap-2 pr-2">
                      <span>Deskripsi</span>
                      <span>:</span>
                    </dt>
                    <dd className="text-gray-700 text-justify">
                      {news.deskripsi}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
