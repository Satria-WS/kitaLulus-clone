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
        <div className="grid  grid-cols-2 place-items-center  py-28 ">
          {/* col-1 */}
          <div>
            <Typography
              sx={{ fontWeight: "600", fontFamily: "Poppins" }}
              variant="h3"
            >
              Halo Sobat KitaLulus, Ada yang bisa kami bantu?
            </Typography>

            {/* input */}
            <Stack spacing={2} sx={{ width: "100%" , padding: "2rem 0" }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  // <OutlinedInput 
                  //   {...params}  // Spread all necessary props from Autocomplete to OutlinedInput
                  //   placeholder="Please enter text" 
                  // />

                  <TextField {...params} label="Ketik kata kunci" variant="outlined" /> 
                )}
              />

            </Stack>
          </div>
          {/* col-2 */}
          <div>
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
