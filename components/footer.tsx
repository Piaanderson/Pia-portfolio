import Link from "next/link";
import { RESUME_DOWNLOAD_NAME, RESUME_HREF } from "@/lib/site";

export function Footer({ insetForSidebar = false }: { insetForSidebar?: boolean }) {
  return (
    <footer
      className={`${insetForSidebar ? "md:ml-[260px]" : ""} border-t border-pa-border bg-pa-bg3`}
    >
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-4 px-10 py-[30px]">
        <div className="font-serif text-[17px] font-semibold text-pa-text">
          Pia Anderson
        </div>
        <div className="flex items-center gap-[26px] text-[13.5px] text-pa-foot">
          <a
            href="https://www.linkedin.com/in/uxpiaanderson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline transition-opacity hover:opacity-80"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pia@piaanderson.com"
            className="text-inherit no-underline transition-opacity hover:opacity-80"
          >
            pia@piaanderson.com
          </a>
          <a
            href={RESUME_HREF}
            download={RESUME_DOWNLOAD_NAME}
            className="inline-flex items-center gap-[5px] text-inherit no-underline transition-opacity hover:opacity-80"
          >
            Resume PDF
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width={11}
              height={11}
              className="opacity-70"
            >
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zM5 20v-2h14v2H5z" />
            </svg>
          </a>
        </div>
        <div className="text-xs text-pa-copy">
          &copy; 2026 Pia Anderson
        </div>
      </div>
    </footer>
  );
}
