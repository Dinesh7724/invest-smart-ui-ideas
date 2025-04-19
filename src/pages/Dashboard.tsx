
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PlusCircle,
  AlertCircle,
  Bell,
  ChevronRight,
  PieChart,
  BarChart,
  Shield,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartPieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Navbar from "@/components/Navbar";

// Dummy data for the dashboard
const portfolioData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4000 },
  { name: "Sep", value: 4500 },
  { name: "Oct", value: 5200 },
  { name: "Nov", value: 4800 },
  { name: "Dec", value: 6000 },
];

const assetAllocationData = [
  { name: "Stocks", value: 45, color: "#0A2463" },
  { name: "Mutual Funds", value: 30, color: "#3BCEAC" },
  { name: "Bonds", value: 15, color: "#FFC857" },
  { name: "Cash", value: 10, color: "#CB2D6F" },
];

const stocksData = [
  { name: "AAPL", price: "$187.45", change: "+2.41%", status: "up" },
  { name: "MSFT", price: "$332.12", change: "+1.86%", status: "up" },
  { name: "GOOGL", price: "$135.60", change: "-0.53%", status: "down" },
  { name: "AMZN", price: "$142.58", change: "+0.92%", status: "up" },
];

const notificationsData = [
  {
    title: "Market Alert",
    description: "S&P 500 is up by 1.2% today",
    time: "2 hours ago",
    type: "info",
  },
  {
    title: "Investment Opportunity",
    description: "New mutual fund with lower expense ratio available",
    time: "1 day ago",
    type: "opportunity",
  },
  {
    title: "Tax Reminder",
    description: "Section 80C deduction limit not reached",
    time: "3 days ago",
    type: "warning",
  },
];

const Dashboard = () => {
  const [currentBalance] = useState("$248,567.89");
  const [totalGrowth] = useState("8.3%");
  const [growthAmount] = useState("$19,021.45");

  return (
    <div className="min-h-screen bg-wealth-lightGray/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-wealth-navy">Dashboard</h1>
          <p className="text-wealth-charcoal mt-2">
            Welcome back! Here's an overview of your financial portfolio.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-wealth-charcoal">
                Current Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-wealth-navy">
                  {currentBalance}
                </span>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-green-600 flex items-center mr-2">
                  <TrendingUp size={16} className="mr-1" />
                  {totalGrowth}
                </span>
                <span className="text-wealth-charcoal">this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-wealth-charcoal">
                Total Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-green-600">
                  {growthAmount}
                </span>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-green-600">+{totalGrowth}</span>
                <span className="text-wealth-charcoal ml-2">from initial investment</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-wealth-charcoal">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button className="bg-wealth-teal text-white hover:bg-wealth-teal/90 h-auto py-2">
                  <PlusCircle size={16} className="mr-2" />
                  Add Investment
                </Button>
                <Button variant="outline" className="h-auto py-2">
                  <BarChart3 size={16} className="mr-2" />
                  Tax Planner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>
                Your investment growth over the past year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={portfolioData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#0A2463"
                      fill="#3BCEAC"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>
                Distribution of your investment portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartPieChart>
                    <Pie
                      data={assetAllocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {assetAllocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stocks and Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Trending Stocks</CardTitle>
                <CardDescription>
                  Your top stock performances
                </CardDescription>
              </div>
              <Link to="/stocks">
                <Button variant="ghost" className="text-wealth-navy">
                  View All
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stocksData.map((stock) => (
                  <div
                    key={stock.name}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-wealth-lightGray flex items-center justify-center mr-4">
                        <DollarSign size={20} className="text-wealth-navy" />
                      </div>
                      <div>
                        <p className="font-medium text-wealth-navy">{stock.name}</p>
                        <p className="text-sm text-wealth-charcoal">
                          {stock.price}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center ${
                        stock.status === "up"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {stock.status === "up" ? (
                        <TrendingUp size={16} className="mr-1" />
                      ) : (
                        <TrendingDown size={16} className="mr-1" />
                      )}
                      <span>{stock.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Recent alerts and tips
                </CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <Bell size={18} />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificationsData.map((notification, index) => (
                  <div
                    key={index}
                    className="flex items-start border-b border-gray-100 pb-3 last:border-0"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        notification.type === "info"
                          ? "bg-blue-100 text-blue-600"
                          : notification.type === "opportunity"
                          ? "bg-green-100 text-green-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {notification.type === "info" ? (
                        <AlertCircle size={16} />
                      ) : notification.type === "opportunity" ? (
                        <TrendingUp size={16} />
                      ) : (
                        <AlertCircle size={16} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-wealth-navy">
                        {notification.title}
                      </p>
                      <p className="text-sm text-wealth-charcoal my-1">
                        {notification.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickAccessCard
            title="Portfolio Analysis"
            description="Review your investment portfolio"
            icon={<PieChart size={24} className="text-wealth-navy" />}
            linkTo="/portfolio"
          />
          <QuickAccessCard
            title="Tax Planning"
            description="Optimize your tax investments"
            icon={<FileText size={24} className="text-wealth-teal" />}
            linkTo="/tax-planning"
          />
          <QuickAccessCard
            title="Investment Opportunities"
            description="Discover new investment options"
            icon={<BarChart size={24} className="text-wealth-gold" />}
            linkTo="/opportunities"
          />
          <QuickAccessCard
            title="Insurance Coverage"
            description="Review and update protection"
            icon={<Shield size={24} className="text-purple-600" />}
            linkTo="/insurance"
          />
        </div>
      </main>
    </div>
  );
};

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
}

const QuickAccessCard = ({
  title,
  description,
  icon,
  linkTo,
}: QuickAccessCardProps) => {
  return (
    <Link to={linkTo}>
      <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1">
        <CardContent className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-wealth-lightGray flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="font-semibold text-wealth-navy mb-1">{title}</h3>
          <p className="text-sm text-wealth-charcoal">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Dashboard;
