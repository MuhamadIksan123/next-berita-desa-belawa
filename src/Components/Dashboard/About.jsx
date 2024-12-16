const About = () => {
    return (
      <section className="bg-slate-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="font-bold sm:text-2xl lg:text-4xl text-color-dark">
            Tentang Desa Belawa
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.8582285382!2d108.56964327366417!3d-6.832632001263672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1b1430d2ad25%3A0xc48e2d0e99cb8885!2sBelawa%2C%20Kec.%20Lemahabang%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1729175481319!5m2!1sid!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map w-full h-96"
              ></iframe>
            </div>

            <div className="">
              <article className="space-y-4 text-gray-600">
                <p className="text-justify text-sm/relaxed sm:text-md/relaxed">
                  Belawa adalah desa di kecamatan Lemahabang, Cirebon, Jawa
                  Barat, Indonesia. Desa Belawa adalah salah satu desa yang
                  berada di atas perbukitan ciwado, dikelilingi ngarai yang
                  indah, dengan ketinggian 171 mdpl, merupakan salah satu
                  wilayah pertanian penghasil buah mangga dan pisang. Selain itu
                  Desa Belawa memiliki potensi dibidang pariwisata, antara lain
                  wisata alam, wisata Konservasi dan edukasi kura kura langka,
                  salah satu hewan purba asli Cirebon yang menjadi salah satu
                  destinasi Pariwisata unggulan di Kabupaten Cirebon Provinsi
                  Jawa Barat.
                </p>

                <p className="text-justify text-sm/relaxed sm:text-md/relaxed">
                  Konon nenek moyang orang Cirebon berasal dari wilayah tersebut
                  dengan ditemukannya salah satu peninggalan artepak prasejarah,
                  disalah satu area perkebunan terdapat sebuah kubur batu
                  (Spiti) yang telah diteliti oleh tim Arkeolog dari Balai
                  Arkeologi Bandung (Balarbandung) pada akhir tahun 2013 yang
                  dipimpin seorang ahli yaitu Lutfi Yondri, dimana menurut hasil
                  uji karbon pada lapisan tanah terdapat lapukan
                  perunggu,sehingga diperkirakan nenek moyang orang Cirebon
                  hidup pada era zaman perunggu 5.000 - 1.000 SM. Selain itu
                  masih terdapat berbagai cerita menarik tentang Desa Belawa.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;