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
import "./Faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // interface
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

  // Toggle the card open/close state based on index
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // List of items for card 1
  const listItems: listItems[] = [
    {
      text: "Buat akun menggunakan alamat email yang aktif dan lengkapi profil.",
    },
    {
      text: "Setelah itu, cari loker yang kamu inginkan di kolom pencarian. Filter berdasarkan lokasi, nama perusahaan, sistem kerja, gaji, hingga tingkat pendidikan untuk memudahkan pencarianmu.",
    },
    { text: "Terakhir, lamar loker tersebut dan pantau status lamaranmu." },
  ];

  // List of card items for cards 2 - 6
  const cardItems: cardItems[] = [
    {
      header: "Bagaimana cara menghapus akun KitaLulus?",
      list: [
        {
          text: 'Buka menu "Akun"',
        },
        {
          text: 'Klik "Pengaturan dan Privasi',
        },
        {
          text: 'Pilih "Hapus Akun"',
        },
      ],
    },
    {
      header:
        "Mengapa saya tak kunjung mendapat panggilan interview, padahal saya sudah melamar banyak lowongan pekerjaan.",
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

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 10,
          gap: "1rem",
          backgroundColor:"#f9fafb"
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            padding: "1rem 3rem",
          }}
        >
          <p className="text-[clamp(16px,5vw,48px)] max-lg:text-center ">
            Yang Sering ditanyakan
          </p>
        </Typography>

        {/* Card 1 */}
        <Card
          sx={{
            maxWidth: "820px",
            width: "100%",
            mx: "auto",
            border: "1px solid #ced2da",
            boxShadow: "0 2px 5px grey",
            borderRadius: "15px",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <CardContent>
            <List>
              <ListItemButton
                onClick={() => handleClick(0)}
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  "&:active": { backgroundColor: "transparent" },
                }}
              >
                <ListItemText primary="Bagaimana cara saya mendapatkan pekerjaan di KitaLulus?" />
                {openIndex === 0 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openIndex === 0} timeout={240}>
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
                  <ListItem
                    component="li"
                    sx={{
                      paddingLeft: 0,
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    Pertama-tama, kamu bisa download aplikasi KitaLulus melalui{" "}
                    <a
                      href="https://idkita.page.link/cs"
                      className="text-[royalblue] underline"
                    >
                      <strong>Play Store atau App Store</strong>
                    </a>
                    . Kamu juga bisa mengaksesnya secara langsung melalui
                    website
                    <a
                      href="https://www.kitalulus.com/"
                      className="text-[royalblue] underline"
                    >
                      <strong>kitalulus.com</strong>
                    </a>
                    .
                  </ListItem>
                  {listItems.map((item, index) => (
                    <ListItem
                      key={index}
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

        {/* Cards 2 - 6 */}
        {cardItems.map((card, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "820px",
              width: "100%",
              mx: "auto",
              border: "1px solid #ced2da",
              boxShadow: "0 2px 5px grey",
              borderRadius: "15px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <CardContent>
              <List>
                <ListItemButton
                  onClick={() => handleClick(index + 1)}
                  sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    "&:active": { backgroundColor: "transparent" },
                  }}
                >
                  <ListItemText primary={card.header} />
                  {openIndex === index + 1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openIndex === index + 1} timeout={240}>
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
                    {card.list?.map((item, index) => (
                      <ListItem
                        key={index}
                        component="li"
                        sx={{
                          paddingLeft: 0,
                          fontSize: "1.2rem",
                          fontWeight: "500",
                          color: "grey",
                        }}
                      >
                        {item.text}
                        {/* {card.list.text} */}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Faq;
