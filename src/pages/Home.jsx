import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import HTML from "../assets/html5.svg"
import CSS from "../assets/css3.svg"
import Javascript from "../assets/javascript.svg"
import PHP from "../assets/php.svg"
import Dart from "../assets/dart.svg"
import React from "../assets/react.svg"
import Ex from "../assets/express.svg"
import Node from "../assets/nodejs.svg"
import Laravel from "../assets/laravel.svg"
import Flutter from "../assets/flutter.svg"
import Mysql from "../assets/mysql.svg"
import Sql from "../assets/sqlite.svg"
import Trello from "../assets/trello.svg"
import Git from "../assets/git.svg"
import Tailwind from "../assets/tailwind.svg"
import Bootstrap from "../assets/bootstrap.svg"
import Figma from "../assets/figma.svg"
import Diskom from "../assets/diskom.png"
import Bagiankerjasama from "../assets/bagiankerjasama.png"
import Sapu from "../assets/sapu.svg"
import Hoax from "../assets/hoax.svg"
import SWM from "../assets/swm.png"
import Eo from "../assets/esaoutline.png"
import Diwd from "../assets/Diwd.jpg"
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export default function Home({ text = "ESA KURNIAWAN PUTRA", speed = 100 }) {
  const LETTERS = "ABCDE62^*@GHE*H1M({K`F`=-+QWFYJK];KOLP!KSAWSFGHHJ+";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let iteration = 0;
    let interval;

    const animate = () => {
      interval = setInterval(() => {
        const newText = text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("");

        setDisplay(newText);

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 2;
      }, speed);
    };

    animate();
    return () => clearInterval(interval);
  }, [text, speed]);

  const footerRef = useRef(null);

  const skill = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Java Script", icon: Javascript },
    { name: "PHP", icon: PHP },
    { name: "Dart", icon: Dart },
    { name: "React", icon: React },
    { name: "Express JS", icon: Ex },
    { name: "Node JS", icon: Node },
    { name: "Tailwind", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Laravel", icon: Laravel },
    { name: "Flutter", icon: Flutter },
    { name: "MySQL", icon: Mysql },
    { name: "SqLite", icon: Sql },
    { name: "Git", icon: Git },
    { name: "Trello", icon: Trello },
    { name: "Figma", icon: Figma },
  ]
  return (
    <div className="paw-bg">
      <div id="home" className="h-screen">
        <Navbar onContact={() => {
          console.log("diclik");

          footerRef.current.scrollIntoView({ behavior: "smooth" })
        }
        } />
        <div className="flex flex-col col-span-2">

          <div className="absolute top-1/3 left-1/6">

            <p className="text-6xl ">Hallo I'm 👋</p>
            <h1 className="text-4xl font-bold tracking-wide font-Roboto-Mono my-4">
              {display}
            </h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 2, y: 4 }}
              transition={{ duration: 2 }}
            >
              <div>
                <p className=" text-shadow-2xs">
                  <span className="font-semibold text-yellow-600 hover:text-yellow-500">
                    Full Stack Web Developer
                  </span> & <span className="font-semibold text-yellow-600 hover:text-yellow-500">
                    Mobile Developer
                  </span>
                </p>
              </div>
            </motion.span>
          </div>
        </div>
        <a href="#footer"
          className="hover:cursor-pointer bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 absolute bottom-1/3 left-1/6  ">Contact me</a>
        <div className="absolute right-0 bottom-0 w-[450px] overflow-hidden">
          <img
            src={Eo}
            alt=""
            className="w-full translate-y-[80px]"
          />
        </div>


      </div>

      <div id="about" className="px-10 py-24 text-gray-900 h-screen bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide">
          <span className="pb-2 border-b-4 border-yellow-500">ABOUT ME</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Foto atau ilustrasi */}
          <div className="flex justify-center">
            <img
              src="esa-pp.svg"
              alt="About Me"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-black bg-yellow-400"
            />
          </div>

          {/* Teks About Me */}
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Hi, I'm Esa 👋</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <span className="font-semibold text-yellow-600">Full Stack Web Developer</span>
              & <span className="font-semibold text-yellow-600">Mobile Developer</span> with a strong focus on building modern, efficient, and user-friendly applications.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Experienced in working with technologies such as React, Laravel, Flutter, Node.js, MySQL, and TailwindCSS, with a solid ability to solve problems and transform ideas into real digital solutions.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Open to collaboration, new challenges, and impactful projects. Let’s create something meaningful together!
            </p>
          </div>

        </div>
      </div>

      <div
        id="Tech Stack"
        className="px-10 py-24 text-gray-900">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-wide">
          <span className="pb-2 border-b-4 border-yellow-500">Tech Stack</span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skill.map((skill, index) => (
            <div key={index}
              className="flex flex-col items-center group hover:-translate-y-2 transition-all">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-3 group-hover:scale-110 transition" />
              <p className="font-medium">


                {skill.name}
              </p>
            </div>
          ))}

        </div>
      </div>


      <div id="projects" className="px-10 py-16 bg-white text-gray-900">
        <h2 className="text-3xl font-extrabold text-center mb-12 tracking-wide">
          <span className="pb-1 border-b-4 border-yellow-500">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              img: Diskom,
              title: "Project Management Office",
              desc: "Dashboard monitoring dan tracking status project.",
              tech: ["Java Script", "React", "Express", "Node", "MySQL", "Tailwind"]
            },
            {
              img: Diwd,
              title: "Disaster Warning Dashboard",
              desc: "Visualisasi data dan monitoring laporan bencana.",
              tech: ["Java Script", "Python", "React", "Express", "Node", "MySQL", "MongoDB", "Tailwind"]
            },
            {
              img: Bagiankerjasama,
              title: "Sistem Kerjasama Kota Bandung",
              desc: "Pengelolaan pengajuan kerjasama pemerintah.",
              tech: ["Laravel", "PHP", "MySQL", "Bootstrap"]
            },
            {
              img: Sapu,
              title: "SAPU Mobile App",
              desc: "Aplikasi Saluran Aspirasi dan Pengaduan Umum Siswa SMP/SMA/SMK",
              tech: ["Flutter", "Dart", "SQLite"]
            },
            {
              img: SWM,
              title: "Smart Waste Management",
              desc: "Dashboard IoT untuk monitoring smart trash bin.",
              tech: ["HTML", "CSS", "JS", "Bootstrap"]
            },
            {
              img: Hoax,
              title: "Temukan Hoax",
              desc: "Platform verifikasi informasi hoax.",
              tech: ["Java Script", "React", "Express", "Node", "MySQL", "Tailwind"]
            }
          ].map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-lg overflow-hidden border shadow-sm
                   hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* IMAGE */}
              <img
                src={p.img}
                alt=""
                className="h-36 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {p.title}
                </h3>

                <p className="text-gray-600 mt-1 text-sm leading-relaxed line-clamp-2">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-gray-100 border text-[10px] rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4 text-sm">
                  <a href="https://github.com/esawah" target="_blank">
                    <button className="px-3 py-1.5 border border-yellow-500 text-yellow-600 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition">
                      View More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="px-10 py-20 text-gray-900">
        <h2 className="text-3xl font-extrabold text-center mb-12 tracking-wide">
          <span className="pb-1 border-b-4 border-yellow-500">CONTACT</span>
        </h2>

        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md border
                  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT – Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Let's Connect 👋</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to contact me through any of the platforms below. Let's build something amazing together!
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-yellow-600"></i>
                esaputra1283@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-yellow-600"></i>
                +62 895-3526-1722-8
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-yellow-600"></i>
                Bandung, Indonesia
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/esawah"
                target="_blank"
                className="px-4 py-2 rounded-md border border-gray-300 
                     hover:bg-black hover:text-white transition font-medium"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/esakurniawanputra/"
                target="_blank"
                className="px-4 py-2 rounded-md border border-gray-300
                     hover:bg-blue-500 hover:text-white transition font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-center">
            <img
              src="esa-pp.svg"
              alt="profile"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-yellow-500"
            />
          </div>

        </div>
      </div>


      <footer
        id="footer"
        className="relative bg-gray-950 text-gray-300 pt-16 pb-10"
      >
        {/* Top Curve */}
        <div className="absolute -top-10 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#111827"
              d="M0,160L48,176C96,192 192,224 288,229.3C384,235 480,213 576,186.7C672,160 768,128 864,122.7C960,117 1056,139 1152,154.7C1248,171 1344,181 1392,186.7L1440,192L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* ABOUT */}
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              ESA KURNIAWAN PUTRA
            </h1>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Full Stack Web Developer & Mobile Developer focusing on clean,
              efficient, and scalable digital solutions.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Navigation</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#Tech Stack" className="hover:text-yellow-400 transition">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Connect with me</h2>

            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/esawah"
                target="_blank"
                className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700
                     flex items-center justify-center hover:border-yellow-500
                     hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <BsGithub />
                <i className="fa-brands fa-github text-xl"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/esakurniawanputra"
                target="_blank"
                className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700
                     flex items-center justify-center hover:border-yellow-500
                     hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <BsLinkedin />
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kurniawan_e.p/"
                target="_blank"
                className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700
                     flex items-center justify-center hover:border-yellow-500
                     hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <BsInstagram />
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Esa Kurniawan Putra — All Rights Reserved.
        </div>
      </footer>

    </div >
  );
}
