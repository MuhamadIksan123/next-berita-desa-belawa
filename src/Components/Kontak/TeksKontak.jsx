"use client"

import { WhatsappLogo } from '@phosphor-icons/react';
import Link from 'next/link';

const TeksKontak = () => {
    return (
      <div className="lg:col-span-2">
        <h3 className="text-2xl font-bold text-pink-600">Kontak Kami</h3>
        <div className="mt-4 font-semibold text-lg">
          <p>Balai Desa Belawa</p>
          <p>Jl. Belawa-Wangkelang Cirebon 45183</p>
          <p>Telp: (022)2536208</p>
          <p>E-mail: desabelawa22@gmail.com</p>
        </div>
        <p className="max-w-xl mt-4 text-justify">
          Untuk Respon Segera, silakan mengirim pesan melalui chat WhatsApp
          berikut (klik pada icon chat):
        </p>

        <div className="flex max-w-xl mt-2">
          <Link className="inline pr-2" href="/">
            <WhatsappLogo size={24} className="inline text-rose-500" />
          </Link>
          <p className="text-justify">
            Aduan untuk solusi atau pertolongan pertama bagi permasalahan yang
            bersifat kemanusian dan darurat.
          </p>
        </div>

        <div className="flex max-w-xl mt-2 items-center">
          <Link className="inline pr-2" href="/">
            <WhatsappLogo size={24} className="inline text-color-primary" />
          </Link>
          <p className="text-justify">
            Untuk Informasi Kependudukan dan Layanan Catatan Sipil.
          </p>
        </div>

        <p className="max-w-xl text-justify mt-4">
          Atau melalui form di samping ini:
        </p>
      </div>
    );
}

export default TeksKontak;