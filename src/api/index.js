import axios from "axios";

const apiUrl = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQBYvKtSC0lwZRRniGFT-SU3jXT3sN8o02MWBktNRze_Z9U-L5iiU_rPDqQKlMRt9tpSRUHXIQCnBzgcht0Py2conkj-2cS6-IQYJvpc1PSf38LQQNf2ooZlVdtpKzgP88w-MPeZk2YjhOdQUerrr_yg7p7-WfcWirblqhXPkL-zrvMJ0xoEkl_1YawTpcc1z6M-tgXLpRRSHl4BlL9IizK1j8NIZKXNIxSEFA7hN0fNgfzgDZAOv9ZBjWl4Owcw15bnNdgV-KTEPKcKFzrKhiU",
    Host: "api.spotify.com",
  },
});

export { apiUrl };
