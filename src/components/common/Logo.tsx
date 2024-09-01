
import { Button } from '../ui/button'

export default function Logo() {
    return (
        <div className="hidden border-r bg-muted/40 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>


                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <a href="" className="flex items-center 
                            gap-3 rounded-lg px-3 
                            py-2 text-muted-foreground 
                            transition-all hover:text-primary">
                            Home
                        </a>


                        {
                            /**
                             * 
                             * <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            prefetch={false}
                          >
                            <HomeIcon className="h-4 w-4" />
                            Home
                          </Link>
            
            
            
                          <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary  transition-all hover:text-primary"
                            prefetch={false}
                          >
                            <LineChartIcon className="h-4 w-4" />
                            CDR Analytics
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            prefetch={false}
                          >
                            <UsersIcon className="h-4 w-4" />
                            Agents
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            prefetch={false}
                          >
                            <LandmarkIcon className="h-4 w-4" />
                            Queues
                          </Link>
                             * 
                             */
                        }
                    </nav>
                </div>


            </div>
        </div>
}
