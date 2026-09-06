type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const WhatsAppIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={0} fill="currentColor" {...props} aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm4.76 9.4c-.06-.11-.24-.18-.5-.31-.26-.13-1.53-.76-1.77-.84-.24-.09-.41-.13-.59.13-.17.26-.67.84-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45l-.5-.01c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.19 0 1.29.94 2.54 1.07 2.72.13.17 1.85 2.82 4.48 3.96.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.53-.62 1.75-1.23.22-.61.22-1.13.15-1.24Z" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={0} fill="currentColor" {...props} aria-hidden="true">
    <path d="m12 2 2.9 6.26 6.85.7-5.1 4.6 1.42 6.74L12 17.3 5.93 20.3l1.42-6.74-5.1-4.6 6.85-.7L12 2Z" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={0} fill="currentColor" {...props} aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);

export const TikTokIcon = (props: IconProps) => (
  <svg {...base} strokeWidth={0} fill="currentColor" {...props} aria-hidden="true">
    <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.2-3.6-.9v6.1c0 3.3-2.5 5.7-5.6 5.7A5.5 5.5 0 0 1 5 14.4c0-3 2.4-5.4 5.6-5.3v2.7c-.4-.1-.8-.2-1.2-.2-1.5 0-2.7 1.2-2.7 2.9s1.2 2.9 2.7 2.9c1.6 0 2.8-1.2 2.8-3.3V3h2.3Z" />
  </svg>
);

export const ArrowIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base} {...props} aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const SpinnerIcon = (props: IconProps) => (
  <svg {...base} {...props} className={`animate-spin ${props.className ?? ""}`} aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-6.22-8.56" />
  </svg>
);
