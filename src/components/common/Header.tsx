import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { Package2Icon, SearchIcon } from '../../assets/icons'

export default function Header() {
    return (
        <div>
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
                <a href="#" className="lg:hidden">
                    <Package2Icon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </a>
                <div className="w-full flex-1">
                    <form>
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search CDR data"
                                className="w-full bg-background shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                            />
                        </div>
                    </form>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                            <img
                                src="/placeholder.svg"
                                width="32"
                                height="32"
                                className="rounded-full"
                                alt="Avatar"
                                style={{ aspectRatio: "32/32", objectFit: "cover" }}
                            />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>

        </div>
    )
}
