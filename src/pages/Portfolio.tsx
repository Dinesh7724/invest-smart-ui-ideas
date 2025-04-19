
import { useState } from "react";
import {
  PieChart as PieChartIcon,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  Calendar,
  ChevronDown,
  RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Navbar from "@/components/Navbar";

// Sample data for the portfolio page
const assetAllocationData = [
  { name: "Stocks", value: 45, color: "#0A2463" },
  { name: "Mutual Funds", value: 30, color: "#3BCEAC" },
  { name: "Bonds", value: 15, color: "#FFC857" },
  { name: "Cash", value: 10, color: "#CB2D6F" },
];

const sectorAllocationData = [
  { name: "Technology", value: 35, color: "#0A2463" },
  { name: "Finance", value: 25, color: "#3BCEAC" },
  { name: "Healthcare", value: 20, color: "#FFC857" },
  { name: "Consumer", value: 15, color: "#CB2D6F" },
  { name: "Energy", value: 5, color: "#14213D" },
];

const portfolioGrowthData = [
  { month: "Jan", value: 100000 },
  { month: "Feb", value: 110000 },
  { month: "Mar", value: 105000 },
  { month: "Apr", value: 120000 },
  { month: "May", value: 125000 },
  { month: "Jun", value: 130000 },
  { month: "Jul", value: 145000 },
  { month: "Aug", value: 160000 },
  { month: "Sep", value: 170000 },
  { month: "Oct", value: 185000 },
  { month: "Nov", value: 190000 },
  { month: "Dec", value: 210000 },
];

const investmentsData = [
  {
    name: "Apple Inc.",
    type: "Stock",
    symbol: "AAPL",
    amount: "$24,500",
    quantity: "145 shares",
    buyPrice: "$145.30",
    currentPrice: "$187.45",
    performance: "+29.01%",
    status: "up",
  },
  {
    name: "Vanguard Total Stock Market ETF",
    type: "ETF",
    symbol: "VTI",
    amount: "$38,750",
    quantity: "175 shares",
    buyPrice: "$192.50",
    currentPrice: "$221.43",
    performance: "+15.03%",
    status: "up",
  },
  {
    name: "Microsoft Corporation",
    type: "Stock",
    symbol: "MSFT",
    amount: "$31,200",
    quantity: "94 shares",
    buyPrice: "$285.40",
    currentPrice: "$332.12",
    performance: "+16.37%",
    status: "up",
  },
  {
    name: "US Treasury Bond 10Y",
    type: "Bond",
    symbol: "T",
    amount: "$30,000",
    quantity: "3 bonds",
    buyPrice: "$1000.00",
    currentPrice: "$985.20",
    performance: "-1.48%",
    status: "down",
  },
  {
    name: "Fidelity Growth Company Fund",
    type: "Mutual Fund",
    symbol: "FDGRX",
    amount: "$42,350",
    quantity: "350.4 units",
    buyPrice: "$113.50",
    currentPrice: "$120.86",
    performance: "+6.48%",
    status: "up",
  },
];

const Portfolio = () => {
  const [timeRange, setTimeRange] = useState("1Y");
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <div className="min-h-screen bg-wealth-lightGray/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-wealth-navy">Portfolio</h1>
            <p className="text-wealth-charcoal mt-1">
              Track and analyze your investment portfolio
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCcw size={16} />
              Refresh
            </Button>
            <Button className="bg-wealth-teal hover:bg-wealth-teal/90 text-white">
              Add Investment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Total Portfolio Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-wealth-navy">
                $248,567.89
              </div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-green-600 flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  +$19,021.45 (8.3%)
                </span>
                <span className="text-wealth-charcoal ml-2">all time</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Year-to-Date Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">+14.2%</div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-green-600 flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  Outperforming S&P 500 by 2.3%
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-500">Moderate</div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-wealth-charcoal">
                  Balanced risk-to-reward ratio
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2">
                <CardHeader className="flex items-start justify-between">
                  <div>
                    <CardTitle>Portfolio Growth</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={timeRange === "1M" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeRange("1M")}
                      className={timeRange === "1M" ? "bg-wealth-teal text-white hover:bg-wealth-teal/90" : ""}
                    >
                      1M
                    </Button>
                    <Button
                      variant={timeRange === "3M" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeRange("3M")}
                      className={timeRange === "3M" ? "bg-wealth-teal text-white hover:bg-wealth-teal/90" : ""}
                    >
                      3M
                    </Button>
                    <Button
                      variant={timeRange === "6M" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeRange("6M")}
                      className={timeRange === "6M" ? "bg-wealth-teal text-white hover:bg-wealth-teal/90" : ""}
                    >
                      6M
                    </Button>
                    <Button
                      variant={timeRange === "1Y" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeRange("1Y")}
                      className={timeRange === "1Y" ? "bg-wealth-teal text-white hover:bg-wealth-teal/90" : ""}
                    >
                      1Y
                    </Button>
                    <Button
                      variant={timeRange === "ALL" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeRange("ALL")}
                      className={timeRange === "ALL" ? "bg-wealth-teal text-white hover:bg-wealth-teal/90" : ""}
                    >
                      All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={portfolioGrowthData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [`$${value}`, "Value"]}
                          labelFormatter={(label) => `Month: ${label}`}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#0A2463"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={assetAllocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {assetAllocationData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.color}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Allocation"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Top Performing Investments</CardTitle>
                <Button variant="ghost" className="text-wealth-navy">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investmentsData
                      .sort(
                        (a, b) =>
                          parseFloat(
                            b.performance.replace("%", "").replace("+", "")
                          ) -
                          parseFloat(
                            a.performance.replace("%", "").replace("+", "")
                          )
                      )
                      .slice(0, 3)
                      .map((investment) => (
                        <TableRow key={investment.symbol}>
                          <TableCell className="font-medium">
                            {investment.name}
                            <div className="text-sm text-gray-500">
                              {investment.symbol}
                            </div>
                          </TableCell>
                          <TableCell>{investment.type}</TableCell>
                          <TableCell>{investment.amount}</TableCell>
                          <TableCell>
                            <div
                              className={`flex items-center ${
                                investment.status === "up"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {investment.status === "up" ? (
                                <TrendingUp size={16} className="mr-1" />
                              ) : (
                                <TrendingDown size={16} className="mr-1" />
                              )}
                              {investment.performance}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investments" className="mt-6">
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>All Investments</CardTitle>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="stock">Stocks</SelectItem>
                      <SelectItem value="etf">ETFs</SelectItem>
                      <SelectItem value="mutual">Mutual Funds</SelectItem>
                      <SelectItem value="bond">Bonds</SelectItem>
                    </SelectContent>
                  </Select>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Filter size={16} className="mr-2" />
                        Sort By
                        <ChevronDown size={16} className="ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                      <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                      <DropdownMenuItem>Amount (High-Low)</DropdownMenuItem>
                      <DropdownMenuItem>Amount (Low-High)</DropdownMenuItem>
                      <DropdownMenuItem>Performance (Best-Worst)</DropdownMenuItem>
                      <DropdownMenuItem>Performance (Worst-Best)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Buy Price</TableHead>
                      <TableHead>Current Price</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {investmentsData.map((investment) => (
                      <TableRow key={investment.symbol}>
                        <TableCell className="font-medium">
                          {investment.name}
                          <div className="text-sm text-gray-500">
                            {investment.symbol}
                          </div>
                        </TableCell>
                        <TableCell>{investment.type}</TableCell>
                        <TableCell>{investment.amount}</TableCell>
                        <TableCell>{investment.quantity}</TableCell>
                        <TableCell>{investment.buyPrice}</TableCell>
                        <TableCell>{investment.currentPrice}</TableCell>
                        <TableCell>
                          <div
                            className={`flex items-center ${
                              investment.status === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {investment.status === "up" ? (
                              <TrendingUp size={16} className="mr-1" />
                            ) : (
                              <TrendingDown size={16} className="mr-1" />
                            )}
                            {investment.performance}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="mt-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Performance Analysis</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    Select Date Range
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={portfolioGrowthData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [`$${value}`, "Value"]}
                        labelFormatter={(label) => `Month: ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#0A2463"
                        activeDot={{ r: 8 }}
                        name="Portfolio Value"
                      />
                      <Line
                        type="monotone"
                        dataKey="benchmark"
                        stroke="#FFC857"
                        name="S&P 500 Benchmark"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm font-medium text-gray-500 mb-2">Annual Return</div>
                    <div className="text-2xl font-bold text-green-600">+18.7%</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm font-medium text-gray-500 mb-2">Beta</div>
                    <div className="text-2xl font-bold text-wealth-navy">0.85</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-sm font-medium text-gray-500 mb-2">Sharpe Ratio</div>
                    <div className="text-2xl font-bold text-wealth-navy">1.24</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Asset Class Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={assetAllocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {assetAllocationData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.color}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Allocation"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sectorAllocationData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {sectorAllocationData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.color}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Allocation"]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Portfolio;
