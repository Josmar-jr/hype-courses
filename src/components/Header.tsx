import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";

import { Logo } from "./Logo";
import { User } from "phosphor-react";
import { Button } from "./Form/Button";

export function Header() {
  return (
    <header className="w-full bg-neutral-900 border-b border-b-zinc-700 py-2 px-6">
      <nav className="flex items-center max-w-[1366px] m-auto">
        <Logo cln="w-20 h-20 m-auto" />

        <div className="">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="w-10 outline-none focus:ring focus:secondary rounded-full">
              <Avatar.Root>
                <Avatar.Image
                  className="w-full rounded-full"
                  src="https://github.com/josmar-jr.png"
                  alt="Avatar"
                />
                <Avatar.Fallback />
              </Avatar.Root>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="border w-52 border-zinc-700 rounded shadow-lg mt-2  bg-neutral-900 font-medium">
              <DropdownMenu.Item className="flex items-center gap-2 w-full pt-4 px-6 pb-3 outline-none hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 rounded">
                <User size={18} weight="fill" className="fill-blue-300" /> Account
              </DropdownMenu.Item>
              <DropdownMenu.Item className="flex items-center gap-2 w-full pt-4 px-6 pb-3 outline-none hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 rounded">
                <User size={18} weight="fill" className="fill-blue-300" /> Account
              </DropdownMenu.Item>
              <DropdownMenu.Item className="flex items-center gap-2 w-full pt-4 px-6 pb-3 outline-none hover:bg-zinc-800 cursor-pointer focus:bg-zinc-800 rounded">
                <User size={18} weight="fill" className="fill-blue-300" /> Account
              </DropdownMenu.Item>

              <div className="p-4">
                <Button size="sm" customCls="w-full">
                  DAR FEEDBACK
                </Button>
              </div>

            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </nav>
    </header>
  );
}
