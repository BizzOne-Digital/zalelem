import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-white/60" : "text-muted";
  const current = tone === "dark" ? "text-white/90" : "text-ink";
  const hover = tone === "dark" ? "hover:text-lime-400" : "hover:text-green-700";

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight
                  className={`h-3.5 w-3.5 shrink-0 ${muted}`}
                  aria-hidden="true"
                />
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={`${muted} transition ${hover}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? current : muted} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
