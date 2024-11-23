import logo from "../../assets/logo.png";

const Footer = () => {
  const menuData = [
    {
      title: "KitaLulus",
      items: [
        { label: "Beranda", href: "#" },
        { label: "Info Loker", href: "#" },
        { label: "Pasang Loker", href: "#" },
        { label: "Rekrutmen", href: "#" },
        { label: "Try Out CPNS", href: "#" },
        { label: "CV Builder", href: "#" },
        { label: "Template CV Gratis", href: "#" },
        { label: "Asuransi Kesehatan ", href: "#" },
      ],
    },
    {
      title: "Perusahaan",
      items: [
        { label: "Tentang Kami", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat & Ketentuan", href: "#" },
        { label: "Kerjasama", href: "#" },
      ],
    },
    {
      title: "Blog",
      items: [
        { label: "Seputar Kerja", href: "#" },
        { label: "Bisnis", href: "#" },
        { label: "Info CPNS & PPPK", href: "#" },
        { label: "Gaya Hidup", href: "#" },
        { label: "Investasi", href: "#" },
        { label: "Libur Nasional", href: "#" },
        { label: "Job Description", href: "#" },
      ],
    },
    {
      title: "Ikuti Kami",
      items: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Twitter", href: "#" },
        { label: "Telegram", href: "#" },
        { label: "Tiktok", href: "#" },
        { label: "Youtube", href: "#" },
      ],
    },
  ];

  return (
    <>
      <div className=" bg-[#f9fafb] my-20 px-12 py-10">
        {/* parent */}
        <div className="grid grid-cols-5 place-items-start gap-10">
          {/* logo */}
          <div className="space-y-5">
            <img className="max-w-[150px]" src={logo} alt="logo" />
            <p className="text-gray-500 text-base">
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
                    <a href={item.href} target="_blank" rel="noreferrer"  >{item.label}</a>
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
