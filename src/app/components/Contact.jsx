"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [sendCount, setSendCount] = useState(0); // 🔑 New: track send count

  useEffect(() => {
    if (status) {
      setTimeout(() => setStatus(""), 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (sendCount >= 2) {
      setStatus("⚠️ Limit reached. Please wait before sending more messages.");
      return;
    }

    emailjs
      .send(
        "service_86evhhj",
        "template_oqp4osn",
        form,
        "tcSxyR_Fiq9HQItl-"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setSendCount(sendCount + 1); // 🔑 Increment the send count
      })
      .catch((er) => {
        console.log(er);
        setStatus("❌ Failed to send message. Try again later.");
      });
  };

  return (
    <section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-6 py-24"
>
  <h2 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-12 text-center drop-shadow-md">
    Contact Me
  </h2>

  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-[#0a0a0a]/70 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]">
    {/* Contact Form */}
    <div>
      <h3 className="text-2xl font-bold text-pink-400">Just say Hello!</h3>
      <p className="text-sm text-gray-300 mb-6">Let’s get to know each other!</p>
      {status && <p className="text-sm mb-4">{status}</p>}

      <form onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#111] border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#111] border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
        </div>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-3 rounded-lg bg-[#111] border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-[#111] border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 transition"
          required
        />
        <button
          type="submit"
          className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
            sendCount >= 2
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-purple-600 hover:brightness-110 hover:scale-105"
          }`}
          disabled={sendCount >= 2}
        >
          {sendCount >= 2 ? "Limit Reached" : "Send Message"}
        </button>
      </form>
    </div>

    {/* Contact Info */}
    <div className="bg-[#0d0d0d] rounded-2xl p-8 shadow-lg border border-white/10 backdrop-blur-md">
      <h3 className="text-2xl font-bold text-pink-400">Get in Touch</h3>
      <p className="text-gray-300 mt-3 leading-relaxed">
        💡 Let’s collaborate! Whether it’s a project, freelance work, or just tech talk — I’m always open to connect.
      </p>

      <div className="mt-6">
        <p className="text-white">📩 Fill out the form or message me directly on socials.</p>
      </div>

      <h3 className="mt-8 text-pink-400 font-semibold">Follow Me</h3>
      <div className="flex space-x-5 mt-4 text-2xl">
        <a
          href="https://github.com/manishkumarcs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/manishkumarcs1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
