'use client';

import Image from 'next/image';

export default function Home() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Abdillah</div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home" className="nav-link" onClick={handleSmoothScroll}>Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link" onClick={handleSmoothScroll}>About</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link" onClick={handleSmoothScroll}>Skills</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link" onClick={handleSmoothScroll}>Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link" onClick={handleSmoothScroll}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-greeting">Halo, Saya</p>
            <h1>Abdillah <span className="highlight">Noer Said</span></h1>
            <h2>D4 Teknik Informatika Polinema</h2>
            <p>Mahasiswa aktif semester 6 yang berminat pada UI/UX Design, Quality Assurance, Jaringan dan pengembangan sistem berbasis IT.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary" onClick={handleSmoothScroll}>Lihat Proyek</a>
              <a href="#contact" className="btn btn-secondary" onClick={handleSmoothScroll}>Hubungi Saya</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-pic">
              <Image
                src="/Profil.jpg"
                alt="Abdillah Noer Said"
                width={280}
                height={280}
                priority
                style={{ borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Tentang <span className="highlight">Saya</span></h2>
          <div className="about-content">
            <div className="about-text">
              <p>Mahasiswa aktif semester 6 D-IV Teknik Informatika, Jurusan Teknologi Informasi di Politeknik Negeri Malang. Memiliki dasar pengetahuan IT yang kokoh, 
                diperkuat dengan pengalaman magang di bidang jaringan saat SMK. Sangat tertarik dan fokus pada peran spesialis seperti UI/UX Design, Quality Assurance (QA), 
                Pengembangan Web dan Infrastruktur Jaringan, serta siap mengaplikasikan kompetensi teknis dan pengalaman lapangan dalam proyek pengembangan di bidang IT.</p>
              <div className="about-info">
                <div className="info-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>D4 Teknik Informatika Semester 6</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-university"></i>
                  <span>Politeknik Negeri Malang</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Malang, Jawa Timur</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <span>abdillahnoersaid@gmail.com</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <span>+62 81555488066</span>
                </div>
                <div className="info-item">
                  <i className="fab fa-github"></i>
                  <span>AbdillahNS</span>
                </div>
                <div className="info-item info-item--full">
                  <i className="fab fa-linkedin"></i>
                  <span>Abdillah Noer Said</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Riwayat <span className="highlight">Pendidikan</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2023 &ndash; 2027</span>
                <h3>D4 Teknik Informatika</h3>
                <p>Politeknik Negeri Malang</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2020 &ndash; 2023</span>
                <h3>Teknik Komputer dan Jaringan</h3>
                <p>SMK Negeri 6 Malang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Keterampilan <span className="highlight">(Skills)</span></h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><i className="fas fa-code"></i> Bahasa Pemrograman</h3>
              <div className="skill-tags">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>Dart</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-tools"></i> Framework & Tools</h3>
              <div className="skill-tags">
                <span>Laravel</span>
                <span>Flutter</span>
                <span>Figma</span>
                <span>GitHub</span>
                <span>Visual Studio Code</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-network-wired"></i> Jaringan & Infrastruktur</h3>
              <div className="skill-tags">
                <span>Konfigurasi Router / Access Point</span>
                <span>Terminasi Kabel (Crimping RJ45)</span>
                <span>Instalasi Infrastruktur Jaringan</span>
              </div>
            </div>
            <div className="skill-category">
              <h3><i className="fas fa-paint-brush"></i> Desain & QA</h3>
              <div className="skill-tags">
                <span>UI/UX Design</span>
                <span>Quality Assurance</span>
                <span>Prototyping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Pengalaman</h2>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Magang Jaringan</h3>
                <p className="exp-company">NOC Institut Teknologi Nasional Malang</p>
              </div>
              <span className="exp-date">Mei &ndash; Oktober 2022</span>
            </div>
            <ul className="exp-list">
              <li>Membantu penarikan dan laying kabel UTP</li>
              <li>Membantu pembangunan infrastruktur jaringan dengan fokus pada kerapihan dan kepatuhan standar instalasi</li>
              <li>Melakukan terminasi kabel (crimping konektor RJ45) dengan presisi untuk memastikan koneksi optimal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Proyek <span className="highlight">Kuliah</span></h2>
          <p className="section-sub">2023 &ndash; 2025</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-terminal"></i>
              </div>
              <h3>Sistem Informasi Akademik</h3>
              <p>Sistem Informasi Akademik Berbasis Command Line untuk pengelolaan data mahasiswa.</p>
              <div className="project-tech">
                <span>Java</span>
                <span>CLI</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-door-open"></i>
              </div>
              <h3>Sistem Peminjaman Ruangan</h3>
              <p>Desain sistem peminjaman ruangan di Jurusan Teknologi Informasi Polinema.</p>
              <div className="project-tech">
                <span>Figma</span>
                <span>UI/UX</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Sistem Bebas Tanggungan</h3>
              <p>Sistem pengelolaan bebas tanggungan mahasiswa untuk keperluan Tugas Akhir.</p>
              <div className="project-tech">
                <span>PHP</span>
                <span>Laravel</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Sistem Pencatatan Prestasi</h3>
              <p>Sistem Informasi Pencatatan Prestasi Mahasiswa dan Rekomendasi Peserta Lomba.</p>
              <div className="project-tech">
                <span>PHP</span>
                <span>Laravel</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <i className="fas fa-traffic-light"></i>
              </div>
              <h3>Deteksi Rambu Lalu Lintas</h3>
              <p>Aplikasi mobile berbasis Machine Learning untuk identifikasi jenis rambu lalu lintas secara otomatis melalui foto.</p>
              <div className="project-tech">
                <span>Flutter</span>
                <span>Machine Learning</span>
                <span>TensorFlow Lite</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Hubungi <span className="highlight">Saya</span></h2>
          <div className="contact-links">
            <a className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">abdillahnoersaid@gmail.com</span>
            </a>
            <a href="https://wa.me/6281555488066" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              <span className="contact-link-label">WhatsApp</span>
              <span className="contact-link-value">+62 81555488066</span>
            </a>
            <a href="https://github.com/AbdillahNS" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">AbdillahNS</span>
            </a>
            <a href="https://www.instagram.com/diillz._/" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <span className="contact-link-label">Instagram</span>
              <span className="contact-link-value">@diillz._</span>
            </a>
            <a href="https://www.linkedin.com/in/abdillah-noer-said-1947b7384/" className="contact-link-card" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">Abdillah Noer Said</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Abdillah Noer Said. &mdash; Politeknik Negeri Malang.</p>
        </div>
      </footer>
    </div>
  );
}
