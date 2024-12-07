const Hero = () => {
  return (
    <section className="relative bg-[url(https://plus.unsplash.com/premium_photo-1711208800062-4e42d530a996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHR1cnRsZXxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/20 sm:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex h-screen items-center justify-center lg:px-8">
        <div className="max-w-xl text-center mt-8">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-center text-color-dark">
            Desa Belawa
            <strong className="block font-extrabold text-rose-500 text-center">
              Lemahabang Cirebon
            </strong>
          </h1>

          <p className="mt-4 max-w-xl text-color-dark sm:text-xl/relaxed text-center">
            Kecamatan Lemahabang Kabupaten Cirebon Provinsi Jawa Barat
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
