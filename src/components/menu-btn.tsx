'use client'

import { logOut } from '@/lib/signInAction'
import { Gauge, Menu, Power } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'

const MenuBtn = () => {
    const router = useRouter()
    return (
        <>
            {/* For large devices */}
            <div className='sm:flex hidden gap-x-5'>
                <Link href={'/dashboard'}>
                    <Button>Dashboard</Button>
                </Link>
                <Button className='flex items-center' onClick={() => logOut()}>
                    <Power className="h-4 w-4 mr-2" />
                    Logout
                </Button>
            </div>

            {/* for small devices */}
            <div className='block sm:hidden'>
                <DropdownMenu>
                    <DropdownMenuTrigger className="!ring-0 !border-none !shadow-none !focus:border-none !focus:ring-0 !outline-none" asChild >
                        <Button variant="outline" className='px-3'>
                            <Menu className='h-6 w-6 flex-shrink-0' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[12rem] p-2 " align="end">
                        <span className="cursor-pointer space-y-1">
                            <DropdownMenuItem
                                className="cursor-pointer text-lg"
                                onClick={() => router.push(`/dashboard`)}
                            >
                                <Gauge className="h-5 w-5 mr-2" />
                                Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-lg" onClick={() => logOut}>
                                <Power className="h-5 w-5 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </span>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>

    )
}

export default MenuBtn