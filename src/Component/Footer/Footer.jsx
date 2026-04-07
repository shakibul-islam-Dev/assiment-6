import React, { use } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ footerData }) => {
  const footer = use(footerData);

  if (!footer) return null;

  const { brand, sections, footer_bottom } = footer;

  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-10 mt-20">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 mb-20">
          {/* 1. Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {brand?.name}
            </h2>
            <p className="text-gray-400 text-[16px] leading-relaxed max-w-sm">
              {brand?.description}
            </p>
          </div>

          {/* 2. Menu Sections */}
          {sections?.map((section, idx) => (
            <div key={idx} className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links?.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 3. Social Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              Social Links
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#8B2CFF] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#8B2CFF] hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#8B2CFF] hover:text-white transition-all duration-300"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">{footer_bottom?.copyright}</p>

          <div className="flex gap-6 sm:gap-10">
            {footer_bottom?.links?.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
