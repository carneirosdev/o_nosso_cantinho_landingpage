"use client";

import { site } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "./icons";

const links = [
  { key: "instagram", label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { key: "tiktok", label: "TikTok", href: site.social.tiktok, Icon: TikTokIcon },
].filter((l) => l.href);

type Props = {
  className?: string;
  source: string;
  variant?: "light" | "dark";
};

export function SocialLinks({ className = "", source, variant = "dark" }: Props) {
  if (links.length === 0) return null;

  return (
    <ul className={`flex gap-2 ${className}`}>
      {links.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={() => track("click_social", { network: key, source })}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              variant === "dark"
                ? "bg-ink/5 text-ink hover:bg-brand hover:text-white"
                : "bg-white/10 text-white hover:bg-white hover:text-ink"
            }`}
          >
            <Icon width={18} height={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
