import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import "./Topic.css";

const Topic = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // interface
  interface cardItems {
    header: string;
    list?: {
      text: string;
    }[];
  }

  // interface
  interface listItems {
    text: string;
    linkText?: string;
    linkUrl?: string;
  }

  // Array of list cardItem for card 2 - 6
  const cardItems: cardItems[] = [
    {
      header:
        "Mengapa saya tak kunjung mendapat panggilan interview, padahal saya sudah melamar banyak lowongan pekerjaan.",
      list: [
        {
          text: "Buat akun menggunakan alamat email yang aktif dan lengkapi profil.",
        },
        {
          text: "Setelah itu, cari loker yang kamu inginkan di kolom pencarian. Filter berdasarkan lokasi, nama perusahaan, sistem kerja, gaji, hingga tingkat pendidikan untuk memudahkan pencarianmu.",
        },
        {
          text: "Terakhir, lamar loker tersebut dan pantau status lamaranmu.",
        },
      ],
    },
    {
      header: "Bagaimana cara menghapus akun KitaLulus?",
      list: [
        {
          text: "Tidak sesuai kualifikasi",
        },
        {
          text: "Perusahaan telah merekrut secara internal",
        },
        {
          text: "Tidak sesuai kualifikasi",
        },
        {
          text: "CV kurang menarik atau tidak terstruktur dengan baik",
        },
        {
          text: "Kesalahan dalam aplikasi online",
        },
        {
          text: "Kurangnya kelengkapan dokumen pendukung",
        },
        {
          text: "Akun media sosial terlalu kontroversial",
        },
        {
          text: "Kesalahan komunikasi selama proses seleksi awal",
        },
        {
          text: "Kandidat overqualified",
        },
      ],
    },
    {
      header:
        "Apakah akun KitaLulus yang sudah dihapus bisa digunakan kembali?",
      list: [
        {
          text: "Sayangnya, akun yang sudah dihapus tidak dapat dipulihkan. Kami sarankan untuk menggunakan email baru jika ingin membuat akun lagi.",
        },
        {
          text: "Jadi, jika kamu belum yakin untuk menghapus akun, kamu bisa memilih untuk keluar dari akun saja. Karena jika akun dihapus, nantinya kamu harus login menggunakan email yang baru.",
        },
      ],
    },
    {
      header:
        "Apa saja ciri-ciri penipuan lowongan kerja yang perlu diwaspadai?",
      list: [
        {
          text: " Persyaratan menjadi karyawan terlalu mudah dan umum",
        },
        {
          text: "  Menawarkan gaji yang menggiurkan",
        },
        {
          text: " Penggunaan bahasa tidak formal",
        },
        {
          text: "  Mencatut nama perusahaan besar",
        },
        {
          text: " Alamat kantor tidak jelas",
        },
        {
          text: "  Menggunakan email dan situs gratis",
        },
        {
          text: "  Mencantumkan semua nama kandidat yang diundang",
        },
        {
          text: " Lowongan dikirim dalam banyak halaman",
        },
        {
          text: "Menyebarkan lowongan melalui SMS atau WhatsApp",
        },
        {
          text: " Memungut biaya rekrutmen",
        },
      ],
    },
    {
      header: "Bagaimana cara melamar melalui Aplikasi KitaLulus?",
      list: [
        {
          text: " Install aplikasi KitaLulus di smartphone atau buka laman website kitalulus.com.",
        },
        {
          text: " Klik menu “Akun”, lalu login menggunakan akun Google.",
        },
        {
          text: " Lengkapi profilmu pada menu Akun.",
        },
        {
          text: "Pilih lokasi sesuai domisili dengan mengisi Provinsi, Kab/Kota, dan Kecamatan.",
        },
        {
          text: " Kembali ke halaman Karir. Di halaman Karir, kamu bisa menemukan berbagai lowongan kerja yang bisa kamu lamar.",
        },
        {
          text: " Bila kamu ingin mencari pekerjaan yang lebih spesifik, gulir ke tengah halaman. Kamu bisa klik icon jenis-jenis bisnis sesuai keahlianmu. Atau kamu bisa mencari secara manual di kolom pencarian.",
        },
        {
          text: " Jika kamu sudah menemukan lowongan yang dirasa cocok dan sesuai, langsung klik “Lamar” pada detail pekerjaan.",
        },
        {
          text: "Isi data diri dengan lengkap dan jujur, setelah itu langsung klik “Selanjutnya”.",
        },
        {
          text: "Lanjutkan proses pendaftaran dengan mengisi pendidikan dan pengalaman, klik “Selanjutnya.”",
        },
        {
          text: "Kirim lamaranmu. Kemudian, kamu akan diarahkan untuk mengirim lamaranmu ke WhatsApp tim rekrutmen perusahaan.",
        },
        {
          text: "Lamaran terkirim. Selanjutnya, kamu akan dihubungi tim rekrutmen via WhatsApp.",
        },
      ],
    },
  ];

  // Array of list items for card 1
  const listItems: listItems[] = [
    {
      text: "Buat akun menggunakan alamat email yang aktif dan lengkapi profil.",
    },
    {
      text: "Setelah itu, cari loker yang kamu inginkan di kolom pencarian. Filter berdasarkan lokasi, nama perusahaan, sistem kerja, gaji, hingga tingkat pendidikan untuk memudahkan pencarianmu.",
    },
    {
      text: "Terakhir, lamar loker tersebut dan pantau status lamaranmu.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 3,
          gap:"1rem"
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          Yang sering ditanyakan
        </Typography>

        {/* card one */}
        <Card
          sx={{
            maxWidth: "820px",
            width: "100%",
            mx: "auto",
            border: "1px solid #ced2da",
            boxShadow: "0 2px 5px grey",
            borderRadius: "15px",
            paddingTop: "1rem",
            paddingBottom:"1rem"
          }}
        >
          <CardContent>
            <List>
              <ListItemButton
                onClick={handleClick}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent", // Disable the hover color
                  },
                  "&:active": {
                    backgroundColor: "transparent", // Disable the active color
                  },
                }}
              >
                <ListItemText
                  sx={{}}
                  primary="Bagaimana cara saya mendapatkan pekerjaan di KitaLulus?"
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout={240}>
                <List
                  component="ol"
                  sx={{
                    listStyleType: "decimal",
                    pl: 3,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  {/* single */}
                  <ListItem
                    component="li"
                    sx={{
                      paddingLeft: 0,
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Pertama-tama, kamu bisa download aplikasi KitaLulus melalui
                    <a
                      href="https://idkita.page.link/cs"
                      className="text-[royalblue] underline"
                    >
                      <strong> Play Store atau App Store</strong>
                    </a>
                    . Kamu juga bisa mengaksesnya secara langsung melalui
                    website
                    <a
                      href="https://www.kitalulus.com/"
                      className="text-[royalblue] underline"
                    >
                      <strong> kitalulus.com </strong>
                    </a>
                    .
                  </ListItem>
                  {/* map */}
                  {listItems.map((item, index) => (
                    <ListItem
                      component="li"
                      sx={{
                        paddingLeft: 0,
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      {item.text}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </CardContent>
        </Card>

        {/* card 2 - 6  */}
        <Card
          sx={{
            maxWidth: "820px",
            width: "100%",
            mx: "auto",
            border: "1px solid #ced2da",
            boxShadow: "0 2px 5px grey",
            borderRadius: "15px",
            paddingTop: "1rem",
            paddingBottom:"1rem"
          }}
        >
          <CardContent>
            <List>
              <ListItemButton
                onClick={handleClick}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent", // Disable the hover color
                  },
                  "&:active": {
                    backgroundColor: "transparent", // Disable the active color
                  },
                }}
              >
                <ListItemText
                  sx={{}}
                  primary="Bagaimana cara saya mendapatkan pekerjaan di KitaLulus?"
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout={240}>
                <List
                  component="ol"
                  sx={{
                    listStyleType: "decimal",
                    pl: 3,
                    "& .MuiListItem-root": {
                      display: "list-item",
                    },
                  }}
                >
                  {/* single */}
                  <ListItem
                    component="li"
                    sx={{
                      paddingLeft: 0,
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Pertama-tama, kamu bisa download aplikasi KitaLulus melalui
                    <a
                      href="https://idkita.page.link/cs"
                      className="text-[royalblue] underline"
                    >
                      <strong> Play Store atau App Store</strong>
                    </a>
                    . Kamu juga bisa mengaksesnya secara langsung melalui
                    website
                    <a
                      href="https://www.kitalulus.com/"
                      className="text-[royalblue] underline"
                    >
                      <strong> kitalulus.com </strong>
                    </a>
                    .
                  </ListItem>
                  {/* map */}
                  {listItems.map((item, index) => (
                    <ListItem
                      component="li"
                      sx={{
                        paddingLeft: 0,
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "grey",
                      }}
                    >
                      {item.text}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default Topic;
