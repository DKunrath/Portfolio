/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactImgUrl =
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80";

  // AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Hi Rodrigo,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:kunrath37@gmail.com?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: AiOutlineMail,
      label: "Email",
      value: "kunrath37@gmail.com",
      href: "mailto:kunrath37@gmail.com",
      color: "text-red-400",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Campo Bom, Brazil",
      href: "#",
      color: "text-green-400",
    },
  ];

  return (
    <div
      id="Contact"
      className="min-h-screen px-[5%] sm:px-[5%] lg:px-[10%] py-16 relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div
            className="inline-block relative group"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Let&apos;s Connect
            </h2>
          </div>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Contact Info */}
          <div
            className="col-span-3 lg:col-span-2 w-full h-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="bg-white/[0.02] backdrop-blur-xl shadow-2xl rounded-2xl p-8 h-full border border-white/10">
              <div className="space-y-8">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    src={contactImgUrl}
                    alt="Contact section image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white">
                    Rodrigo Kunrath
                  </h2>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-semibold text-lg">
                    Fullstack Developer
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {`I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow developers.`}
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">
                    Get in touch
                  </h3>
                  <div className="space-y-3">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/20"
                      >
                        <div
                          className={`${method.color} text-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-medium">
                            {method.label}
                          </p>
                          <p className="text-white font-semibold">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">
                    Connect with me
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/rodrigo-kunrath-642884164/"
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="rounded-full bg-white/5 backdrop-blur-sm shadow-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-white/10 border border-white/10 hover:border-white/20 group-hover:rotate-12">
                        <FaLinkedinIn className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                    </a>

                    <a
                      href="https://github.com/DKunrath"
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="rounded-full bg-white/5 backdrop-blur-sm shadow-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-white/10 border border-white/10 hover:border-white/20 group-hover:rotate-12">
                        <FaGithub className="text-gray-300 text-xl group-hover:text-white transition-colors duration-300" />
                      </div>
                    </a>

                    <a href="mailto:kunrath37@gmail.com" className="group">
                      <div className="rounded-full bg-white/5 backdrop-blur-sm shadow-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-white/10 border border-white/10 hover:border-white/20 group-hover:rotate-12">
                        <AiOutlineMail className="text-red-400 text-xl group-hover:text-red-300 transition-colors duration-300" />
                      </div>
                    </a>

                    <Link href="#Contact" className="group">
                      <div className="rounded-full bg-white/5 backdrop-blur-sm shadow-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-white/10 border border-white/10 hover:border-white/20 group-hover:rotate-12">
                        <BsFillPersonLinesFill className="text-green-400 text-xl group-hover:text-green-300 transition-colors duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div
            className="col-span-3 w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="bg-white/[0.02] backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send me a message
                  </h3>
                  <p className="text-gray-400">
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-300">
                        Name *
                      </label>
                      <input
                        className="w-full border-2 border-white/10 rounded-xl p-4 focus:border-[#a855f7] focus:outline-none transition-colors duration-300 bg-white/5 text-white placeholder-gray-400"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-300">
                        Email *
                      </label>
                      <input
                        className="w-full border-2 border-white/10 rounded-xl p-4 focus:border-[#a855f7] focus:outline-none transition-colors duration-300 bg-white/5 text-white placeholder-gray-400"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">
                      Subject
                    </label>
                    <input
                      className="w-full border-2 border-white/10 rounded-xl p-4 focus:border-[#a855f7] focus:outline-none transition-colors duration-300 bg-white/5 text-white placeholder-gray-400"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-300">
                      Message *
                    </label>
                    <textarea
                      className="w-full border-2 border-white/10 rounded-xl p-4 focus:border-[#a855f7] focus:outline-none transition-colors duration-300 bg-white/5 text-white placeholder-gray-400 resize-none"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-4 text-white font-semibold text-lg rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#6366f1]/80 hover:to-[#a855f7]/80 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div
          className="flex justify-center py-12"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Link href="/">
            <div className="rounded-full bg-white/5 backdrop-blur-sm shadow-lg p-6 cursor-pointer hover:scale-110 transition-all duration-300 hover:shadow-xl border border-white/10 hover:border-white/20 group">
              <HiOutlineChevronDoubleUp
                className="text-[#a855f7] group-hover:text-[#6366f1] transition-colors duration-300"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export { Contact };
