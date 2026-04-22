export default function Footer({ name }: { name: string }) {
  return (
    <footer className="px-12 py-8 border-t border-border-lo flex justify-between items-center">
      <span className="text-[11px] text-fg-ghost">
        {name} · {new Date().getFullYear()}
      </span>
      <span className="text-[11px] text-fg-whisper">Built with care</span>
    </footer>
  );
}
