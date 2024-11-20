import logo from "../../assets/logo.png";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Header = () => {
  const menuList = [
    {
      name: "Info Loker",
      link: "https://www.kitalulus.com/?utm_source=seo&utm_medium=web&utm_campaign=navbar",
    },
    {
      name: "Rekrutmen Premium",
      link: "https://id.kitalulus.com/premium-recruitment?utm_source=SEONV&utm_medium=navbar&utm_campaign=Premium-Recruitment",
    },
    {
      name: "Blog",
      link: "https://www.kitalulus.com/blog/",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center font-[Poppins] py-1">
          {/* bar hamburger */}
          <div className="hidden max-lg:block max-sm:px-10 max-[443px]:order-2 cursor-pointer ">
            <DensityMediumIcon/>
          </div>
          {/* logo */}
          <div className="max-lg:ml-auto max-lg:mr-auto  ">
            <img className="max-w-[149px]" src={logo} alt="logo" />
          </div>
          {/* menu */}
          <div className="flex items-center justify-center max-lg:hidden">
            <ul className="flex flex-row space-x-10">
              {menuList.map((item, index) => (
                <>
                  <li
                    key={index}
                    className="hover:bg-[rgba(51,80,172,0.1)] font-light hover:font-semibold duration-300 cursor-pointer py-2 px-4 "
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                </>
              ))}
            </ul>
            <button className="pl-10">
              <a
                href="https://id.kitalulus.com/pasang-loker"
                className="bg-[darkorange] hover:bg-black duration-300 rounded-lg py-3 px-6 "
              >
                <span className="text-white text-lg font-semibold">
                  Pasang Loker
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
