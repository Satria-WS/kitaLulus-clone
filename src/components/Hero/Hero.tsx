import { Typography } from "@mui/material";
import heroImage from "../../assets/hero.svg";
import { OutlinedInput, TextField, Stack, Autocomplete } from "@mui/material";
import "./Hero.css";

const Hero = () => {
  const topQuestion = [
    { title: "Bagaimana cara mendaftar akun KitaLulus", link: "https://www.kitalulus.com/daftar" },
    { title: "Bagaimana cara melihat lowongan kerja yang sudah dilamar?", link: "https://www.kitalulus.com/lowongan" },
    { title: "Bagaimana cara membuat CV untuk freshgraduate?", link: "https://www.kitalulus.com/cv" },
  ];

  const handleOptionSelect = (event:any, value:any) => {
    // Find the selected item and open the link in a new tab
    const selectedOption = topQuestion.find(option => option.title === value);
    if (selectedOption) {
      window.open(selectedOption.link, "_blank"); // Open in a new tab
    }
  };

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 place-items-center py-28 ">
          {/* col-1 */}
          <div className="self-start p-8">
            <Typography
              sx={{ fontWeight: "600", fontFamily: "Poppins" }}
            >
              <span className="text-[clamp(16px,5vw,48px)]">Halo Sobat KitaLulus, Ada yang bisa kami bantu?</span>
            </Typography>

            {/* input */}
            <Stack spacing={2} sx={{ width: "100%", padding: "2rem 0" }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={topQuestion.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    className="max-w-[29rem] max-lg:max-w-full"
                    {...params}
                    label="Ketik kata kunci"
                    variant="outlined"
                  />
                )}
                onChange={handleOptionSelect} // Trigger the handler when an option is selected
              />
            </Stack>
          </div>

          {/* col-2 */}
          <div className="w-[clamp(300px , 50vw,1200px)]">
            <img className="w-full" src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
