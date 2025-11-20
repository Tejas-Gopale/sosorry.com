import React, { useEffect, useState } from "react";
import "./SorryJ.css";

const SorryJ = () => {
  const fullMessage = `J —

I am deeply sorry. I know my words and actions hurt you, and for that there is no excuse. You mean more to me than my pride, and losing the warmth of your smile is a painful reminder of what I risked by not listening.

I take full responsibility. I promise to learn from this, to listen better, and to protect the love and trust you give me every day. I will show you, with my actions, how much you matter.

Please forgive me, J. My heart is yours — always.`;

  const [text, setText] = useState("");
  const [showFull, setShowFull] = useState(false);

  // ✨ Typewriter effect
  useEffect(() => {
    if (showFull) return setText(fullMessage);

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
  }, [showFull]);

  // ✨ Floating hearts animation
  const createHearts = () => {
    const container = document.getElementById("heartsLayer");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";

      heart.style.left = Math.random() * 90 + "%";
      heart.style.animationDuration = 4 + Math.random() * 4 + "s";

      heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="100%" height="100%">
          <path d="M23.6,0c-2.7,0-5.1,1.4-6.6,3.6C15.5,1.4,13.1,0,10.4,0C4.7,0,0,4.7,0,10.4C0,20.4,16,29.6,16,29.6s16-9.2,16-19.2C32,4.7,27.3,0,21.6,0z" fill="#ff6b81"/>
        </svg>
      `;

      container.appendChild(heart);
    }
  };

  useEffect(() => {
    createHearts();
  }, []);

  return (
    <div className="sorry-card">
      <div className="shine"></div>

      <div className="top">
        <div className="badge">
          <div className="sorry-text">SORRY</div>
        </div>

        <div className="title">
          <h1>For J — Please forgive me</h1>
          <h2>I wrote this truly from my heart...</h2>
        </div>
      </div>

      <div className="content">
        <div className="message-box">
          <div className="name-line">
            <div className="circle-j">J</div>
            <div className="hey">Hello J,</div>
          </div>

          <div className="apology">{text}</div>

          <div className="buttons">
            <button onClick={() => setShowFull(false)}>Replay</button>
            <button onClick={() => setShowFull(true)}>Show Full</button>
          </div>
        </div>

        <div className="gif-box">
          <img
            src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
            alt="Love GIF"
          />
          <p>Every heartbeat is saying I'm sorry 💗</p>
        </div>
      </div>

      <div id="heartsLayer"></div>
    </div>
  );
};

export default SorryJ;
