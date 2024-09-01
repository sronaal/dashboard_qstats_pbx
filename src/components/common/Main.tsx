

export default function Main() {
  return (
    <div>
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
  )
}
