import React  from "react";
import Link from 'next/link';
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from 'lucide-react';
import {
    SignInButton,
    SignUpButton,
    UserButton,
    SignedIn,
    SignedOut,
} from '@clerk/nextjs';
import { FaPiggyBank , FaTachometerAlt, FaPlusCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import {checkUser} from '@/lib/checkUser';


const Header = async() => {

    await checkUser();

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <FaPiggyBank className="text-primary text-2xl" />
                    <span className="font-bold text-xl text-primary tracking-wide">Finance Tracker</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <SignedOut>
                        <a href="#features" className="text-gray-600 hover:text-blue-600">
                            Features
                        </a>
                        <a
                        href="#testimonials"
                        className="text-gray-600 hover:text-blue-600"
                        >
                            Testimonials
                        </a>
                    </SignedOut>
                </div>

                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link
                        href="/dashboard"
                        className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                        >
                        <Button variant="outline">
                            <LayoutDashboard size={18} />
                            <span className="hidden md:inline">Dashboard</span>
                        </Button>
                        </Link>
                        <a href="/transaction/create">
                        <Button className="flex items-center gap-2">
                            <PenBox size={18} />
                            <span className="hidden md:inline">Add Transaction</span>
                        </Button>
                        </a>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                        <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                        appearance={{
                            elements: {
                            avatarBox: "w-10 h-10",
                            },
                        }}
                        />
                    </SignedIn>
                </div>
                
            </nav>
        </header>

    );
};

export default Header;
