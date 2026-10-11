import { Container } from "@/components/layout";

export default function Footer() {
  return (
    <footer className="bg-wall border-t border-line">
      <Container className="flex items-center justify-between py-6">
      <span
        className="font-sans font-semibold text-ink uppercase"
        style={{ fontSize: "11px", letterSpacing: "0.14em" }}
      >
        Danielle Eunsoo Kim
      </span>
      <span className="font-sans text-faint" style={{ fontSize: "12px" }}>
        2026
      </span>
      </Container>
    </footer>
  );
}
