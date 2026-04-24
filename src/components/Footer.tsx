import { Globe, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const links = {
    Product: ["Features", "Security", "Pricing", "Demo"],
    Company: ["About Us", "Careers", "Contact", "Blog"],
    Legal: ["Privacy Policy", "Terms", "Cookies"],
  };

  return (
    <footer className="bg-black border-t border-white/8 pt-20 pb-10 relative z-10">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#6C5CE7]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 pb-16 border-b border-white/8">
          {/* Brand col */}
          <div className="col-span-2">
            <div className="mb-8">
              <Image 
                src="/logo2.png" 
                alt="SerenAI" 
                width={180} 
                height={50} 
                className="h-12 w-auto object-contain opacity-80"
              />
            </div>
            <p className="text-white/30 leading-relaxed mb-8 max-w-xs">
              The world's most advanced emotional intelligence platform for the modern generation.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, ArrowUpRight].map((Icon, i) => (
                <a
                  key={i}
                  href="/coming-soon"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="label-tag mb-6">{group}</p>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a href="/coming-soon" className="text-white/40 hover:text-white transition-colors text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label-tag">© 2026 SerenAI Intelligence. All Rights Reserved.</p>
          <p className="label-tag">Built for the high-performance generation.</p>
        </div>
      </div>
    </footer>
  );
}
