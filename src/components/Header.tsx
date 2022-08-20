import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-neutral-900 border-b border-b-zinc-700 flex justify-center items-center p-2">
      <Logo cln="w-20 h-20" />
    </header>
  );
}
