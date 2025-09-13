import { Mail, Phone, MapPin, Github, Instagram, Send } from "lucide-react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex-1 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 min-h-screen px-20 py-20"
    >
      <h2 className="font-poppins text-4xl font-bold mb-10 text-white">
        Contact Information
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Bagian Info Kontak */}
        <div className="space-y-6 text-gray-300">
          <p className="flex items-center gap-3">
            <MapPin className="text-blue-500" /> Banjarmasin, Kalimantan Selatan, Indonesia
          </p>
          <p className="flex items-center gap-3">
            <Mail className="text-blue-500" /> madityapratama12.ap@email.com
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-blue-500" /> +62 851 4778 7940 (WhatsApp)
          </p>
          <p className="flex items-center gap-3">
            <Phone className="text-blue-500" /> +62 851 4778 7940 (Telephone)
          </p>
          <p className="flex items-center gap-3">
            <Github className="text-blue-500" />{" "}
            <a
              href="https://github.com/madityapratama"
              target="_blank"
              className="hover:underline"
            >
              github.com/madityapratama
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Instagram className="text-blue-500" />{" "}
            <a
              href="https://www.instagram.com/dit.yap/"
              target="_blank"
              className="hover:underline"
            >
              @dit.yap
            </a>
          </p>
        </div>

        {/* Bagian Form */}
        <form
          action="https://formspree.io/f/mnnbrgyy" // ganti dengan endpoint formspree kamu
          method="POST"
          className="bg-gray-900/60 p-6 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
          >
            <Send />Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
