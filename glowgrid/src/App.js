import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 font-poppins pt-32">
      <div className="fixed top-8 z-50 w-80 h-auto">
        <div className="relative w-full h-auto overflow-hidden">
          <img
            src="https://i.ibb.co/zV9HFnd/glowgrid-media.png"
            alt="GlowGrid Logo"
            className="w-full h-auto animate-glow-logo"
          />
        </div>
      </div>

      <div className="mt-44 space-x-8 mb-12 text-sm font-medium tracking-wider uppercase">
        <a href="#about" className="hover:text-orange-400 transition">About</a>
        <a href="#services" className="hover:text-orange-400 transition">Services</a>
        <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
      </div>

      <form className="w-full max-w-md space-y-4 text-sm font-medium tracking-wider uppercase">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-md bg-white text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md bg-white text-black"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 rounded-md bg-white text-black"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="text-white border border-white px-6 py-2 rounded-md hover:text-orange-400 transition font-blinktwice"
        >
          Send
        </button>
      </form>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        @font-face {
          font-family: 'BlinkTwice';
          src: url('/fonts/BlinkTwice-Regular.woff2') format('woff2'),
               url('/fonts/BlinkTwice-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }

        .font-blinktwice {
          font-family: 'BlinkTwice', sans-serif;
        }

        .animate-glow-logo {
          filter: drop-shadow(0 0 1px #fb923c);
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 1px #fb923c);
          }
          50% {
            filter: drop-shadow(0 0 4px #fb923c);
          }
        }
      `}</style>
    </div>
  );
}

export default App;