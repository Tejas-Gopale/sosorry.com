import React, { useEffect, useState } from "react";
import "./SorryJ.css";

// 🖼️ IMPORT YOUR MEMORIES (images + videos)
import img1 from "../assets/Jyoti.webp";
import img2 from "../assets/jyoti2.webp";
import img3 from "../assets/jyoti4.webp";

import video1 from "../assets/media.mp4";

const SorryJ = () => {
  const fullMessage = `प्रिय ज्योती,

माझ्या मनातून माफी मागायची आहे. गेल्या काळात माझ्या चुकीच्या वागणुकीमुळे तुला वेदना दिल्या, हे मला मनापासून दुःख आहे. मी खरंच तुझ्यावर प्रेम करतो आणि फक्त तुझ्या प्रेमालाच महत्त्व दिलं पाहिजे होतं. मी माझ्या चुका मान्य करतो आणि तुझा विश्वास हरवला हे जाणून मला खूप दुःख होतं.

सध्या मी पूर्णपणे बदलायला तयार आहे, आणि तुझ्या प्रेमासाठी माझ्या आयुष्यात सुधारणा करायला इच्छुक आहे. मला तुझ्याकडून एक संधी हवी आहे — तिसरी संधी. मला माहिती आहे की हे सोपं नाही, पण माझं प्रेम खरं आणि ठाम आहे.

जर तू मला माफ करू शकलीस आणि एक संधी दिली, तर मी तुझ्या प्रेमाला आणि विश्वासाला कधीही कमी पडू देणार नाही. तुझ्या प्रत्येक वेदनेची जबाबदारी मी घेणार आहे.

कृपया माझ्या या विनंतीला दिलासा दे. तुझं प्रेम आणि सोबत माझ्यासाठी खूप महत्त्वाचं आहे.

तुझा सदैव ❤️  
Gopale Tejas`;

  // Typewriter
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    setText("");

    const typing = () => {
      if (i < fullMessage.length) {
        setText((prev) => prev + fullMessage.charAt(i));
        i++;
        setTimeout(typing, 20);
      }
    };

    setTimeout(typing, 500);
  }, []);

  // Floating Hearts
  const createHearts = () => {
    const container = document.getElementById("heartsLayer");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 12; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 90 + "%";
      heart.style.animationDuration = 4 + Math.random() * 4 + "s";
      heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="100%" height="100%">
          <path d="M23.6,0c-2.7,0-5.1,1.4-6.6,3.6C15.5,1.4,13.1,0,10.4,0
          C4.7,0,0,4.7,0,10.4C0,20.4,16,29.6,16,29.6s16-9.2,16-19.2
          C32,4.7,27.3,0,21.6,0z"
          fill="#ff6b81"/>
        </svg>
      `;
      container.appendChild(heart);
    }
  };

  useEffect(() => {
    createHearts();
  }, []);

  // WhatsApp Redirect
  const sendToWhatsApp = () => {
    window.location.href = `https://wa.me/917720811386?text=I%20forgive%20you%20❤️`;
  };

  // Photos array
  const photos = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sorry-card">
      <div className="shine"></div>

      <div className="top">
        <div className="badge">
          <div className="sorry-text">SORRY</div>
        </div>

        <div className="title">
          <h1>For Jyoti — Please forgive me</h1>
          <h2>Every word is from my heart...</h2>
        </div>
      </div>

      <div className="content">
        <div className="message-box">
          <div className="name-line">
            <div className="circle-j">J</div>
            <div className="hey">Hello J,</div>
          </div>

          <div className="apology marathi-text">{text}</div>

          <div className="buttons">
            <button className="whatsapp-btn" onClick={sendToWhatsApp}>
              Reply on WhatsApp 💬
            </button>
          </div>
        </div>

        {/* ❤️ MEMORY SLIDESHOW */}
        {/* <div className="memory-box">
          <img src={photos[index]} alt="Memory" className="memory-photo" />
          <p>Our beautiful memories ❤️</p>
        </div> */}

        {/* 🎥 LOVING VIDEO BOX
        <div className="video-box">
          <video src={video1} autoPlay loop muted />
          <p>Some moments I always cherish… 💗</p>
        </div> */}
      </div>

      <div id="heartsLayer"></div>
    </div>
  );
};

export default SorryJ;
