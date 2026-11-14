
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 1. Menyimpan data mahasiswa menggunakan useState
  const [students] = useState([
    {
      nim: "23082010001",
      nama: "Andi Pratama",
      noHp: "081234567890",
      email: "andi@gmail.com",
      alamat: "Sidoarjo",
      prodi: "Sistem Informasi",
      tahunMasuk: "2023",
    },
    {
      nim: "23082010002",
      nama: "Budi Santoso",
      noHp: "081234567891",
      email: "budi@gmail.com",
      alamat: "Surabaya",
      prodi: "Informatika",
      tahunMasuk: "2023",
    },
    {
      nim: "23082010003",
      nama: "Citra Amelia",
      noHp: "081234567892",
      email: "citra@gmail.com",
      alamat: "Mojokerto",
      prodi: "Sistem Informasi",
      tahunMasuk: "2023",
    },
    {
      nim: "23082010004",
      nama: "Dinda Putri",
      noHp: "081234567893",
      email: "dinda@gmail.com",
      alamat: "Gresik",
      prodi: "Manajemen",
      tahunMasuk: "2022",
    },
    {
      nim: "23082010005",
      nama: "Eko Saputra",
      noHp: "081234567894",
      email: "eko@gmail.com",
      alamat: "Pasuruan",
      prodi: "Informatika",
      tahunMasuk: "2022",
    },
    {
      nim: "23082010006",
      nama: "Fitri Handayani",
      noHp: "081234567895",
      email: "fitri@gmail.com",
      alamat: "Malang",
      prodi: "Sistem Informasi",
      tahunMasuk: "2024",
    },
    {
      nim: "23082010007",
      nama: "Gilang Ramadhan",
      noHp: "081234567896",
      email: "gilang@gmail.com",
      alamat: "Pasuruan",
      prodi: "Informatika",
      tahunMasuk: "2024",
    },
  ]);

  // 2. State untuk menyimpan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());

  // 3. useEffect untuk menjalankan live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval ketika komponen di-unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">🎓</div>
            <div>
              <h1>Student Management</h1>
              <p>Dashboard Pengelolaan Data Mahasiswa</p>
            </div>
          </div>

          <div className="header-label">
            <span className="status-dot"></span>
            Academic Dashboard
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* PAGE TITLE */}
        <section className="page-heading">
          <div>
            <span className="page-subtitle">OVERVIEW</span>
            <h2>Daftar Data Mahasiswa</h2>
            <p>
              Berikut merupakan informasi data mahasiswa
              yang terdaftar.
            </p>
          </div>
        </section>

        {/* INFORMATION CARDS */}
        <section className="information-grid">

          {/* TOTAL STUDENTS */}
          <div className="info-card student-card">
            <div className="card-icon blue-icon">
              <span>👨‍🎓</span>
            </div>

            <div className="card-information">
              <p>Total Mahasiswa</p>
              <h3>{students.length}</h3>
              <span className="card-description">
                Data mahasiswa terdaftar
              </span>
            </div>
          </div>

          {/* LIVE CLOCK */}
          <div className="info-card clock-card">
            <div className="card-icon purple-icon">
              <span>🕒</span>
            </div>

            <div className="card-information">
              <p>Waktu Sekarang</p>

              <h3 className="clock-time">
                {currentTime.toLocaleTimeString("id-ID")}
              </h3>

              <span className="card-description">
                {currentTime.toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

        </section>

        {/* STUDENT TABLE */}
        <section className="table-section">

          <div className="table-header">
            <div>
              <h3>Data Mahasiswa</h3>
              <p>Daftar informasi lengkap mahasiswa</p>
            </div>

            <div className="student-count">
              {students.length} Mahasiswa
            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>

              <tbody>
                {/* 4. Looping data menggunakan map() */}
                {students.map((student) => (
                  <tr key={student.nim}>
                    <td className="nim-cell">
                      {student.nim}
                    </td>

                    <td className="name-cell">
                      {student.nama}
                    </td>

                    <td>{student.noHp}</td>

                    <td>{student.email}</td>

                    <td>{student.alamat}</td>

                    <td>
                      <span className="prodi-badge">
                        {student.prodi}
                      </span>
                    </td>

                    <td>{student.tahunMasuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            Menampilkan {students.length} data mahasiswa
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Student Management. All Rights Reserved.
        </p>
        <p>React UI Implementation Practice</p>
      </footer>

    </div>
  );
}

export default App;
