import logo from "../../assets/logo.png";

const Footer = () => {
  const menuData = [
    {
      title: "KitaLulus",
      items: [
        { label: "Beranda", href: "https://id.kitalulus.com/" },
        { label: "Info Loker", href: "https://www.kitalulus.com/" },
        { label: "Pasang Loker", href: "https://id.kitalulus.com/pasang-loker" },
        { label: "Rekrutmen", href: "https://id.kitalulus.com/premium-recruitment" },
        { label: "Try Out CPNS", href: "https://id.kitalulus.com/try-out-cpns" },
        { label: "CV Builder", href: "https://id.kitalulus.com/cv-builder" },
        { label: "Template CV Gratis", href: "https://www.kitalulus.com/blog/template-cv-gratis/" },
        { label: "Asuransi Kesehatan ", href: "https://id.kitalulus.com/asuransi-kesehatan-karyawan" },
      ],
    },
    {
      title: "Perusahaan",
      items: [
        { label: "Tentang Kami", href: "https://id.kitalulus.com/tentang-kitalulus" },
        { label: "Kebijakan Privasi", href: "https://id.kitalulus.com/kebijakan-privasi" },
        { label: "Syarat & Ketentuan", href: "https://id.kitalulus.com/syarat-dan-ketentuan" },
        { label: "Kerjasama", href: "https://id.kitalulus.com/partner" },
      ],
    },
    {
      title: "Blog",
      items: [
        { label: "Seputar Kerja", href: "https://www.kitalulus.com/blog/seputar-kerja/" },
        { label: "Bisnis", href: "https://www.kitalulus.com/blog/bisnis/" },
        { label: "Info CPNS & PPPK", href: "https://www.kitalulus.com/blog/info-cpns/" },
        { label: "Gaya Hidup", href: "https://www.kitalulus.com/blog/gaya-hidup/" },
        { label: "Investasi", href: "https://www.kitalulus.com/blog/investasi/" },
        { label: "Libur Nasional", href: "https://id.kitalulus.com/libur-nasional" },
        { label: "Job Description", href: "https://www.kitalulus.com/blog/job-description/" },
      ],
    },
    {
      title: "Ikuti Kami",
      items: [
        { label: "Instagram", href: "https://www.instagram.com/kitalulus/#" },
        { label: "Facebook", href: "https://x.com/kitalulus" },
        { label: "Twitter", href: "https://x.com/kitalulus" },
        { label: "Telegram", href: "https://t.me/kitalulus" },
        { label: "Tiktok", href: "https://www.tiktok.com/@kitalulus" },
        { label: "Youtube", href: "https://www.youtube.com/c/KitaLulus" },
      ],
    },
  ];

  return (
    <>
      <div className=" bg-[#f9fafb] my-20 px-12 py-10">
        {/* parent */}
        <div className="grid grid-cols-5 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-start gap-10">
          {/* logo */}
          <div className="flex flex-col space-y-5 gap-3">
            <img className="max-w-[150px] max-sm:order-last" src={logo} alt="logo" />
            <p className="text-gray-500 text-base  ">
              KitaLulus adalah sebuah perusahaan rintisan dengan satu misi
              utama, yaitu meningkatkan kesejahteraan masyarakat dengan
              memaksimalkan kesempatan kerja setiap individu lewat akses
              terhadap pendidikan berbasis komunitas dan teknologi. Kami diawasi
              oleh KOMINFO
            </p>
          </div>

          {/* ul li */}
          {menuData.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold py-3">{section.title}</h3>
              <ul className=" space-y-3 text-gray-700 ">
                {section.items.map((item, itemIndex) => (
                  <li
                    className="text-xl decoration-orange-400 hover:underline hover:text-orange-400 duration-300 hover:font-semibold "
                    key={itemIndex}
                  >
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Footer;
