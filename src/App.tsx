import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): Record<string, string> {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad alanı zorunludur.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ad Soyad en az 2 karakter olmalıdır.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.'
    }

    if (!formData.subject) {
      newErrors.subject = 'Lütfen bir konu seçiniz.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alanı zorunludur.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.'
    }

    return newErrors
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <>
      {/* Skip Navigation Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Header */}
      <header>
        <div>
          <span className="site-title">Batuhan Yaşar Özkan</span>
          <p className="subtitle">Yazılım Mühendisliği Öğrencisi &amp; Full Stack Developer</p>
          <p className="student-id">230541050</p>
        </div>

        {/* Navigation */}
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">

        {/* Hakkımda Section */}
        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="https://ui-avatars.com/api/?name=Batuhan+Yasar+Ozkan&size=180&background=1E3A8A&color=ffffff&bold=true&format=svg"
                alt="Batuhan Yaşar Özkan profil fotoğrafı"
                width={180}
                height={180}
              />
              <figcaption>Batuhan Yaşar Özkan</figcaption>
            </figure>

            <div className="about-text">
              <p>
                Merhaba! Ben <strong>Batuhan Yaşar Özkan</strong> (230541050).{' '}
                <strong>Fırat Üniversitesi Yazılım Mühendisliği</strong> bölümünde 3. sınıf
                öğrencisiyim. Full Stack Development ve Yapay Zeka alanlarında çalışmalar
                yürütüyorum.
              </p>

              <h3>Becerilerim</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim Section */}
        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img
                src="/proje1.svg"
                alt="E-Ticaret sitesi anasayfa ekran görüntüsü"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="/proje2.svg"
                alt="Blog uygulaması yazı listesi görünümü"
              />
              <h3>Blog Uygulaması</h3>
              <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="/proje3.svg"
                alt="Hava durumu uygulaması arayüzü"
              />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>

          {submitted ? (
            <div className="success-message" role="status">
              <p>Mesajınız başarıyla gönderildi. Teşekkür ederim!</p>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="contact-form">
              {/* Ad Soyad */}
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  autoComplete="name"
                  aria-describedby="name-error"
                  aria-invalid={errors.name ? true : undefined}
                  value={formData.name}
                  onChange={handleChange}
                />
                <small id="name-error" role="alert" className="error-message">
                  {errors.name ?? ''}
                </small>
              </div>

              {/* E-posta */}
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  aria-describedby="email-error"
                  aria-invalid={errors.email ? true : undefined}
                  value={formData.email}
                  onChange={handleChange}
                />
                <small id="email-error" role="alert" className="error-message">
                  {errors.email ?? ''}
                </small>
              </div>

              {/* Konu */}
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                  aria-invalid={errors.subject ? true : undefined}
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">-- Konu seçiniz --</option>
                  <option value="is-birligi">İş Birliği Teklifi</option>
                  <option value="proje">Proje Hakkında</option>
                  <option value="genel">Genel Soru</option>
                </select>
                <small id="subject-error" role="alert" className="error-message">
                  {errors.subject ?? ''}
                </small>
              </div>

              {/* Mesaj */}
              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  aria-describedby="message-error"
                  aria-invalid={errors.message ? true : undefined}
                  value={formData.message}
                  onChange={handleChange}
                />
                <small id="message-error" role="alert" className="error-message">
                  {errors.message ?? ''}
                </small>
              </div>

              <button type="submit">Gönder</button>
            </form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Batuhan Yaşar Özkan &mdash; Fırat Üniversitesi, Yazılım Mühendisliği</p>
      </footer>
    </>
  )
}

export default App
