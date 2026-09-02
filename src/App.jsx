import { useState } from "react";

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function CodeIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

function LockIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        width="18"
        height="11"
        x="3"
        y="11"
        rx="2"
      />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <path d="M12 15v3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
      />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2A11 11 0 0 1 12 5.8c1 0 2 .1 2.9.4C17.1 4.7 18.1 5 18.1 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.4 11.4 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M5.4 7.8H1.8V19h3.6V7.8ZM3.6 2.2A2.1 2.1 0 1 0 3.6 6.4a2.1 2.1 0 0 0 0-4.2ZM22.2 12.6c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9V7.8h-3.6V19h3.6v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V19h3.6l-.2-6.4Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = () =>
    setMenuOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold"
          >
            Umair
            <span className="text-blue-500">
              .
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex border border-blue-500 px-4 py-2 text-sm rounded-lg hover:bg-blue-500 transition"
          >
            Hire Me
          </a>

          <button
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
            className="md:hidden w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg"
          >
            {menuOpen
              ? <CloseIcon />
              : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-zinc-950">
            <div className="px-6 py-5 flex flex-col gap-5 text-zinc-300">
              <a
                href="#home"
                onClick={
                  closeMenu
                }
              >
                Home
              </a>

              <a
                href="#about"
                onClick={
                  closeMenu
                }
              >
                About
              </a>

              <a
                href="#skills"
                onClick={
                  closeMenu
                }
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={
                  closeMenu
                }
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={
                  closeMenu
                }
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={
                  closeMenu
                }
                className="w-fit border border-blue-500 px-4 py-2 rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-24 md:pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-500 font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Umair Zahid
            </h1>

            <h2 className="text-2xl md:text-3xl text-zinc-400 mt-4">
              Full Stack MERN
              Developer
            </h2>

            <p className="text-zinc-400 mt-6 max-w-xl leading-7">
              I build modern,
              responsive and
              full-stack web
              applications using
              React, Node.js,
              Express.js and
              MongoDB.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition"
              >
                View My Work
                <ExternalIcon />
              </a>

              <a
                href="/Umair_Zahid_CV.pdf"
                download="Umair_Zahid_CV.pdf"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-lg font-medium transition"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/10 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-5">
                  <CodeIcon
                    size={88}
                  />
                </div>

                <p className="text-zinc-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-500 font-medium mb-3">
                About Me
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building ideas into
                <span className="text-blue-500">
                  {" "}
                  real applications.
                </span>
              </h2>

              <p className="text-zinc-400 leading-7 mb-4">
                I'm a Computer
                Science graduate and
                Full Stack MERN
                Developer focused on
                building modern,
                responsive and
                user-friendly web
                applications.
              </p>

              <p className="text-zinc-400 leading-7">
                I enjoy working
                across both frontend
                and backend
                development, from
                creating clean React
                interfaces to
                building REST APIs,
                authentication
                systems and
                database-driven
                applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-500">
                  02+
                </h3>

                <p className="text-zinc-400 mt-2">
                  Full Stack Projects
                </p>
              </div>

              <div className="border border-white/10 bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-500">
                  MERN
                </h3>

                <p className="text-zinc-400 mt-2">
                  Primary Stack
                </p>
              </div>

              <div className="border border-white/10 bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-500">
                  REST
                </h3>

                <p className="text-zinc-400 mt-2">
                  API Development
                </p>
              </div>

              <div className="border border-white/10 bg-zinc-900 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-500">
                  100%
                </h3>

                <p className="text-zinc-400 mt-2">
                  Responsive Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 bg-zinc-900/40"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-500 font-medium mb-3">
              My Skills
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Technologies I Work
              With
            </h2>

            <p className="text-zinc-400 mt-4">
              Tools and
              technologies I use to
              build full-stack
              applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-5 text-blue-500">
                Frontend
              </h3>

              <div className="space-y-3 text-zinc-300">
                <p>React.js</p>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Tailwind CSS</p>
                <p>Vite</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-5 text-blue-500">
                Backend
              </h3>

              <div className="space-y-3 text-zinc-300">
                <p>Node.js</p>
                <p>Express.js</p>
                <p>REST APIs</p>
                <p>Socket.IO</p>
                <p>JWT</p>
                <p>bcrypt</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-5 text-blue-500">
                Database
              </h3>

              <div className="space-y-3 text-zinc-300">
                <p>MongoDB</p>
                <p>MongoDB Atlas</p>
                <p>Mongoose</p>
              </div>
            </div>

            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-5 text-blue-500">
                Tools
              </h3>

              <div className="space-y-3 text-zinc-300">
                <p>Git</p>
                <p>GitHub</p>
                <p>Postman</p>
                <p>VS Code</p>
                <p>Vercel</p>
                <p>Render</p>
                <p>Cloudinary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-500 font-medium mb-3">
              My Projects
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Work
            </h2>

            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              A selection of
              projects that
              showcase my frontend,
              backend, database and
              full-stack
              development skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PROJECT 1 - UMAIRSTORE */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 transition duration-300">
              <div className="h-48 overflow-hidden bg-zinc-950">
                <img
                  src="/umairstore.png"
                  alt="UmairStore E-Commerce Project"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-blue-500 text-sm font-medium mb-2">
                  Full Stack MERN
                  E-Commerce
                </p>

                <h3 className="text-xl font-bold mb-3">
                  UmairStore
                </h3>

                <p className="text-zinc-400 text-sm leading-6 mb-5">
                  A responsive
                  full-stack
                  e-commerce
                  application with
                  authentication,
                  products, cart,
                  checkout, orders,
                  user dashboard and
                  admin
                  functionality.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    React
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    Node.js
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    Express
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    MongoDB
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    Tailwind
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://umairstore.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Live Demo
                    <ExternalIcon />
                  </a>

                  <a
                    href="https://github.com/umairzahid16005-ui/umairstore"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT 2 - SECURECHAT */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-[#06111f] via-[#07101a] to-zinc-950 flex items-center justify-center overflow-hidden relative">
                <div className="absolute w-44 h-44 bg-blue-600/20 blur-3xl rounded-full" />

                <div className="relative w-[88%] max-w-[340px] border border-blue-500/20 bg-[#080d14] rounded-xl shadow-2xl overflow-hidden">
                  <div className="h-9 border-b border-white/10 px-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-[9px] font-bold">
                        S
                      </div>

                      <span className="text-[10px] font-semibold">
                        SecureChat
                      </span>
                    </div>

                    <span className="text-[7px] text-emerald-400">
                      ● Encrypted
                    </span>
                  </div>

                  <div className="grid grid-cols-[34%_66%] h-28">
                    <div className="border-r border-white/10 p-2 space-y-2">
                      <div className="h-4 rounded bg-zinc-800" />
                      <div className="h-6 rounded bg-blue-500/20 border border-blue-500/20" />
                      <div className="h-6 rounded bg-zinc-800/70" />
                    </div>

                    <div className="p-3 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-[7px] px-3 py-2 rounded-lg">
                          Secure message
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div className="bg-zinc-800 text-[7px] px-3 py-2 rounded-lg">
                          🔒 Open once
                        </div>
                      </div>

                      <div className="h-5 border border-white/10 bg-zinc-900 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-blue-500 text-sm font-medium mb-2">
                  Secure Real-Time
                  Messaging Platform
                </p>

                <h3 className="text-xl font-bold mb-3">
                  SecureChat
                </h3>

                <p className="text-zinc-400 text-sm leading-6 mb-5">
                  A full-stack
                  encrypted
                  real-time chat
                  application with
                  secure messaging,
                  Socket.IO,
                  one-time messages,
                  ghost messages,
                  read receipts,
                  typing indicators,
                  online status,
                  user profiles and
                  blocking.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    React
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    TypeScript
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    Node.js
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    MongoDB
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    Socket.IO
                  </span>

                  <span className="text-xs border border-white/10 px-3 py-1 rounded-full">
                    Web Crypto
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://secure-chat-ten-omega.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Live Demo
                    <ExternalIcon />
                  </a>

                  <span className="inline-flex items-center gap-2 border border-zinc-700 px-4 py-2 rounded-lg text-sm text-zinc-400">
                    <LockIcon
                      size={15}
                    />
                    Private Repo
                  </span>
                </div>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="bg-zinc-900 border border-dashed border-white/20 rounded-2xl min-h-[430px] flex items-center justify-center">
              <div className="text-center px-6">
                <div className="flex justify-center text-blue-500 mb-5">
                  <CodeIcon />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  Project #3
                </h3>

                <p className="text-zinc-500">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-zinc-900/40 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-500 font-medium mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Work Together
            </h2>

            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
              Have a project,
              opportunity or
              collaboration in
              mind? Feel free to
              contact me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <a
              href="mailto:umair.zahid16005@gmail.com"
              className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition"
            >
              <div className="flex justify-center mb-4 text-blue-500">
                <MailIcon />
              </div>

              <h3 className="font-semibold mb-2">
                Email
              </h3>

              <p className="text-zinc-400 text-sm break-all">
                umair.zahid16005@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/umairzahid16005-ui"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition"
            >
              <div className="flex justify-center mb-4 text-blue-500">
                <GithubIcon />
              </div>

              <h3 className="font-semibold mb-2">
                GitHub
              </h3>

              <p className="text-zinc-400 text-sm">
                View my repositories
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/umair-zahid-8815882a5"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition"
            >
              <div className="flex justify-center mb-4 text-blue-500">
                <LinkedinIcon />
              </div>

              <h3 className="font-semibold mb-2">
                LinkedIn
              </h3>

              <p className="text-zinc-400 text-sm">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="font-bold">
            Umair
            <span className="text-blue-500">
              .
            </span>
          </h2>

          <p className="text-zinc-500 text-sm text-center">
            © 2026 Umair Zahid.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;