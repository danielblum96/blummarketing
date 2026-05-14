export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <p>© {new Date().getFullYear()} Blummarketing. Minden jog fenntartva.</p>
      <p>Havidíjas tartalomgyártás és hirdetéskezelés TikTokra és Metára.</p>
    </footer>
  );
}
