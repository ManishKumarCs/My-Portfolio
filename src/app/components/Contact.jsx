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
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] from-[#0a0a33] to-[#1a1a5e] text-white px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-pink-500 mb-12">Contact Me</h2>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 bg-[#0a0a0a] p-10 rounded-2xl shadow-lg backdrop-blur-lg border-2 border-white">
        <div>
          <h3 className="text-2xl font-bold text-pink-500">Just say Hello!</h3>
          <p className="text-sm text-white mb-6">Let us know more about you!</p>
          {status && <p className="text-sm mb-4">{status}</p>}
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-white text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Mail"
                className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-white text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
                required
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-white text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-white text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full py-3 text-lg font-semibold rounded-lg shadow-lg transition ${
                sendCount >= 2
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-purple-500 hover:cursor-pointer"
              }`}
              disabled={sendCount >= 2}
            >
              {sendCount >= 2 ? "Limit Reached" : "SUBMIT"}
            </button>
          </form>
        </div>

        <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg border border-white">
          <h3 className="text-2xl font-bold text-pink-500">Get in Touch</h3>
          <p className="text-gray-300 mt-2">
            💡 Let&apos;s collaborate! Whether it&apos;s a project, freelance opportunity, or just tech talk — happy to connect.
          </p>
          <div className="mt-4">
            <p className="text-white">📩 Fill the form or message me directly.</p>
          </div>
          <h3 className="mt-6 text-pink-500 font-semibold">Follow Me</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://github.com/manishkumarcs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manishkumarcs1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition text-2xl"
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
