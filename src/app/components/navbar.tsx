'use client';
import { Gamepad2 } from 'lucide-react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="fixed w-full z-50 bg-ink/85 backdrop-blur-md border-b border-[#27272a] px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center space-x-2 cursor-pointer group">
                    <div className="p-2 rounded-md bg-primary/15 border border-primary/30 group-hover:bg-primary/25 transition-colors">
                        <Gamepad2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-bold text-xl tracking-tighter">
                        <span className="text-primary">Melenitas</span> Dev
                    </span>
                    <span className="hidden sm:inline font-mono text-xs text-bone/40 pl-1">
                        //_dev
                    </span>
                </div>
            </Link>
        </nav>
    );
}
