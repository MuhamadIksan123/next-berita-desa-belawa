import TeksKontak from '@/Components/Kontak/TeksKontak';

const Page = () => {
    return (
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 mt-8">
            <TeksKontak />

            <div className="rounded-lg bg-white p-8 shadow-lg border border-gray-200 lg:col-span-3 lg:p-12 ">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="nama">
                    Nama
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Nama"
                    type="text"
                    id="nama"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="no_hp">
                      No Hp
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="No Handphone"
                      type="tel"
                      id="no_hp"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="perihal">
                    Perihal
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Perihal"
                    type="text"
                    id="perihal"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="pesan">
                    Isi Pesan
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Isi Pesan"
                    rows="5"
                    id="pesan"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-color-primary px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Kirim!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Page;