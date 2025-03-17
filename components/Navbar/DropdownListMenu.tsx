import { AlignLeft } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/links';
import SignOutLinks from './SignOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';




const DropdownListMenu = () => {
    return (


        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='outline'>
                    <AlignLeft />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* ออกจากระบบแล้ว */}
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode='modal'>
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SignUpButton mode='modal'>
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                {/* เข้าสู่ระบบแล้ว */}
                <SignedIn>
                    {links.map((link, i) => {
                        return (
                            <DropdownMenuItem key={i}>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>

                        <SignOutLinks />
                    </DropdownMenuItem>

                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
export default DropdownListMenu