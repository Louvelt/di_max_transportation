import { Share2, MessageCircle, Phone, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Company: ["About Us", "Our Team", "Careers", "Blog"],
  Services: ["Local Moving", "Long Distance", "Commercial", "Freight", "Storage"],
  Support: ["Get a Quote", "Book Appointment", "Contact Us", "FAQ"],
};

const socialLinks = [
  { Icon: Share2, label: "Share", href: "#" },
  { Icon: MessageCircle, label: "Chat", href: "#" },
  { Icon: Phone, label: "Call", href: "tel:+17746253852" },
  { Icon: Mail, label: "Email", href: "mailto:info@dimaxtransportation.com" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="p-1 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Di-Max icon"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain brightness-0 invert"
                />
              </div>
              <span className="font-bold text-lg text-white">
                Di-Max <span className="text-primary-400">Transportation</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-primary-300 max-w-xs mb-6">
              Reliable, professional transportation and moving services. Your
              cargo, our commitment.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-primary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-300 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-400">
            © {new Date().getFullYear()} Di-Max Transportation. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-primary-400 hover:text-primary-300 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
