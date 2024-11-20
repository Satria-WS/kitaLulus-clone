import { Typography } from "@mui/material";
import heroImage from "../../assets/hero.svg";

import { OutlinedInput ,TextField, Stack, Autocomplete } from "@mui/material";
import "./Hero.css";

const Hero = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
  ];
  return (
    <>
      <div className="container">
        <div className="grid  grid-cols-2 max-lg:grid-cols-1 place-items-center  py-28 ">
          {/* col-1 */}
          <div className="self-start p-8">
            <Typography
              sx={{ fontWeight: "600", fontFamily: "Poppins",   }}
              // variant="h3"
            >
             <span className="text-[clamp(16px,5vw,48px)]">Halo Sobat KitaLulus, Ada yang bisa kami bantu?</span>

            </Typography>

            {/* input */}
            <Stack spacing={2} sx={{ width: "100%"  , padding: "2rem 0" }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  // <OutlinedInput 
                  //   {...params}  // Spread all necessary props from Autocomplete to OutlinedInput
                  //   placeholder="Please enter text" 
                  // />

                  <TextField className=" max-w-[29rem] max-lg:max-w-full"  {...params} label="Ketik kata kunci" variant="outlined" /> 
                )}
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
