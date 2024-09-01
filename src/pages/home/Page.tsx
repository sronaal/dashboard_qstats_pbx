

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Popover, PopoverTrigger, PopoverContent } from "../../components/ui/popover"
import { Calendar } from "../../components/ui/calendar"
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "../../components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { Queue_stats } from "../../interfaces/queue_stats"

export default function Component() {
  const [filters, setFilters] = useState({
    queue: "all",
    agent: "all",
    event: "all",
    infoField: "all",
  })
  const handleFilterChange = (key : any, value : any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data :Queue_stats[] = [
    
  
    { 
      queue_stats: 1,
      uniqueid: "abc123",
      datetime: "2024-09-01 08:00:00",
      qname: 1,
      qagent: 101,
      qevent: 1,
      info1: "New Call",
      info2: "New Call",
      info3: "New Call",
      queue: 200
    }
  ]


    const filteredData = useMemo(() => {
    return data.filter((item) => {
      /**
       * 
       *  if (filters.queue !== "all" && item.qname  !== filters.queue) {
        return false
      }
      if (filters.agent !== "all" && item.qagent !== filters.agent) {
        return false
      }
      if (filters.event !== "all" && item.qevent !== filters.event) {
        return false
      }
      if (filters.infoField !== "all" && item.info1 !== filters.infoField) {
        return false
      }
      return true
       * 
       */
    })
  }, [filters, data])
  

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <Package2Icon className="h-6 w-6" />
              <span className="">CDR Analytics</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
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
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
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
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">CDR Analytics</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" className="hidden sm:flex">
                Today
              </Button>
              <Button variant="outline" className="hidden md:flex">
                This Month
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="date" variant="outline" className="w-[280px] justify-start text-left font-normal">
                    <CalendarClockIcon className="mr-2 h-4 w-4" />
                    June 01, 2023 - June 30, 2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar initialFocus mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Total Calls</CardDescription>
                  <CardTitle>{filteredData.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Answered Calls</CardDescription>
                  <CardTitle>{filteredData.filter((item) => item.qevent === 2).length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Abandoned Calls</CardDescription>
                  <CardTitle>{filteredData.filter((item) => item.qevent === 3).length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Average Wait Time</CardDescription>
                  <CardTitle>
                    {Math.round(
                      filteredData
                        .filter((item) => item.qevent === 3)
                        .reduce((total, item) => {
                          const waitTime = parseInt(item.info2.split(": ")[1])
                          return total + waitTime
                        }, 0) / filteredData.filter((item) => item.qevent === 3).length,
                    )}
                    seconds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Service Level</CardDescription>
                  <CardTitle>
                    {Math.round((filteredData.filter((item) => item.qevent === 2).length / filteredData.length) * 100)}%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Top Queues</CardDescription>
                  <CardTitle>Queue Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center">
                    <div>Queue 1</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qname === 1).length}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Top Agents</CardDescription>
                  <CardTitle>Agent Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center">
                    <div>Agent 101</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qagent === 101).length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>Agent 102</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qagent === 102).length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>Agent 103</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qagent === 103).length}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Top Events</CardDescription>
                  <CardTitle>Event Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center">
                    <div>New Call</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qevent === 1).length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>Call Answered</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qevent === 2).length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>Call Abandoned</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qevent === 3).length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>Call Transferred</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.qevent === 4).length}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Top Info Fields</CardDescription>
                  <CardTitle>Info Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center">
                    <div>info1</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.info1 === "New Call").length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>info2</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.info2 !== null).length}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>info3</div>
                    <div className="font-semibold ml-auto">
                      {filteredData.filter((item) => item.info3 !== null).length}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LandmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}