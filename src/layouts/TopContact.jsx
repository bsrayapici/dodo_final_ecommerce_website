import React from "react";
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const TopContact = () => {
  return (
    <div className="hidden md:flex bg-[#2C2C5A] text-white text-sm py-2 px-4 justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <Phone size={14} />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={14} />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      <div className="font-medium text-center">
        Follow Us and get a chance to win 80% off
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">Follow Us:</span>
        <Instagram size={16} />
        <Youtube size={16} />
        <Facebook size={16} />
        <Twitter size={16} />
      </div>
    </div>
  );
};

export default TopContact;