import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--pa-border)",
        background: "var(--pa-bg3)",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          padding: "30px 40px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-serif), Newsreader, serif",
            fontSize: 17,
            fontWeight: 600,
            color: "var(--pa-text)",
          }}
        >
          Pia Anderson
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
            fontFamily: "var(--font-sans), Hanken Grotesk, sans-serif",
            fontSize: 13.5,
            color: "var(--pa-foot)",
          }}
        >
          <a
            href="https://www.linkedin.com/in/uxpiaanderson/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:pia@piaanderson.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            pia@piaanderson.com
          </a>
          <a
            href="/Pia-Anderson-Resume.pdf"
            download
            style={{
              color: "inherit",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            Resume PDF
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width={11}
              height={11}
              style={{ opacity: 0.7 }}
            >
              <path d="M12 16l-5-5h3V4h4v7h3l-5 5zM5 20v-2h14v2H5z" />
            </svg>
          </a>
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans), Hanken Grotesk, sans-serif",
            fontSize: 12,
            color: "var(--pa-copy)",
          }}
        >
          &copy; 2026 Pia Anderson
        </div>
      </div>
    </footer>
  );
}
