import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsapp = () => {
  const phoneNumber = "+27621071140";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsapp;