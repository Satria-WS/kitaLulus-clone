import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./Header.css";

const Header = () => {
  const drawerRef = useRef<HTMLDivElement | null>(null); // specific type (HTMLDivElement )
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

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

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // UseEffect
  // Close drawer if user clicks outside the drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false); // Close the drawer
      }

      // // when drawer is open , overflow will visible
      // if (drawerOpen) {
      //   document.body.style.overflow = "visible !important";
      // } else {
      //   // when drawer is close , scroll will auto
      //   document.body.style.overflow = "auto"
      // }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // UseEffect
  // Manage the scroll behavior when drawer is open or closed
  // this useEffct still not working  < BUG >
  useEffect(() => {
    if (drawerOpen) {
      // When drawer is open, set body overflow to visible
      // document.body.style.overflow = "visible";

      // When drawer is open, set body overflow to visible with !important
      document.body.style.setProperty("overflow", "visible", "important");
    } else {
      // When drawer is closed, reset overflow to auto
      // document.body.style.overflow = "auto";

      // When drawer is closed, reset overflow to auto with !important
      document.body.style.setProperty("overflow", "auto", "important");
    }
  }, [drawerOpen]);

  return (
    <>
      <div className="container sticky top-0 bg-white z-10">
        <div className="flex justify-between items-center font-[Poppins] py-1">
          {/* Hamburger Icon */}
          <div
            className="hidden max-lg:block max-sm:px-10 max-[443px]:order-2 cursor-pointer"
            onClick={toggleDrawer(true)}
          >
            <DensityMediumIcon />
          </div>
          {/* Logo */}
          <div className="max-lg:ml-auto max-lg:mr-auto">
            <a href="https://id.kitalulus.com/" target="_blank"  rel="noreferrer">
              <img className="max-w-[149px]" src={logo} alt="logo" />
            </a>
          </div>
          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="flex items-center justify-center max-lg:hidden">
            <ul className="flex flex-row space-x-10">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className="hover:bg-[rgba(51,80,172,0.1)] font-light hover:font-semibold duration-300 cursor-pointer py-2 px-4"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
            <button className="pl-10">
              <a
                href="https://id.kitalulus.com/pasang-loker"
                className="bg-[darkorange] hover:bg-black duration-300 rounded-lg py-3 px-6"
              >
                <span className="text-white text-lg font-semibold">
                  Pasang Loker
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="top"
        hideBackdrop={true}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
            position: "relative",
            top: "4rem",
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            padding: "16px",
          },
        }}
      >
        <Box
          ref={drawerRef}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Menu List */}
          <List>
            {menuList.map((item, index) => (
              <ListItem key={index} component="a" href={item.link}>
                <ListItemText
                  className="hover:bg-[rgba(51,80,172,0.1)] font-light cursor-pointer "
                  primary={item.name}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* Pasang Loker Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            href="https://id.kitalulus.com/pasang-loker"
            sx={{ marginTop: "16px" }}
          >
            Pasang Loker
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
