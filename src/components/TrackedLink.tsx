"use client";

import Link from "next/link";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Props = {
  href: string;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean | undefined>;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function TrackedLink({
  href,
  event,
  eventParams,
  className,
  children,
  external,
}: Props) {
  const onClick = () => {
    if (event) track(event, eventParams);
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
