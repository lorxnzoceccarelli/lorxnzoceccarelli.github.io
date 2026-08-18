import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent">
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent">
            <Mail className="size-4" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
