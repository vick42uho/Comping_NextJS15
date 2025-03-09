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

                {links.map((link, i) => (
                    <DropdownMenuItem key={i}>
                        <Link
                            href={link.href}
                            className="text-sm"
                        >
                            {link.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
              
                
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
export default DropdownListMenu