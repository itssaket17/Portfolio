import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Mail, Linkedin, Play, ArrowRight } from 'lucide-react'
import './App.css'

const _motion = motion

const YouTubeEmbed = ({ videoId, isPlaying, className, onClick, isLanding = false }) => {
  const iframeRef = useRef(null)
  const params = isLanding
    ? `autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&disablekb=1&fs=0`
    : `autoplay=0&mute=1&controls=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`
  const videoUrl = `https://www.youtube.com/embed/${videoId}?${params}`

  useEffect(() => {
    if (!iframeRef.current) return
    const iframe = iframeRef.current
    const action = isPlaying ? 'playVideo' : 'pauseVideo'
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: action, args: [] }),
        '*'
      )
    } catch (e) {
      console.warn("YouTube control error:", e)
    }
  }, [isPlaying])

  const handleLoad = () => {
    if (!iframeRef.current) return
    const iframe = iframeRef.current
    const action = isPlaying ? 'playVideo' : 'pauseVideo'
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: action, args: [] }),
        '*'
      )
    } catch (e) {
      console.warn("YouTube load control error:", e)
    }
  }

  return (
    <div className={`youtube-embed-container ${className} ${isLanding ? 'is-landing' : ''}`} onClick={onClick}>
      <iframe
        ref={iframeRef}
        src={videoUrl}
        onLoad={handleLoad}
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

const UberLogo = () => (
  <img src="/assets/uber_logo.svg" alt="Uber" style={{ height: '33px', objectFit: 'contain' }} />
)

const AirbnbLogo = () => (
  <svg viewBox="0 0 24 24" width="38" height="38" fill="#FF5A5F">
    <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
  </svg>
)

const FlipkartLogo = () => (
  <svg viewBox="0 0 713.39 707.4" width="38" height="38">
    <defs>
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="356.4805" y1="493.1343" x2="356.4805" y2="1080.8978" gradientTransform="matrix(1 0 0 1 0.14 -373.5461)">
        <stop offset="0" stopColor="#F7E830"/>
        <stop offset="1" stopColor="#FDCB06"/>
      </linearGradient>
      <radialGradient id="SVGID_2_" cx="353.4156" cy="761.2123" r="478.08" gradientTransform="matrix(1 0 0 1 0.14 -373.5461)" gradientUnits="userSpaceOnUse">
        <stop offset="0.596" stopColor="#F29405"/>
        <stop offset="0.736" stopColor="#F7D01E"/>
        <stop offset="1" stopColor="#FDCB06"/>
      </radialGradient>
      <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="520.03" y1="514.347" x2="520.197" y2="542.18" gradientTransform="matrix(1 0 0 1 0.14 -373.5461)">
        <stop offset="0" stopColor="#FADA1C"/>
        <stop offset="1" stopColor="#FDCB06"/>
      </linearGradient>
      <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-811.1298" y1="513.0134" x2="-810.9628" y2="540.8463" gradientTransform="matrix(-1 0 0 1 -618.3428 -373.5461)">
        <stop offset="0" stopColor="#FADA1C"/>
        <stop offset="1" stopColor="#FDCB06"/>
      </linearGradient>
      <path id="SVGID_5_" d="M520.22,154.53c-0.8-1.5-0.9-3.3-0.9-5l-0.8,0.1c-1.2-4.4-4.9-8.6-9.7-8.8c-3.6-0.3-8.1-0.2-10.2,3.2 c-4,5.4-2.1,12.3-2.3,18.4c0,0.4,0.1,1.1,0.1,1.5c0,4.1-0.5,8.1-1.2,12.1c-0.6,1.2-0.9,2.5-0.9,3.9c-1.7,9.4-5.1,18.7-9.7,27.2 c-0.9,1.2-1.6,2.5-1.9,3.9c-3,5.2-6.6,10-10.3,14.8c-0.6,0.5-1.1,1.1-1.6,1.7c-2.6,3.2-5.4,5.9-8.3,8.7c-0.7,0.4-1.2,0.9-1.8,1.3 c-3.4,3.3-7.2,6.4-11.3,8.9c-0.5,0.3-1,0.7-1.6,1.1c-25.6,16.9-56.7,23.9-87,24.2c-25.7,0.8-51.6-4.7-74.8-15.8 c-0.4-0.2-1.4-0.6-1.8-0.8c-3.9-2.1-7.9-3.9-11.5-6.5c-0.8-0.4-1.6-0.9-2.5-1.3c-3.7-2.2-7.2-4.6-10.5-7.4c-1.1-1-2.3-1.8-3.5-2.7 c-3.6-2.9-7.3-6-10.4-9.5c-0.8-0.9-1.6-1.7-2.4-2.5c-10.9-11.3-19.4-25.1-23.9-40.1c-4.3-11.9-3.7-24.9-4.2-37.4 c-3.6-5.5-11.2-8.6-17.2-5.2c-2.5,1.8-2.8,5.1-4.7,7.4c-3.1,33,11,65.9,33.5,89.7c0,0.8,0.4,1.3,1.1,1.6c4,3.7,7.9,7.5,11.9,11.1 c0.7,0.7,1.5,1.4,2.4,2c4,3.3,8.3,6.3,12.5,9.4c0.8,0.6,1.6,1.1,2.5,1.6c5.5,3.2,10.7,7,16.6,9.2c0.4,0.3,1.1,0.8,1.5,1 c19,9.1,39.5,15.3,60.5,17.3c2.3,0,4.6,0.2,6.9,0.7c10,0.6,20,0.3,30,0.1c30.9-2.7,62.8-10.2,88.6-28.4l0.3,0.4 c0.8-0.7,1.5-1.3,2.3-1.9c4.1-3,8.1-6.2,12.1-9.5c0.9-0.7,1.9-1.5,2.8-2.4c4.4-4.8,9.5-9.2,13.2-14.7l0.6,0.3 c0.3-0.5,0.8-1.5,1.1-2c3.4-4.6,6.5-9.4,9.5-14.2c0.2-0.3,0.7-0.8,0.9-1.1l-0.4-0.4c0.3-0.4,1-1.2,1.3-1.6 c5.5-11.2,10.4-22.9,12.1-35.3c0.7-0.3,1.1-0.9,1.1-1.6c0.1-4,1.5-7.8,1.1-11.8C520.32,164.53,520.42,159.53,520.22,154.53 L520.22,154.53z"/>
      <clipPath id="SVGID_6_">
        <use xlinkHref="#SVGID_5_" style={{ overflow: 'visible' }}/>
      </clipPath>
    </defs>
    <style>{`
      .st0{fill:url(#SVGID_1_);stroke:#FCD109;stroke-width:0.094;}
      .st1{fill:#F8F3B5;stroke:#F8F3B5;stroke-width:0.094;}
      .st2{fill:#F7B402;stroke:#F7B402;stroke-width:0.094;}
      .st3{fill:#BDA727;stroke:#BDA727;stroke-width:0.094;}
      .st4{fill:#F7E62D;stroke:#F7E62D;stroke-width:0.094;}
      .st5{fill:url(#SVGID_2_);stroke:#FCD109;stroke-width:0.094;}
      .st6{fill:url(#SVGID_3_);stroke:#FCD109;stroke-width:0.094;}
      .st7{fill:url(#SVGID_4_);stroke:#FCD109;stroke-width:0.094;}
      .st8{fill:#0D69B3;stroke:#0D69B3;stroke-width:0.094;}
      .st9{fill:#107BD4;stroke:#107BD4;stroke-width:0.094;}
      .st10{fill:#FFFFFF;stroke:#FFFFFF;stroke-width:0.094;}
      .st11{clip-path:url(#SVGID_6_);}
      .st12{fill:none;stroke:#D1D1D1;stroke-width:2;}
    `}</style>
    <path className="st0" d="M712.87,122.59c-0.3-1-0.6-2-1-3c-236.9,0.1-473.7,0-710.5,0.1c-0.6,0.7-1,1.4-1.1,2.3c0,183.7,0,367.3-0.1,551 c1.5,9.8,6.9,18.7,14.1,25.4c0.3,0.1,1,0.2,1.3,0.3c3.7,3.9,9,5.8,14,7.6c3.7-0.2,7.3,1.4,11,1h294c2.8-0.1,5.7,0.4,8.4-0.7 c0.1-0.4,0.2-1.1,0.3-1.5c0.1-0.5,0.2-1.6,0.3-2.2c6.3-35.2,12.4-70.5,19.1-105.7l0.6-4.5c-27.2-0.1-54.5,0-81.7-0.1 c-6.6-0.2-13.4,0-20-0.8c-11.3-0.5-22.7-0.1-34-1.2c-14,0-27.9-1.3-41.9-1.3c-11-1.1-22.1-0.7-33.2-1.2c-7.2-0.9-14.6-0.5-21.9-0.8 c-11.9-1.3-24-0.4-35.9-1.7c-12.6,0.1-25.2-1-37.8-1.3c0.1-0.1,0.2-0.5,0.2-0.6c4.2,0.1,8.3-0.2,12.5-0.3c9.3-1.2,18.7-0.4,28-1.7 c9.7,0,19.3-1.3,29-1.3c8.6-1.2,17.3-0.5,25.9-1.7c10.1,0,20-1.3,30.1-1.4c8.3-1.1,16.7-0.5,25-1.6c9.7,0.1,19.3-1.4,29-1.3 c9.5-1.1,19.2-0.8,28.7-1.8c-0.9-3.7-1.6-7.4-2.4-11.1c-0.7-2.3-3.5-1.8-5.3-2.1c-21.7-3.1-43.3-6.2-64.9-9.2 c1.4-1.1,3.3-0.6,4.9-0.8c16.8-1.3,33.5-2.8,50.3-4c3.8-0.2,7.5-0.9,11.3-1c-1.7-5.2-2.7-10.9-5-15.7c-35.9-5.5-71.8-10.4-107.6-16.3 c9.3-1.5,18.7-2.2,28-3.2l0.8-0.3c29.7-3.1,59.5-6.6,89.2-9.5c37.7-0.2,75.3-0.1,113,0c1.2-0.2,3.3,0.4,3.5-1.3c3.1-16.2,6.1-32.4,9.2-48.6 c4.3-22.5,11.1-44.7,21.6-65.2c16.5-33,42.6-61,74.4-79.6c29.7-17.4,64.1-25.8,98.3-27.4c11.1-1,22.3-0.7,33.3,0.7 c7.2,1.7,14.6,3.7,20.3,8.6c4.7,3.8,7.5,9.4,9.6,15c4.6,13.3,7.2,27.1,9.4,41c0.1,5.6,1.1,11.9-1.9,17c-2.8,5-8.4,7.4-13.7,8.9 c-19.3,5-39.5,0.3-58.8,5c-15.9,3.4-30.7,12.2-40.8,24.9c-11.9,14.8-18.2,33.2-21.7,51.6c-2.7,16.4-6.1,32.8-8.8,49.3 c19,0.1,38.1-0.1,57.2,0.1c7.6,0,15.4,4.2,18.5,11.4c4,9.2,3.1,19.6,1.8,29.3c-1.6,10.9-4.2,21.7-9.1,31.7c-4.1,8.5-10.9,16.3-20.2,19.3 c-4.8,1.9-10,1.5-15.1,1.5c-16.8,0-33.6,0.2-50.4,0c-2.7,12.3-4.5,24.9-6.9,37.4c-4.4,24.3-8.7,48.7-13.1,73.1 c-0.1,0.8-0.2,2.5-0.2,3.4c7.9,0.4,15.8,0,23.7,0.2c58.6,0,117.3-0.1,176,0c6.3,0.2,12.7-1.3,18.2-4.4c3.3-1.2,5.3-4.1,8.2-5.7 c2.8-1.6,3.6-4.9,6-7c2.6-4.6,5.3-9.4,5.5-14.8c0.3,0,1.1-0.1,1.5-0.2C712.77,490.59,713.07,306.59,712.87,122.59z"/>
    <path className="st1" d="M93.47,1.59c8.5-2.7,17.4-0.9,26.1-1.5c163.3,0.1,326.6,0,489.9,0c9.7-0.4,18.2,5.1,27.2,7.9 c7.2,2.9,14.7,5.2,21.9,8.3c1.5,0.6,2.6,1.9,3.7,3c-0.1,13.2,0,26.5,0,39.8c0.1,3.5-0.5,7.1,0.7,10.5c2.1,0.3,3.2,1.9,4.6,3.2 c6.6,3,12.2,7.9,18.2,11.9c9,6.4,18.6,12,27.4,18.6c0.4,2.6,0.1,5.3-0.7,7.7c-0.9,2.8-0.3,5.8-0.6,8.6c-236.9,0.1-473.7,0-710.5,0.1 c-0.5-3.3,0.4-6.6-1-9.7c-0.2-2.6-1.1-6,1.4-7.8c10-7,20.6-13.3,30.4-20.7c6.1-3.9,12-7.9,17.9-11.9c1.2-2,0.8-4.5,0.8-6.7 c0-14.5,0-29,0.1-43.5c3.4-4.4,9.3-4.9,14-7.1C74.47,8.69,84.07,5.19,93.47,1.59 M94.07,3.29c-12.8,4.9-25.7,9.6-38.5,14.5 c-1.7,0.3-2.6,1.8-3.5,3.1c0.1,0.8,0.2,2.2,0.2,3c-0.1,12,0,24-0.1,36c0.1,3-0.3,6,0.8,8.7c-1.3,1.3-2.7,2.6-4.3,3.6 c-14.5,9.4-28.5,19.6-43,28.9c-2.5,1.5-5.3,3.5-4.5,6.8c-0.5,1.8,0.4,3.3,2.3,2.8c31.4-0.2,62.7,0.2,94.1-0.3c46.7,0,93.3,0.1,140,0 l0.7-0.3c2.1,0.5,4.2,0.3,6.4,0.3c84.6,0,169.2,0.1,253.9,0c26.6,0.1,53.3,0,80,0c44,0,88.1,0.4,132.1,0.2 c1.3-0.3,1.7-1.2,1.2-2.8c-0.1-1.6,0.5-3.8-1.2-4.8c-7-3.3-13-8.4-19.7-12.4c-2.4-2-5.5-3.1-7.3-5.8c-6.9-3.9-13.3-8.7-20.1-13 c-1.3-0.8-2.3-2.1-3.4-3.2c0.6-2.1,0.8-4.4,0.8-6.6c-0.1-12.7,0-25.4-0.1-38.1c0.3-2,0.2-4.3-1.6-5.6c-12-4.3-23.9-8.9-35.8-13.3 c-3.7-1.8-7.8-2.8-11.8-3.4h-511.1C98.37,1.69,96.27,2.79,94.07,3.29L94.07,3.29z"/>
    <path className="st2" d="M52.27,23.89c8.8,3.7,18.2,5.8,27.1,9.4c4.8,1.9,6.3,7.1,8.4,11.3c-2.1,2.1-4.6,3.8-7.1,5.4 c-9.2,6.2-18.6,12.2-27.7,18.6c-1.1-2.7-0.7-5.7-0.8-8.7C52.27,47.89,52.17,35.89,52.27,23.89z M633.77,33.29 c8.9-3.5,18.2-5.9,27.1-9.4c0.1,12.7,0,25.4,0.1,38.1c0,2.2-0.2,4.5-0.8,6.6c-7.8-5.4-15.7-10.5-23.5-15.8c-3.8-2.8-8-4.9-11.4-8.3 C627.37,40.29,628.97,35.19,633.77,33.29L633.77,33.29z"/>
    <path className="st3" d="M204.87,37.39c11-2.6,23.3,7.2,22.4,18.7c0.1,11.3-11.8,20.5-22.7,17.9c-4.4-1.5-8.6-3.8-11.3-7.7 c-3.5-5.3-4.3-12.4-1.5-18.2C193.77,42.49,199.17,38.69,204.87,37.39L204.87,37.39z M490.17,43.69c4.6-5.1,11.9-8,18.7-6.2 c5.1,1.5,10.1,4.8,12.3,9.8c4.4,8.6,1,20.2-7.6,24.7c-7.6,4.2-17.2,2.2-23-3.9C484.67,61.39,484.27,50.39,490.17,43.69z"/>
    <path className="st4" d="M80.67,49.99c2.5-1.6,5-3.3,7.1-5.4l0.7,0.7c0.7,5.2,0.2,10.5,0.4,15.7c-0.3,15.6,0.3,31.3-0.4,46.9 c-29.1,0-58.2-0.2-87.3,0c-0.8-3.3,2-5.3,4.5-6.8c14.5-9.3,28.5-19.5,43-28.9c1.6-1,3-2.3,4.3-3.6 C62.07,62.19,71.47,56.19,80.67,49.99z M624.27,47.99c0-1.3,0.3-2.4,1-3.5c3.4,3.4,7.6,5.5,11.4,8.3c7.8,5.3,15.7,10.4,23.5,15.8 c1.1,1.1,2.1,2.4,3.4,3.2c6.8,4.3,13.2,9.1,20.1,13c1.8,2.7,4.9,3.8,7.3,5.8c6.7,4,12.7,9.1,19.7,12.4c1.7,1,1.1,3.2,1.2,4.8 c-29.1,0.1-58.1-0.1-87.2,0.1c-0.5-4-0.2-8-0.3-11.9C624.37,79.99,624.17,63.99,624.27,47.99L624.27,47.99z"/>
    <path className="st5" d="M711.87,107.79c-29.1,0.1-58.1-0.1-87.2,0.1c-0.5-4-0.2-8-0.3-11.9c0-16-0.2-32-0.1-48c0-1.3,0.3-2.4,1-3.5 c2.1-4.2,3.7-9.3,8.5-11.2c8.9-3.5,18.2-5.9,27.1-9.4c0.3-2,0.2-4.3-1.6-5.6c-12-4.3-23.9-8.9-35.8-13.3c-3.7-1.8-7.8-2.8-11.8-3.4 h-511.1c-2.2,0.1-4.3,1.2-6.5,1.7c-12.8,4.9-25.7,9.6-38.5,14.5c-1.7,0.3-2.6,1.8-3.5,3.1c0.1,0.8,0.2,2.2,0.2,3c8.8,3.7,18.2,5.8,27.1,9.4 c4.8,1.9,6.3,7.1,8.4,11.3l0.7,0.7c0.7,5.2,0.2,10.5,0.4,15.7c-0.3,15.6,0.3,31.3-0.4,46.9c-29.1,0-58.2-0.2-87.3,0 c-0.5,1.8,0.4,3.3,2.3,2.8c31.4-0.2,62.7,0.2,94.1-0.3c46.7,0,93.3,0.1,140,0l0.7-0.3c2.1,0.5,4.2,0.3,6.4,0.3 c84.6,0,169.2,0.1,253.9,0c26.6,0.1,53.3,0,80,0c44,0,88.1,0.4,132.1,0.2C711.97,110.29,712.37,109.39,711.87,107.79L711.87,107.79z M191.77,48.09c2-5.6,7.4-9.4,13.1-10.7c11-2.6,23.3,7.2,22.4,18.7c0.1,11.3-11.8,20.5-22.7,17.9c-4.4-1.5-8.6-3.8-11.3-7.7 C189.77,60.99,188.97,53.89,191.77,48.09L191.77,48.09z M490.17,43.69c4.6-5.1,11.9-8,18.7-6.2c5.1,1.5,10.1,4.8,12.3,9.8 c4.4,8.6,1,20.2-7.6,24.7c-7.6,4.2-17.2,2.2-23-3.9C484.67,61.39,484.27,50.39,490.17,43.69z"/>
    <path className="st6" d="M515.66,151.73c1.4,0.3-7.29-8.35-5.59-8.75c1.6,0.2,7.67-4.51,15-0.67c7.33,3.84,5.51,12.83,4.68,16.17 c-0.99,3.97-3.52,6.5-5.52,8.5c-1.1,0.9-3.57,2.3-5.07,2.2c0.9-4.9-2-5.7-2.2-10.7L515.66,151.73z"/>
    <path className="st7" d="M195.99,157.16c-0.2,5-3.1,5.8-2.2,10.7c-1.5,0.1-3.97-1.3-5.07-2.2c-2-2-4.52-4.53-5.51-8.5 c-0.83-3.33-2.65-12.32,4.68-16.17s13.4,0.87,15,0.67c1.7,0.4-6.99,9.05-5.59,8.75L195.99,157.16L195.99,157.16z"/>
    <path className="st3" d="M502.57,215.79c1.5-1.31,2.5-1.31,4.5-1.31c-12,26-26,52-47.05,72.24c-2.25,2.01-4.63,3.87-7.12,5.58 c-2.41,1.76-4.77,3.42-7.12,5.1c-2.3,1.6-4.59,3.2-6.81,4.88c-5.7,3.1-10.7,7.4-17,9.3c-11.5,5.5-23.9,9.2-36.4,11.8 c-4.9,0.8-9.9,2-14.9,2.1c-6.2,1.8-12.8,0.5-19.1,0.9c-3.5,0.6-6.6-1.4-10-1c-2.95-0.42-5.89-0.92-8.82-1.5 c-2.97-0.61-5.92-1.31-8.84-2.1c-45.84-14.3-90.84-49.3-103.95-96.64c-0.59-3.19-0.89-6.42-0.89-9.67c1.4,2.8,2.85,5.58,4.35,8.33 c18.65,40.67,55.65,72.67,99.36,82.32c3.55,1.62,7.39,1.05,10.79,2.45c3.1,0,6.1-0.1,9.1,0.9c10.3,0.2,20.6,0.1,30.9,0.1 c1.4,0.1,2.7-0.6,4.1-0.9c17.17-0.58,33.99-5.26,49.65-12.36c3.13-1.42,6.22-2.94,9.25-4.54c2.65-1.4,5.25-2.91,7.77-4.54 c2.48-1.6,4.88-3.3,7.22-5.1c18.51-14.66,34.51-33.66,45.38-55.51C499,222.71,500.9,219.07,502.57,215.79z"/>
    <path className="st8" d="M486.27,304.69c29.7-17.4,64.1-25.8,98.3-27.4c11.1-1,22.3-0.7,33.3,0.7c7.2,1.7,14.6,3.7,20.3,8.6 c-2.9,0.2-5.7-1.1-8.6-1.5c-8.2-1.6-16.7-1-25-1.2c-24.1,0-48.4,1.9-71.7,8.5c-12.2,3.7-24.4,8-35.5,14.4 c-19.2,10.6-36.5,24.6-50.5,41.4c-25,28.7-39.7,65.1-46.8,102.2c-3.4,19.9-7.3,39.7-10.4,59.7c-5,0.5-10.1,0.2-15.1,0.2 c-22-0.1-44-0.2-66-0.4c-4.7,0.2-9.3-0.9-14-0.6c-40,0.2-80-0.1-120-0.1l0.8-0.3c29.7-3.1,59.5-6.6,89.2-9.5 c37.7-0.2,75.3-0.1,113,0c1.2-0.2,3.3,0.4,3.5-1.3c3.1-16.2,6.1-32.4,9.2-48.6c4.3-22.5,11.1-44.7,21.6-65.2 C428.37,351.29,454.47,323.29,486.27,304.69z"/>
    <path className="st9" d="M532.87,292.39c23.3-6.6,47.6-8.5,71.7-8.5c8.3,0.2,16.8-0.4,25,1.2c2.9,0.4,5.7,1.7,8.6,1.5 c4.7,3.8,7.5,9.4,9.6,15c4.6,13.3,7.2,27.1,9.4,41c0.1,5.6,1.1,11.9-1.9,17c-2.8,5-8.4,7.4-13.7,8.9 c-19.3,5-39.5,0.3-58.8,5c-15.9,3.4-30.7,12.2-40.8,24.9c-11.9,14.8-18.2,33.2-21.7,51.6c-2.7,16.4-6.1,32.8-8.8,49.3 c-1.2,3.7-1.9,7.7-2.6,11.6c18.9,0.3,37.8,0,56.7,0.2c7.2-0.2,14.4,0.2,21.6-0.3c4,9.2,3.1,19.6,1.8,29.3c-1.6,10.9-4.2,21.7-9.1,31.7 c-4.1,8.5-10.9,16.3-20.2,19.3c-4.8,1.9-10,1.5-15.1,1.5c-16.8,0-33.6,0.2-50.4,0c-2.7,12.3-4.5,24.9-6.9,37.4 c-4.4,24.3-8.7,48.7-13.1,73.1c-0.1,0.8-0.2,2.5-0.2,3.4v0.1c-43.7,0-87.3,0.1-131,0c0.1-0.4,0.2-1.1,0.3-1.5 c0.1-0.5,0.2-1.6,0.3-2.2c0.1,0.8,0.2,2.3,0.3,3c2.7,0.3,7.6,1.7,8.3-2.2c6.8-36.8,13.1-73.8,20.1-110.6c-2.7-0.6-5.5-0.6-8.3-0.1 c-0.4,1.4-0.8,2.8-1.3,4.2l0.6-4.5c-27.2-0.1-54.5,0-81.7-0.1c-6.6-0.2-13.4,0-20-0.8c-11.3-0.5-22.7-0.1-34-1.2 c-14,0-27.9-1.3-41.9-1.3c-11-1.1-22.1-0.7-33.2-1.2c-7.2-0.9-14.6-0.5-21.9-0.8c-11.9-1.3-24-0.4-35.9-1.7 c-12.6,0.1-25.2-1-37.8-1.3c0.1-0.1,0.2-0.5,0.2-0.6c4.2,0.1,8.3-0.2,12.5-0.3c9.3-1.2,18.7-0.4,28-1.7c9.7,0,19.3-1.3,29-1.3 c8.6-1.2,17.3-0.5,25.9-1.7c10.1,0,20-1.3,30.1-1.4c8.3-1.1,16.7-0.5,25-1.6c9.7,0.1,19.3-1.4,29-1.3c9.5-1.1,19.2-0.8,28.7-1.8 c-0.9-3.7-1.6-7.4-2.4-11.1c-0.7-2.3-3.5-1.8-5.3-2.1c-21.7-3.1-43.3-6.2-64.9-9.2c1.4-1.1,3.3-0.6,4.9-0.8c16.8-1.3,33.5-2.8,50.3-4 c3.8-0.2,7.5-0.9,11.3-1c-1.7-5.2-2.7-10.9-5-15.7c-35.9-5.5-71.8-10.4-107.6-16.3c9.3-1.5,18.7-2.2,28-3.2c40,0,80,0.3,120,0.1 c4.7-0.3,9.3,0.8,14,0.6c22,0.2,44,0.3,66,0.4c5,0,10.1,0.3,15.1-0.2c3.1-20,7-39.8,10.4-59.7c7.1-37.1,21.8-73.5,46.8-102.2 c14-16.8,31.3-30.8,50.5-41.4C508.47,300.39,520.67,296.09,532.87,292.39z"/>
    <path className="st8" d="M511.47,499.29c19,0.1,38.1-0.1,57.2,0.1c7.6,0,15.4,4.2,18.5,11.4c-7.2,0.5-14.4,0.1-21.6,0.3 c-18.9-0.2-37.8,0.1-56.7-0.2C509.57,506.99,510.27,502.99,511.47,499.29L511.47,499.29z M363.97,592.99c2.8-0.5,5.6-0.5,8.3,0.1 c-7,36.8-13.3,73.8-20.1,110.6c-0.7,3.9-5.6,2.5-8.3,2.2c-0.1-0.7-0.2-2.2-0.3-3c6.3-35.2,12.4-70.5,19.1-105.7 C363.17,595.79,363.57,594.39,363.97,592.99L363.97,592.99z"/>
    <path className="st10" d="M520.22,154.53c-0.8-1.5-0.9-3.3-0.9-5l-0.8,0.1c-1.2-4.4-4.9-8.6-9.7-8.8c-3.6-0.3-8.1-0.2-10.2,3.2 c-4,5.4-2.1,12.3-2.3,18.4c0,0.4,0.1,1.1,0.1,1.5c0,4.1-0.5,8.1-1.2,12.1c-0.6,1.2-0.9,2.5-0.9,3.9c-1.7,9.4-5.1,18.7-9.7,27.2 c-0.9,1.2-1.6,2.5-1.9,3.9c-3,5.2-6.6,10-10.3,14.8c-0.6,0.5-1.1,1.1-1.6,1.7c-2.6,3.2-5.4,5.9-8.3,8.7c-0.7,0.4-1.2,0.9-1.8,1.3 c-3.4,3.3-7.2,6.4-11.3,8.9c-0.5,0.3-1,0.7-1.6,1.1c-25.6,16.9-56.7,23.9-87,24.2c-25.7,0.8-51.6-4.7-74.8-15.8 c-0.4-0.2-1.4-0.6-1.8-0.8c-3.9-2.1-7.9-3.9-11.5-6.5c-0.8-0.4-1.6-0.9-2.5-1.3c-3.7-2.2-7.2-4.6-10.5-7.4c-1.1-1-2.3-1.8-3.5-2.7 c-3.6-2.9-7.3-6-10.4-9.5c-0.8-0.9-1.6-1.7-2.4-2.5c-10.9-11.3-19.4-25.1-23.9-40.1c-4.3-11.9-3.7-24.9-4.2-37.4 c-3.6-5.5-11.2-8.6-17.2-5.2c-2.5,1.8-2.8,5.1-4.7,7.4c-3.1,33,11,65.9,33.5,89.7c0,0.8,0.4,1.3,1.1,1.6c4,3.7,7.9,7.5,11.9,11.1 c0.7,0.7,1.5,1.4,2.4,2c4,3.3,8.3,6.3,12.5,9.4c0.8,0.6,1.6,1.1,2.5,1.6c5.5,3.2,10.7,7,16.6,9.2c0.4,0.3,1.1,0.8,1.5,1 c19,9.1,39.5,15.3,60.5,17.3c2.3,0,4.6,0.2,6.9,0.7c10,0.6,20,0.3,30,0.1c30.9-2.7,62.8-10.2,88.6-28.4l0.3,0.4 c0.8-0.7,1.5-1.3,2.3-1.9c4.1-3,8.1-6.2,12.1-9.5c0.9-0.7,1.9-1.5,2.8-2.4c4.4-4.8,9.5-9.2,13.2-14.7l0.6,0.3 c0.3-0.5,0.8-1.5,1.1-2c3.4-4.6,6.5-9.4,9.5-14.2c0.2-0.3,0.7-0.8,0.9-1.1l-0.4-0.4c0.3-0.4,1-1.2,1.3-1.6 c5.5-11.2,10.4-22.9,12.1-35.3c0.7-0.3,1.1-0.9,1.1-1.6c0.1-4,1.5-7.8,1.1-11.8C520.32,164.53,520.42,159.53,520.22,154.53 L520.22,154.53z"/>
    <g className="st11">
      <path className="st12" d="M185.74,151.16c8.11,2.54,26.73-3.85,32,2 M190.4,175.82c7.77-2.7,24.43-9.1,31.33-5.33 M198.4,200.49 c3.76,1.22,11.16-5.38,14.83-7.31c5.47-2.88,11.08-5.08,17.17-6.02 M210.4,226.49c3.87-5.5,8.51-10.08,14.1-13.98 c5.55-3.87,20.72-14.23,27.23-10.68 M221.74,245.16c4.4-3.49,6.19-9.68,10.8-13.35c5.58-4.44,14.14-5.24,19.86-7.98 M240.57,258.99c1.32-9.67,11.13-21.33,20.5-20.5 M255.07,272.49c4.95-0.5,9.14-11.58,12.49-15.33 c5.02-5.62,10.21-7.36,16.85-9.34 M283.74,284.49c-0.32-7,6.91-27.05,15.33-26 M305.07,291.16c-0.35-8.27,3.92-33.14,14-34 M327.07,304.49c-1.91-11.56-1.79-28.29,7.33-36.67 M354.4,307.16c-1.02-9.64-10.59-29.12,0-36.67 M383.74,300.49 c-4.57-5.3-7.23-26.21-5.33-32 M411.74,295.82c-3.53-6.4-7.9-12.42-9.23-19.85c-0.8-4.44,0.6-10.77-0.1-14.15 M435.07,285.82 c-7.65-5-9.77-23.39-7.33-31.33 M457.74,275.82c-5.44-11.67-11.24-20.72-11.33-34 M479.74,254.49c-8.45-5.69-19.24-16.02-18-27.33 M503.07,236.49c-12.84-2.85-28.26-14.34-36-24.67 M513.74,214.49c-9.27-1.99-39.88-13.93-38-26 M523.74,191.16 c-12.91-4.73-31.69-8.99-42-18 M530.4,169.82c-8.13,0.7-19.78-3.24-28.05-4.67c-9.18-1.58-17.69-4.68-26.62-6.67 M522.4,149.16 c-15.68,0.94-30.4-4.43-44.67-9.33"/>
    </g>
  </svg>
)

const MaybellineLogo = () => (
  <img src="/assets/maybelline_logo.svg" alt="Maybelline New York" style={{ height: '30px', objectFit: 'contain' }} />
)

const FrubonLogo = () => (
  <img src="/assets/frubon_logo.png" alt="Frubon" style={{ height: '34px', objectFit: 'contain' }} />
)

const SantoorLogo = () => (
  <img src="/assets/santoor_logo.png" alt="Santoor" style={{ height: '32px', objectFit: 'contain' }} />
)

const BrandMarquee = () => {
  const brandLogos = [
    { name: "Uber", component: <UberLogo /> },
    { name: "Airbnb", component: <AirbnbLogo /> },
    { name: "Flipkart", component: <FlipkartLogo /> },
    { name: "Maybelline", component: <MaybellineLogo /> },
    { name: "Frubon", component: <FrubonLogo /> },
    { name: "Santoor", component: <SantoorLogo /> }
  ]

  return (
    <div className="brand-marquee-container">
      <div className="brand-marquee-track">
        {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
          <div key={idx} className="brand-marquee-item">
            <div className="brand-logo-wrapper" style={{ display: 'inline-flex', alignItems: 'center', opacity: 0.9 }}>
              {brand.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const GridCard = ({ card, index, isActive }) => {
  const cellClasses = [
    'grid-card-a-vert',
    'grid-card-b-vert',
    'grid-card-c1-vert',
    'grid-card-c2-vert',
    'grid-card-d1-vert',
    'grid-card-d2-vert',
    'grid-card-e-vert',
    'grid-card-f-vert'
  ]

  const currentClass = cellClasses[index]

  if (card.type === 'info') {
    return (
      <div className={`grid-card-item card-type-info ${currentClass}`}>
        <div className="info-card-inner">
          <h4 className="info-card-title">{card.infoHeading}</h4>
          <p className="info-card-text">{card.infoText}</p>
          {card.link && (
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="info-card-btn font-typewriter">
              <span>{card.title}</span>
              <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`grid-card-item card-type-video ${currentClass}`}>
      <a href={card.link} target="_blank" rel="noopener noreferrer" className="grid-video-anchor">
        {card.isInstagram ? (
          <div className="grid-cover-image-container">
            <div className="grid-cover-full">
              <img src={card.fallbackImg} alt={card.title} className="grid-cover-img" />
            </div>
          </div>
        ) : (
          <div className="grid-player-wrapper" style={{ pointerEvents: 'none' }}>
            <div className="grid-player-full">
              <YouTubeEmbed videoId={card.videoId} isPlaying={isActive} className="grid-inline-video" isLanding={true} />
            </div>
          </div>
        )}

        <div className="grid-play-overlay">
          <div className="grid-play-circle">
            <Play fill="currentColor" size={20} />
          </div>
          <span className="grid-play-text">{card.isInstagram ? "VIEW REEL" : "WATCH VIDEO"}</span>
        </div>


      </a>
    </div>
  )
}

const PortfolioGridSection = ({ id, title, subtitle, cards, bgClass, isActive }) => {
  const isFourCardLayout = cards.length === 4;

  return (
    <section id={id} className={`paper-bg ${bgClass} slide-video-grid-refactored flex-center`}>
      <div className="grid-section-container">
        <div className="portfolio-custom-grid">
          {/* Card A (Index 0 - Vertical, Large) */}
          {cards[0] && <GridCard card={cards[0]} index={0} isActive={isActive} />}

          {/* Card B (Index 1 - Vertical, Large) */}
          {cards[1] && <GridCard card={cards[1]} index={1} isActive={isActive} />}

          {/* Card C1 (Index 2 - Vertical, Small) */}
          {!isFourCardLayout && cards[2] && <GridCard card={cards[2]} index={2} isActive={isActive} />}

          {/* Card C2 (Index 3 - Vertical, Small) */}
          {!isFourCardLayout && cards[3] && <GridCard card={cards[3]} index={3} isActive={isActive} />}

          {/* Title Area (Spans Columns 3 & 4, Row 2) */}
          <div className="grid-title-area-block font-typewriter">
            <span className="grid-label-small">{subtitle || "Project Embed Content"}</span>
            <h2 className="grid-title-heading">{title}</h2>
          </div>

          {/* Card D1 (Index 4 - Vertical, Small) */}
          {isFourCardLayout ? (
            cards[2] && <GridCard card={cards[2]} index={4} isActive={isActive} />
          ) : (
            cards[4] && <GridCard card={cards[4]} index={4} isActive={isActive} />
          )}

          {/* Card D2 (Index 5 - Vertical, Small) */}
          {isFourCardLayout ? (
            cards[3] && <GridCard card={cards[3]} index={5} isActive={isActive} />
          ) : (
            cards[5] && <GridCard card={cards[5]} index={5} isActive={isActive} />
          )}

          {/* Card E (Index 6 - Vertical, Small) */}
          {!isFourCardLayout && cards[6] && <GridCard card={cards[6]} index={6} isActive={isActive} />}

          {/* Card F (Index 7 - Vertical, Small) */}
          {!isFourCardLayout && cards[7] && <GridCard card={cards[7]} index={7} isActive={isActive} />}
        </div>
      </div>
    </section>
  )
}

function App() {
  const brandCards = [
    {
      type: "video",
      title: "UBER CAMPAIGN",
      videoId: "xbNwqHPjYe8",
      link: "https://youtube.com/shorts/xbNwqHPjYe8",
      duration: "00:30",
      fallbackImg: "/assets/1.JPG"
    },
    {
      type: "video",
      title: "FLIPKART AD",
      videoId: "YRwePMv-Ywo",
      link: "https://youtube.com/shorts/YRwePMv-Ywo",
      duration: "00:30",
      fallbackImg: "/assets/2.JPG"
    },
    {
      type: "video",
      title: "AIRBNB PROMOTION",
      videoId: "7N9ksd9NwLA",
      link: "https://youtube.com/shorts/7N9ksd9NwLA",
      duration: "00:30",
      fallbackImg: "/assets/3.JPG"
    },
    {
      type: "video",
      title: "LAKMÉ SPOT",
      videoId: "stnBHSzNjZc",
      link: "https://youtube.com/shorts/stnBHSzNjZc",
      duration: "00:30",
      fallbackImg: "/assets/1.JPG"
    },
    {
      type: "video",
      title: "MAYBELLINE COMMERCIAL",
      videoId: "R9h6g1Ebmj0",
      link: "https://youtube.com/shorts/R9h6g1Ebmj0",
      duration: "00:30",
      fallbackImg: "/assets/2.JPG"
    },
    {
      type: "video",
      title: "COMMERCIAL SHORT",
      videoId: "QRC2APXPz1w",
      link: "https://youtube.com/shorts/QRC2APXPz1w",
      duration: "00:30",
      fallbackImg: "/assets/3.JPG"
    },
    {
      type: "video",
      title: "BRAND SHOWCASE",
      videoId: "N2wWsKj50O4",
      link: "https://youtube.com/shorts/N2wWsKj50O4",
      duration: "00:30",
      fallbackImg: "/assets/1.JPG"
    },
    {
      type: "video",
      title: "CREATIVE AD",
      videoId: "HZLhfNCHkeQ",
      link: "https://youtube.com/shorts/HZLhfNCHkeQ",
      duration: "00:30",
      fallbackImg: "/assets/2.JPG"
    }
  ]

  const youtubeCards = [
    {
      type: "video",
      title: "YOUTUBE VIDEO 1",
      videoId: "z31a1zamdFk",
      link: "https://youtu.be/z31a1zamdFk",
      duration: "00:30",
      fallbackImg: "/assets/3.JPG"
    },
    {
      type: "video",
      title: "YOUTUBE VIDEO 2",
      videoId: "5uusWZ8kPTI",
      link: "https://youtube.com/shorts/5uusWZ8kPTI?feature=share",
      duration: "00:30",
      fallbackImg: "/assets/2.JPG"
    },
    {
      type: "video",
      title: "YOUTUBE VIDEO 3",
      videoId: "0seecMOhWNM",
      link: "https://youtube.com/shorts/0seecMOhWNM?feature=share",
      duration: "00:30",
      fallbackImg: "/assets/1.JPG"
    },
    {
      type: "video",
      title: "YOUTUBE VIDEO 4",
      videoId: "0seecMOhWNM",
      link: "https://youtube.com/shorts/0seecMOhWNM?feature=share",
      duration: "00:30",
      fallbackImg: "/assets/2.JPG"
    },
    {
      type: "video",
      title: "YOUTUBE VIDEO 5",
      videoId: "JyhQZxSLKEM",
      link: "https://youtube.com/shorts/JyhQZxSLKEM?feature=share",
      duration: "00:30",
      fallbackImg: "/assets/3.JPG"
    },
    {
      type: "video",
      title: "YOUTUBE VIDEO 6",
      videoId: "o7toa_AlCyM",
      link: "https://youtube.com/shorts/o7toa_AlCyM?feature=share",
      duration: "00:30",
      fallbackImg: "/assets/1.JPG"
    },
    {
      type: "video",
      title: "AI VIDEO MUSIC",
      videoId: "hAPMkwVhyH0",
      link: "https://youtu.be/hAPMkwVhyH0",
      duration: "00:50",
      fallbackImg: "/assets/2.JPG"
    },
    {
      type: "video",
      title: "AI VIDEOS STORY",
      videoId: "gorO-trrZqU",
      link: "https://youtu.be/gorO-trrZqU",
      duration: "00:40",
      fallbackImg: "/assets/1.JPG"
    }
  ]

  const socialCards = [
    {
      type: "video",
      title: "IMAN GADZI SHORT",
      videoId: "CsRG_IbMUaA",
      link: "https://youtu.be/CsRG_IbMUaA",
      duration: "01:00",
      fallbackImg: "/assets/Reel_1.PNG"
    },
    {
      type: "video",
      title: "INSTAGRAM REEL 1",
      videoId: "DR42O8oj0Hs",
      link: "https://www.instagram.com/reel/DR42O8oj0Hs/",
      isInstagram: true,
      duration: "00:30",
      fallbackImg: "/assets/Reel_1.PNG"
    },
    {
      type: "video",
      title: "INSTAGRAM REEL 2",
      videoId: "DRUuSxODAoW",
      link: "https://www.instagram.com/reel/DRUuSxODAoW/",
      isInstagram: true,
      duration: "00:30",
      fallbackImg: "/assets/Reel_2.PNG"
    },
    {
      type: "video",
      title: "INSTAGRAM REEL 3",
      videoId: "DLaZv14Iw0v",
      link: "https://www.instagram.com/reel/DLaZv14Iw0v/",
      isInstagram: true,
      duration: "00:30",
      fallbackImg: "/assets/Reel_3.PNG"
    },
  ]

  const [activeSectionId, setActiveSectionId] = useState("landing-slide")

  useEffect(() => {
    const sections = document.querySelectorAll('.snap-container > section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id)
        }
      })
    }, {
      threshold: 0.25
    })

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

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

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="snap-container">
      {/* Slide 1: Landing (Inspired by 1.png) */}
      <section id="landing-slide" className="paper-bg slide-landing-refactored">
        <div className="top-nav-bar font-typewriter">
          <span className="nav-role">CINEMATOGRAPHER & EDITOR</span>
          <span className="nav-name">SHUBHAM SAKET</span>
        </div>

        {/* Film Frame Center Video */}
        <div className="film-frame-center-wrapper">
          <div className="film-frame-border-outer">
            <div className="film-frame-border-inner">
              <YouTubeEmbed
                videoId="Fc20-QLCpI8"
                isPlaying={activeSectionId === 'landing-slide'}
                className="landing-refactored-video"
                isLanding={true}
              />
              <div className="grain-overlay" />
            </div>
          </div>
        </div>

        <div className="landing-bottom-layout">
          {/* Large Portfolio Text Centered Bottom */}
          <div className="portfolio-heading-wrapper font-typewriter">
            <h1 className="portfolio-heading-text">PORTFOLIO</h1>
          </div>
        </div>
      </section>

      {/* Slide 2: About / Resume (Inspired by 2.png) */}
      <section id="about-slide" className="paper-bg about-resume-section flex-center">
        <div className="about-resume-container">
          
          {/* Left Column: Profile, Bio, Contact */}
          <div className="about-left-col font-typewriter">
            <div className="profile-image-wrapper">
              <img src="/assets/DP.jpeg" alt="Shubham Saket" className="profile-image-circular" />
            </div>
            <div className="about-bio-text">
              <p>
                I’m Shubham Saket, a Video Editor and Cinematographer with 2+ years of experience creating high-impact content for brands including Uber, Flipkart, Airbnb, Lakmé, and Maybelline.
              </p>
              <p>
                Combining storytelling, cinematography, and post-production expertise, I craft content that captures attention, engages audiences, and delivers results.
              </p>
            </div>
            
            <div className="about-contact-block">
              <h3 className="about-contact-title">CONTACT</h3>
              <p className="about-contact-item">work.bysaket@gmail.com</p>
              <p className="about-contact-item">+91 74886 52523</p>
              <div className="about-social-links">
                <a href="https://www.instagram.com/saket.raw/?hl=en" target="_blank" rel="noopener noreferrer">@saket.raw</a>
                <a href="https://www.linkedin.com/in/shubham-saket-223261230/" target="_blank" rel="noopener noreferrer">/shubhamsaket</a>
              </div>
            </div>
          </div>

          {/* Right Column: Name + Details Grid */}
          <div className="about-right-col font-typewriter">
            <h1 className="about-main-name">SHUBHAM SAKET</h1>
            
            <div className="about-details-grid">
              
              {/* Row 1, Col 1: Education */}
              <div className="details-block">
                <h3 className="details-heading">EDUCATION</h3>
                <div className="details-content-wrapper">
                  <p className="details-bold">Manipal University</p>
                  <p className="details-light">B.Tech in Computer & Communication Engineering</p>
                </div>
              </div>
              
              {/* Row 1, Col 2: Skills */}
              <div className="details-block">
                <h3 className="details-heading">SKILLS</h3>
                <div className="details-content-wrapper">
                  <ul className="details-list-plain">
                    <li>Premiere Pro</li>
                    <li>After Effects</li>
                    <li>DaVinci Resolve</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>

              {/* Row 2, Col 1: Work Experience */}
              <div className="details-block">
                <h3 className="details-heading">WORK EXPERIENCE</h3>
                <div className="details-content-wrapper">
                  <p className="details-bold">Freelance Video Specialist</p>
                  <p className="details-light">2+ years of video editing & cinematography</p>
                  <div style={{ marginTop: '12px' }}>
                    <p className="details-bold">Confluencer</p>
                    <p className="details-light">Creative Marketing & Editing Intern (3 Months)</p>
                  </div>
                </div>
              </div>

              {/* Row 2, Col 2: Interests */}
              <div className="details-block">
                <h3 className="details-heading">INTERESTS</h3>
                <div className="details-content-wrapper">
                  <ul className="details-list-plain">
                    <li>Cinematography</li>
                    <li>Video Editing</li>
                    <li>Storytelling</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* Marquee Strip (Right to Left Brand Logos) */}
      <BrandMarquee />

      {/* Slide 3: Video for Brands (Inspired by 3.png & Screenshot layout) */}
      <PortfolioGridSection
        id="brands-slide"
        title="VIDEO FOR BRANDS"
        subtitle="Project Embed Content"
        cards={brandCards}
        bgClass="theme-light-grey"
        isActive={activeSectionId === 'brands-slide'}
      />

      {/* Slide 4: YouTube Category (Inspired by 4.png & Screenshot layout) */}
      <PortfolioGridSection
        id="youtube-slide"
        title="YOUTUBE"
        subtitle="BLOG/PODCAST/INTERVIEW/SHOW"
        cards={youtubeCards}
        bgClass="theme-slate-blue"
        isActive={activeSectionId === 'youtube-slide'}
      />

      {/* Slide 5: Social Media / Reels (Inspired by 5.png & Screenshot layout) */}
      <PortfolioGridSection
        id="social-slide"
        title="SOCIAL MEDIA"
        subtitle="Project Embed Content"
        cards={socialCards}
        bgClass="theme-light-grey"
        isActive={activeSectionId === 'social-slide'}
      />

      {/* Slide 6: Contact form (Based on original contact block) */}
      <section id="contact-slide" className="paper-bg slide-contact-refactored flex-center">
        <div className="contact-section-refactored font-typewriter">
          <h2 className="contact-section-title">GET IN TOUCH</h2>

          <div className="contact-card-refactored">
            <form onSubmit={handleSubmit} className="contact-form-refactored">
              <div className="form-group-refactored">
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

              <div className="form-group-refactored">
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

              <div className="form-group-refactored">
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
                className="submit-btn-refactored"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </motion.button>
            </form>

            <div className="contact-footer-refactored">
              <div className="social-links-flat">
                <a href="https://www.instagram.com/saket.raw/?hl=en" target="_blank" rel="noopener noreferrer" className="social-item-flat">
                  <Instagram size={20} /> <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/shubham-saket-223261230/" target="_blank" rel="noopener noreferrer" className="social-item-flat">
                  <Linkedin size={20} /> <span>Linkedin</span>
                </a>
                <a href="mailto:work.bysaket@gmail.com" className="social-item-flat">
                  <Mail size={20} /> <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: Thank You */}
      <footer className="paper-bg thank-you-footer flex-center font-typewriter">
        <h2 className="thank-you-text">THANK YOU</h2>
      </footer>
    </div>
  )
}

export default App
