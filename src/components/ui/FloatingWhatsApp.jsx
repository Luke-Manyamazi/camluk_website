import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phoneNumber = "27621071140"; // no +, no spaces
  const message = "Hello, I'm interested in your services";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-8 z-50"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-white text-2xl" />
      </div>
    </a>
  );
}