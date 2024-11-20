import { Typography } from "@mui/material";
// import icon
import portfolio from "../../assets/topic/Portfolio.png";
import account from "../../assets/topic/Account.png";
import star from "../../assets/topic/Frame.png";
import alert from "../../assets/topic/Fraud-alert.png";
import guide from "../../assets/topic/Guide.png";

const Topic = () => {
  const iconList = [
    {
      icon: portfolio,
      title: "Ingin Mendapatkan Pekerjaan",
    },
    {
      icon: account,
      title: "Masalah Akun",
    },
    {
      icon: alert,
      title: "Lowongan Terindikasi Penipuan",
    },
    {
      icon: star,
      title: "Cara Menggunakan Aplikasi",
    },
    {
      icon: guide,
      title: "KitaLulus Plus",
    },
  ];
  return (
    <>
      <div className="container">
        <div className=" font-[Poppins] max-sm:px-3 ">
          <Typography
            sx={{ fontWeight: "600", fontFamily: "Poppins" }}
            // variant="h3"
          >
            <p className="text-[clamp(16px,5vw,48px)] max-lg:text-center ">
              Pilih topik sesuai kendalamu
            </p>
          </Typography>
          <div className="py-12">
            <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 place-items-center">
              {iconList.map((item, index) => (
                <>
                  <li key={index} className="w-full h-full">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://id.kitalulus.com/help/ingin-mendapatkan-pekerjaan"
                      className="flex hover:translate-y-[-10px] duration-300 items-center hover:underline w-full h-full border  border-teal-400 rounded-xl  px-4 py-8 space-x-3 cursor-pointer "
                    >
                      <img
                        className="max-w-[50px] "
                        src={item.icon}
                        alt="portfolio"
                      />
                      <p className="text-lg font-semibold">{item.title}</p>
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topic;
