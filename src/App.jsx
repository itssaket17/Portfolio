import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Mail, Linkedin, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import './App.css'

const YouTubeEmbed = ({ videoId, isPlaying, className, onClick, isLanding = false }) => {
  const params = isLanding
    ? `autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&disablekb=1&fs=0`
    : `autoplay=${isPlaying ? 1 : 0}&mute=1&controls=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`
  const videoUrl = `https://www.youtube.com/embed/${videoId}?${params}`

  return (
    <div className={`youtube-embed-container ${className} ${isLanding ? 'is-landing' : ''}`} onClick={onClick}>
      <iframe
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="youtube-iframe"
        style={{ pointerEvents: (isLanding && !onClick) ? 'none' : 'auto' }}
      ></iframe>
      {!isLanding && <div className="youtube-overlay" style={{ pointerEvents: 'none' }} />}
      {isLanding && <div className="youtube-overlay" />}
    </div>
  )
}

const ReelCardFallback = ({ reelId, index, className }) => {
  const reelUrl = `https://www.instagram.com/reel/${reelId}/`
  const imgSrc = `/assets/Reel_${index + 1}.PNG`

  return (
    <motion.a
      href={reelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`reel-card-instagram ${className}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="reel-card-image-wrapper">
        <img src={imgSrc} alt={`Reel ${index + 1}`} className="reel-card-img" />
      </div>
      <div className="reel-card-content flex-center">
        <div className="reel-play-icon">
          <Play fill="currentColor" size={48} />
        </div>
      </div>
      <div className="reel-card-overlay" />
    </motion.a>
  )
}

function App() {
  const [activeVideo, setActiveVideo] = useState(0)
  const [hoveredReel, setHoveredReel] = useState(null)

  const videos = [
    {
      title: "PUTIN UNTOLD STORY",
      desc: "",
      duration: "00:04:32",
      specs: "4K / 24FPS",
      videoId: "utwC6FjV7CA",
      link: "https://youtu.be/utwC6FjV7CA"
    },
    {
      title: "IMAN GADZI SHORT",
      desc: "",
      duration: "00:01:00",
      specs: "4K / 24FPS",
      videoId: "CsRG_IbMUaA",
      link: "https://youtu.be/CsRG_IbMUaA"
    },
    {
      title: "TANMAY BHATT PODCAST",
      desc: "",
      duration: "00:00:45",
      specs: "4K / 24FPS",
      videoId: "Ioraf7hTRxM",
      link: "https://youtu.be/Ioraf7hTRxM"
    },
    {
      title: "AI VIDEO MUSIC",
      desc: "",
      duration: "00:00:50",
      specs: "4K / 24FPS",
      videoId: "hAPMkwVhyH0",
      link: "https://youtu.be/hAPMkwVhyH0"
    },
    {
      title: "RESTAURANT AD",
      desc: "",
      duration: "00:01:15",
      specs: "4K / 24FPS",
      videoId: "JyXE8aqgf7Y",
      link: "https://youtu.be/JyXE8aqgf7Y"
    },
    {
      title: "RESTAURANT AD 2",
      desc: "",
      duration: "00:00:55",
      specs: "4K / 24FPS",
      videoId: "YRBNchJxVHE",
      link: "https://youtu.be/YRBNchJxVHE"
    },
    {
      title: "ANAGRAM MEDIA LAB PROJECT",
      desc: "",
      duration: "00:01:05",
      specs: "4K / 24FPS",
      videoId: "qy2vbb_OMZM",
      link: "https://youtu.be/qy2vbb_OMZM"
    },
    {
      title: "AI VIDEOS STORY",
      desc: "",
      duration: "00:00:40",
      specs: "4K / 24FPS",
      videoId: "gorO-trrZqU",
      link: "https://youtu.be/gorO-trrZqU"
    },
    {
      title: "ZTHRIFTS BRAND PROMOTION",
      desc: "",
      duration: "00:01:20",
      specs: "4K / 24FPS",
      videoId: "-GQTZYS2qWs",
      link: "https://youtu.be/-GQTZYS2qWs"
    }
  ]

  const reelVideos = [
    "DR42O8oj0Hs", // Instagram Reel 1
    "DRUuSxODAoW", // Instagram Reel 2
    "DLaZv14Iw0v"  // Instagram Reel 3
  ]

  const nextVideo = () => setActiveVideo((prev) => (prev + 1) % videos.length)
  const prevVideo = () => setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:work.bysaket@gmail.com?subject=${subject}&body=${body}`
  }

  const longFormRef = useRef(null)
  const [isLongFormVisible, setIsLongFormVisible] = useState(false)

  useEffect(() => {
    // Fix for scroll-snap issue on navigation back/reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Always start at landing on fresh entry or return
    window.scrollTo(0, 0)

    const handleInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    // Check if the script is already added
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script')
      script.id = 'instagram-embed-script'
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLongFormVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (longFormRef.current) {
      observer.observe(longFormRef.current)
    }

    return () => {
      if (longFormRef.current) {
        observer.unobserve(longFormRef.current)
      }
    }
  }, [])

  return (
    <div className="snap-container">
      {/* Slide 1: Landing */}
      <section className="paper-bg slide-landing">
        {/* Background Scribbles */}
        <div className="bg-scribble s-1">vision</div>
        <div className="bg-scribble s-2">trust the process</div>
        <div className="bg-scribble s-3">every frame counts</div>
        <div className="bg-scribble s-4">craftsmanship</div>
        <div className="bg-scribble s-5">storytelling</div>

        {/* Restricted Video Background */}
        <div className="center-video-wrapper">
          <div className="center-video-bg">
            <div className="grain-overlay" />
            <YouTubeEmbed
              videoId="Fc20-QLCpI8"
              isPlaying={true}
              className="landing-bg-video"
              isLanding={true}
            />
          </div>
          <div className="film-frame-inner" />
        </div>

        <div className="video-overlay">
          <div className="content-container">
            <div className="top-left-meta font-typewriter">
              <span className="bold">cinematographer</span>
              <span className="bold">editor</span>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="center-content-group"
            >
              <div className="year-name font-typewriter">
                <span>2023</span>
                <span>NI HAO</span>
              </div>
              <h1 className="main-title font-script">Portfolio</h1>
            </motion.div>

            <div className="bottom-left-contact font-typewriter">
              <h3>Contact</h3>
              <div className="social-links-minimal">
                <a href="https://www.instagram.com/saket.raw/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
                <a href="https://www.linkedin.com/in/shubham-saket-223261230/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>
                <a href="mailto:work.bysaket@gmail.com"><Mail size={16} /></a>
                <span>/shubhamsaket</span>
              </div>
            </div>

            <div className="right-bar-vertical font-typewriter">
              <span>work.bysaket@gmail.com</span>
              <span>India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Intro & Info */}
      <section className="paper-bg slide-2-container">
        {/* Background Scribbles (In the page) */}
        <div className="bg-scribble s-1">vision</div>
        <div className="bg-scribble s-2">trust the process</div>
        <div className="bg-scribble s-3">every frame counts</div>
        <div className="bg-scribble s-4">craftsmanship</div>
        <div className="bg-scribble s-5">storytelling</div>

        <div className="ink-columns">
          {/* Left Column: Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="info-left-col font-typewriter"
          >
            <div className="scribble-header">
              <span className="handwritten">Information</span>
              <div className="scribble-arrow" />
            </div>

            <div className="portrait-section">
              <div className="portrait-box-vintage">
                <img src="/assets/DP.jpeg" alt="Shubham Saket" className="portrait-img" />
              </div>
              <p className="figure-id scribble-underline">FIGURE 1.1</p>
            </div>

            <div className="personal-details">
              <p><span className="scribble-circle bold">NAME:</span>  <span className="name-padding">Shubham Saket</span></p>
              <br />
              <p><span className="bold">PHONE:</span> +91 74886 52523</p>
              <br />
              <p><span className="bold">CONTACT:</span> work.bysaket@gmail.com</p>
            </div>

          </motion.div>

          {/* Right Column: Script Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="script-right-col font-typewriter"
          >
            <div className="title-circle-center">
              <div className="rough-circle">
                <h2 className="title-text">"INTRODUCTION"</h2>
              </div>
            </div>

            <div className="script-body-compact">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="dialogue">
                  I'm Shubham Saket. I tell stories through a lens and a timeline. 2+ years of freelancing. A B.Tech in Computer & Communication Engineering from Manipal University. And an obsession with making content that doesn't just look good — it works.
                </p>
                <p className="dialogue">
                  While most people were just getting through college, I was building a career inside it. Shooting on weekends. Editing through the night. Delivering real work for real clients before I even had a degree to my name.
                </p>
                <p className="dialogue">
                  I'm not just an editor — I'm a cinematographer too. I understand light, composition, and movement before it ever hits the timeline. That dual perspective makes every project sharper and more intentional.
                </p>
                <p className="dialogue">
                  Premiere Pro. After Effects. DaVinci Resolve. Not just tools — my language.
                </p>
                <p className="dialogue">
                  If you've got a project in mind, I'd love to hear about it.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide: Remake Gallery */}
      <section className="paper-bg slide-remake flex-center">
        <div className="bg-scribble s-1">vision</div>
        <div className="bg-scribble s-2">trust the process</div>
        <div className="bg-scribble s-3">every frame counts</div>
        <div className="bg-scribble s-4">craftsmanship</div>
        <div className="bg-scribble s-5">storytelling</div>
        <div className="remake-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="remake-header font-typewriter"
          >
            <h2 className="handwritten-title-ink">The Remake</h2>
          </motion.div>

          <div className="remake-gallery-grid">
            <motion.div
              initial={{ rotate: -5, opacity: 0, y: 40 }}
              whileInView={{ rotate: -8, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="photo-skeleton remake-photo-1"
            >
              <div className="photo-inner-placeholder">
                <img src="/assets/1.JPG" alt="Remake 1" className="gallery-img" />
              </div>
            </motion.div>

            <motion.div
              initial={{ rotate: 3, opacity: 0, y: 40 }}
              whileInView={{ rotate: 5, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="photo-skeleton remake-photo-2"
            >
              <div className="photo-inner-placeholder">
                <img src="/assets/2.JPG" alt="Remake 2" className="gallery-img" />
              </div>
            </motion.div>

            <motion.div
              initial={{ rotate: -2, opacity: 0, y: 40 }}
              whileInView={{ rotate: -4, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="photo-skeleton remake-photo-3"
            >
              <div className="photo-inner-placeholder">
                <img src="/assets/3.JPG" alt="Remake 3" className="gallery-img" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 4: Video Gallery */}
      <section className="paper-bg slide-video-gallery flex-center">
        <div className="bg-scribble s-1">vision</div>
        <div className="bg-scribble s-2">trust the process</div>
        <div className="bg-scribble s-3">every frame counts</div>
        <div className="bg-scribble s-4">craftsmanship</div>
        <div className="bg-scribble s-5">storytelling</div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="video-gallery-container"
        >
          <div className="video-nav-container" ref={longFormRef}>
            <button className="video-nav-btn prev" onClick={prevVideo}>
              <ChevronLeft size={32} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="video-main-display"
              >
                <div className="video-holder-premium">

                  <div className="player-box flex-center">
                    <YouTubeEmbed
                      videoId={videos[activeVideo].videoId}
                      isPlaying={isLongFormVisible}
                      className="long-form-video"
                      onClick={() => window.open(videos[activeVideo].link, '_blank')}
                    />
                  </div>
                </div>

                <div className="video-info-overlay font-typewriter">
                  <h3 className="underline-text">{videos[activeVideo].title}</h3>
                  <p>{videos[activeVideo].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button className="video-nav-btn next" onClick={nextVideo}>
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="video-counter font-typewriter">
            <span>{activeVideo + 1}</span> / <span>{videos.length}</span>
          </div>
        </motion.div>
      </section>

      {/* Slide 5: Reels */}
      <section className="paper-bg slide-reels flex-center">
        <div className="bg-scribble s-1">vision</div>
        <div className="bg-scribble s-2">trust the process</div>
        <div className="bg-scribble s-3">every frame counts</div>
        <div className="bg-scribble s-4">craftsmanship</div>
        <div className="bg-scribble s-5">storytelling</div>
        <div className="reels-section">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0, margin: "200px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="handwritten-title-ink"
          >THE REELS</motion.h2>
          <div className="reels-static-grid">
            {reelVideos.map((reelId, index) => (
              <motion.div
                key={reelId}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0, margin: "200px" }}
                transition={{
                  opacity: { duration: 0.8, delay: index * 0.15 },
                  y: { duration: 0.8, delay: index * 0.15 }
                }}
              >
                <ReelCardFallback reelId={reelId} index={index} className="reel-video" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 6: Get in Touch */}
      <section className="paper-bg slide-contact flex-center">
        <div className="bg-scribble s-1">vision</div>
        <div className="bg-scribble s-2">trust the process</div>
        <div className="bg-scribble s-3">every frame counts</div>
        <div className="bg-scribble s-4">craftsmanship</div>
        <div className="bg-scribble s-5">storytelling</div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="contact-section font-typewriter"
        >
          <h2 className="handwritten-title-ink">GET IN TOUCH</h2>

          <div className="contact-paper-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group ink-border">
                <label htmlFor="name">NAME:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="EX. SHUBHAM SAKET"
                />
              </div>

              <div className="form-group ink-border">
                <label htmlFor="email">EMAIL:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="YOUR@EMAIL.COM"
                />
              </div>

              <div className="form-group ink-border">
                <label htmlFor="message">MESSAGE:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="YOUR PROJECT DETAILS..."
                  rows="4"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>

            <div className="contact-footer">
              <div className="social-links-scrapbook">
                <motion.a
                  href="https://www.instagram.com/saket.raw/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  whileHover={{ y: -5 }}
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/shubham-saket-223261230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin size={20} />
                  <span>Linkedin</span>
                </motion.a>
                <motion.a
                  href="mailto:work.bysaket@gmail.com"
                  className="social-link-item"
                  whileHover={{ y: -5 }}
                >
                  <Mail size={20} />
                  <span>Email</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default App
