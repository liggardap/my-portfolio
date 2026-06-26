# Proposal: Web Monitoring System Database

**Dibuat oleh:** Liggar Prayoga
**Portfolio:** liggar.site
**Email:** liggardap@gmail.com
**WhatsApp:** +6285162750354
**Untuk:** ubaidi — projects.co.id
**Tanggal:** 06 Juni 2026

---

## Pemahaman Kami atas Kebutuhan Anda

Anda membutuhkan:

1. **Dashboard web real-time** yang menampilkan data dari database MySQL secara otomatis — data bergerak, layar update sendiri, tanpa perlu refresh manual
2. **Interface yang selesai** — desain yang sudah ada dilanjutkan dan disempurnakan hingga siap pakai
3. **Partner diskusi** — bukan hanya eksekutor, tapi seseorang yang bisa ikut berpikir soal sistem, alur data, dan keputusan teknis bersama Anda

---

## Pendekatan Kami

### Sistem Real-Time yang Aman dan Portabel

Kami akan membangun sistem monitoring ini dengan arsitektur yang tepat untuk kebutuhan streaming — berjalan di **Docker container**, terisolasi dan siap di-deploy ke server manapun.

Artinya bagi Anda:

- Data dari database mengalir otomatis ke dashboard setiap beberapa detik — tanpa refresh
- Aplikasi dan database berjalan terisolasi dari sistem host — lebih aman untuk akses jangka panjang
- Credential (username, password, API key) **dienkripsi** — bukan hanya disembunyikan, tapi benar-benar tidak bisa dibaca meski file-nya bocor
- Sistem bisa dipindahkan ke server baru kapan saja hanya dengan satu perintah

```
Cara kerja sistem:

Data masuk ke MySQL
  → PHP membaca perubahan setiap 2–3 detik
  → Dashboard di browser update otomatis
  → Semua berjalan di dalam container yang terisolasi
```

---

## Stack Teknologi

| Layer                 | Teknologi                      | Alasan                                              |
| --------------------- | ------------------------------ | --------------------------------------------------- |
| **Database**          | MySQL (Docker container)       | Terisolasi, aman, mudah di-backup                   |
| **Backend**           | PHP-FPM + Nginx                | Production-grade, ringan, cepat                     |
| **Streaming**         | Server-Sent Events (SSE)       | Real-time tanpa overhead berat                      |
| **Frontend**          | HTML + Tailwind CSS + Chart.js | UI modern, responsif, interaktif                    |
| **Secret Management** | dotenvx                        | Enkripsi credential — aman disimpan di repo manapun |
| **Orchestration**     | Docker + Docker Compose        | Satu perintah untuk jalankan seluruh sistem         |

---

## Rincian Pekerjaan

### 1. Setup Infrastruktur (Docker)

| Komponen        | Detail                                                                           |
| --------------- | -------------------------------------------------------------------------------- |
| Docker Compose  | Konfigurasi container untuk app dan database                                     |
| Nginx + PHP-FPM | Web server di dalam container                                                    |
| MySQL container | Database terisolasi, data dari XAMPP di-migrate                                  |
| dotenvx         | File `.env` dienkripsi — credential aman meski file dilihat orang lain           |
| DOTENV_KEY      | Kunci dekripsi disimpan terpisah di server, tidak pernah masuk ke kode atau repo |

### 2. Backend & Real-Time Streaming

| Komponen           | Detail                                          |
| ------------------ | ----------------------------------------------- |
| Koneksi database   | PHP membaca data dari MySQL container           |
| Server-Sent Events | Data dikirim ke browser otomatis tiap 2–3 detik |
| API endpoint       | Endpoint untuk filter dan query data            |

### 3. Dashboard Interface

| Fitur                | Detail                                  |
| -------------------- | --------------------------------------- |
| Tampilan tabel       | Data dalam tabel rapi, bisa difilter    |
| Grafik & visualisasi | Chart interaktif menggunakan Chart.js   |
| Filter data          | Berdasarkan rentang waktu atau kategori |
| Status indikator     | Koneksi database aktif atau tidak       |
| Responsive layout    | Laptop dan tablet                       |

### 4. Migrasi Data dari XAMPP

| Tahap               | Detail                                                  |
| ------------------- | ------------------------------------------------------- |
| Export data         | Data dari XAMPP MySQL di-export secara aman             |
| Import ke container | Data dimuat ke dalam MySQL container                    |
| Verifikasi          | Semua data dipastikan masuk dengan benar sebelum lanjut |

---

## Yang Perlu Anda Siapkan

- [ ] **Akses ke database XAMPP** — untuk proses migrasi data
- [ ] **VPS / server** — disarankan DigitalOcean atau Hetzner (~$6–10/bulan). Jika belum ada, kami bantu rekomendasikan dan setup.
- [ ] **Waktu 30 menit di hari pertama** — untuk sesi alignment dan review sistem yang sudah ada

---

## Estimasi Waktu

| Hari      | Kegiatan                                                                             |
| --------- | ------------------------------------------------------------------------------------ |
| **1**     | Sesi alignment — review sistem, data, dan desain yang ada. Setup Docker environment. |
| **2**     | Konfigurasi Docker Compose, migrasi data dari XAMPP ke container MySQL               |
| **3**     | Backend PHP + SSE — data streaming ke dashboard secara real-time                     |
| **4–5**   | Implementasi dashboard UI — tabel, grafik, filter, status indikator                  |
| **6**     | Testing, bug fix, simulasi deploy ke VPS                                             |
| **7**     | Serah terima, dokumentasi, sesi penjelasan via call                                  |
| **Total** | **7 hari kerja**                                                                     |

---

## Yang Anda Terima di Akhir Proyek

- [ ] Dashboard web monitoring berjalan real-time dan siap dipakai
- [ ] Interface selesai — desain dilanjutkan dan disempurnakan
- [ ] Full Docker setup — container app + database, siap deploy ke VPS manapun
- [ ] Data dari XAMPP berhasil di-migrate ke dalam container
- [ ] File `.env` terenkripsi dengan dotenvx — credential aman bahkan jika file tersebar
- [ ] Panduan singkat: cara menjalankan, stop, restart, dan backup sistem
- [ ] Panduan deploy ke VPS
- [ ] Sesi penjelasan langsung di hari terakhir

---

## Investasi

**Rp 6.500.000**

Mencakup seluruh pekerjaan di atas: backend, frontend, real-time streaming, interface completion, Docker setup, migrasi data dari XAMPP, testing, dokumentasi, dan sesi serah terima.

---

## Penutup

Kami ingin memastikan sistem monitoring ini tidak hanya "jadi" — tapi benar-benar bisa Anda andalkan dan kembangkan ke depannya. Arsitektur yang kami usulkan memastikan data Anda mengalir real-time, sistem Anda aman, dan deployment-nya fleksibel ke environment manapun.

Silakan hubungi kami untuk diskusi lebih lanjut:

**Portfolio:** liggar.site
**Email:** liggardap@gmail.com
**WhatsApp:** +6285162750354

---

_Dokumen ini bersifat analisis awal. Detail dapat disesuaikan setelah diskusi lebih lanjut mengenai kebutuhan spesifik sistem Anda._
