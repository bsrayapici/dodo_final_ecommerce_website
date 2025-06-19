import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] text-[#737373] text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-20 pt-10 pb-6">
        {/* Top Row: Logo & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-6 mb-6 gap-4">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          <div className="flex gap-4 text-[#252B42]">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#2DC071]" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#2DC071]" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-[#2DC071]" />
          </div>
        </div>

        {/* Link Groups */}
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          {/* Column 1 */}
          <div className="min-w-[150px]">
            <h4 className="font-bold text-[#252B42] mb-3">Company Info</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="min-w-[150px]">
            <h4 className="font-bold text-[#252B42] mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="min-w-[150px]">
            <h4 className="font-bold text-[#252B42] mb-3">Features</h4>
            <ul className="space-y-2">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="min-w-[150px]">
            <h4 className="font-bold text-[#252B42] mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Subscription */}
          <div className="min-w-[250px] flex-1">
            <h4 className="font-bold text-[#252B42] mb-3">Get In Touch</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border border-gray-300 px-4 py-2 rounded"
              />
              <button className="bg-[#23A6F0] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#737373] mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-xs text-[#737373] pt-4 border-t border-gray-200">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;