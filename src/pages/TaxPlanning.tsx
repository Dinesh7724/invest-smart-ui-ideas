
import { useState } from "react";
import {
  FileText,
  PlusCircle,
  InfoIcon,
  CheckCircle,
  Calculator,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";

// Sample tax savings instruments data
const taxSavingInstruments = [
  {
    name: "Public Provident Fund (PPF)",
    section: "80C",
    maxDeduction: "₹1,50,000",
    invested: "₹75,000",
    recommendation: "High",
    benefits: "Tax-free interest, long-term wealth creation, sovereign guarantee",
  },
  {
    name: "Equity Linked Savings Scheme (ELSS)",
    section: "80C",
    maxDeduction: "₹1,50,000",
    invested: "₹50,000",
    recommendation: "High",
    benefits: "Shortest lock-in (3 years), potential for high returns, tax-free dividends",
  },
  {
    name: "National Pension System (NPS)",
    section: "80CCD(1B)",
    maxDeduction: "₹50,000",
    invested: "₹25,000",
    recommendation: "Medium",
    benefits: "Additional tax benefit beyond 80C limit, retirement security",
  },
  {
    name: "Health Insurance Premium",
    section: "80D",
    maxDeduction: "₹25,000",
    invested: "₹15,000",
    recommendation: "High",
    benefits: "Health coverage, additional deduction beyond 80C",
  },
  {
    name: "Home Loan Interest",
    section: "24(b)",
    maxDeduction: "₹2,00,000",
    invested: "₹1,80,000",
    recommendation: "N/A",
    benefits: "Tax benefit on home loan interest paid during the year",
  },
];

const TaxPlanning = () => {
  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [section80cInvestment, setSection80cInvestment] = useState(125000);
  const [healthInsurance, setHealthInsurance] = useState(15000);
  const [homeLoanInterest, setHomeLoanInterest] = useState(180000);
  const [npsInvestment, setNpsInvestment] = useState(25000);

  // Calculate tax under old regime (simplified for example)
  const calculateOldRegimeTax = () => {
    let taxableIncome = annualIncome;
    
    // Deduct Section 80C investments (max 1,50,000)
    taxableIncome -= Math.min(section80cInvestment, 150000);
    
    // Deduct Health Insurance premium (max 25,000)
    taxableIncome -= Math.min(healthInsurance, 25000);
    
    // Deduct Home Loan Interest (max 2,00,000)
    taxableIncome -= Math.min(homeLoanInterest, 200000);
    
    // Deduct NPS investment (max 50,000)
    taxableIncome -= Math.min(npsInvestment, 50000);
    
    // Standard deduction
    taxableIncome -= 50000;
    
    // Calculate tax slab-wise
    let tax = 0;
    
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.3;
      taxableIncome = 1000000;
    }
    
    if (taxableIncome > 500000) {
      tax += (taxableIncome - 500000) * 0.2;
      taxableIncome = 500000;
    }
    
    if (taxableIncome > 250000) {
      tax += (taxableIncome - 250000) * 0.05;
    }
    
    // Add 4% cess
    tax = tax * 1.04;
    
    return Math.round(tax);
  };

  // Calculate tax under new regime (simplified for example)
  const calculateNewRegimeTax = () => {
    let taxableIncome = annualIncome;
    
    // Standard deduction
    taxableIncome -= 50000;
    
    // Calculate tax slab-wise (new regime has different slabs)
    let tax = 0;
    
    if (taxableIncome > 1500000) {
      tax += (taxableIncome - 1500000) * 0.3;
      taxableIncome = 1500000;
    }
    
    if (taxableIncome > 1250000) {
      tax += (taxableIncome - 1250000) * 0.25;
      taxableIncome = 1250000;
    }
    
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.2;
      taxableIncome = 1000000;
    }
    
    if (taxableIncome > 750000) {
      tax += (taxableIncome - 750000) * 0.15;
      taxableIncome = 750000;
    }
    
    if (taxableIncome > 500000) {
      tax += (taxableIncome - 500000) * 0.1;
      taxableIncome = 500000;
    }
    
    if (taxableIncome > 300000) {
      tax += (taxableIncome - 300000) * 0.05;
    }
    
    // Add 4% cess
    tax = tax * 1.04;
    
    return Math.round(tax);
  };

  const oldRegimeTax = calculateOldRegimeTax();
  const newRegimeTax = calculateNewRegimeTax();
  const betterRegime = oldRegimeTax <= newRegimeTax ? "Old" : "New";
  const taxSavings = Math.abs(oldRegimeTax - newRegimeTax);

  // Calculate Section 80C progress
  const section80cProgress = (section80cInvestment / 150000) * 100;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-wealth-lightGray/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-wealth-navy">Tax Planning</h1>
            <p className="text-wealth-charcoal mt-1">
              Optimize your tax strategy and maximize savings
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-wealth-teal" />
                Tax Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-wealth-charcoal mb-2">
                    Annual Income
                  </label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-lg font-medium text-wealth-navy">
                      {formatCurrency(annualIncome)}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wealth-charcoal mb-2">
                    Section 80C Investments
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon className="ml-1 h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Includes PPF, ELSS, Life Insurance Premium, EPF, etc. Maximum deduction of ₹1,50,000.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">₹0</span>
                      <span className="text-sm text-gray-500">₹1,50,000</span>
                    </div>
                    <Slider
                      value={[section80cInvestment]}
                      min={0}
                      max={150000}
                      step={1000}
                      onValueChange={(value) => setSection80cInvestment(value[0])}
                      className="w-full"
                    />
                    <div className="flex items-center gap-4">
                      <Input
                        type="number"
                        value={section80cInvestment}
                        onChange={(e) => setSection80cInvestment(Number(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-wealth-navy font-medium">
                        {formatCurrency(section80cInvestment)}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wealth-charcoal mb-2">
                    Health Insurance Premium (Sec 80D)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon className="ml-1 h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Maximum deduction of ₹25,000 for self & family, additional ₹25,000 for parents.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      value={healthInsurance}
                      onChange={(e) => setHealthInsurance(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-wealth-navy font-medium">
                      {formatCurrency(healthInsurance)}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wealth-charcoal mb-2">
                    Home Loan Interest (Sec 24b)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon className="ml-1 h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Maximum deduction of ₹2,00,000 on interest paid for self-occupied property.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      value={homeLoanInterest}
                      onChange={(e) => setHomeLoanInterest(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-wealth-navy font-medium">
                      {formatCurrency(homeLoanInterest)}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-wealth-charcoal mb-2">
                    NPS Investment (Sec 80CCD(1B))
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon className="ml-1 h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Additional deduction of up to ₹50,000 beyond 80C limit.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      value={npsInvestment}
                      onChange={(e) => setNpsInvestment(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-wealth-navy font-medium">
                      {formatCurrency(npsInvestment)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Calculation Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-wealth-charcoal mb-1">
                    Old Tax Regime
                  </div>
                  <div className="text-2xl font-bold text-wealth-navy">
                    {formatCurrency(oldRegimeTax)}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-wealth-charcoal mb-1">
                    New Tax Regime
                  </div>
                  <div className="text-2xl font-bold text-wealth-navy">
                    {formatCurrency(newRegimeTax)}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <div className="text-sm font-medium text-wealth-charcoal mb-1">
                    Recommended Regime
                  </div>
                  <div className="text-2xl font-bold text-green-600 flex items-center">
                    {betterRegime} Regime
                    <span className="ml-2 text-sm font-normal text-gray-600">
                      (Savings: {formatCurrency(taxSavings)})
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-wealth-teal hover:bg-wealth-teal/90 text-white">
                  Generate Detailed Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-wealth-teal" />
                Section 80C Progress Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-wealth-charcoal">
                    Current: {formatCurrency(section80cInvestment)}
                  </span>
                  <span className="text-sm font-medium text-wealth-charcoal">
                    Target: {formatCurrency(150000)}
                  </span>
                </div>
                <Progress value={section80cProgress} className="h-2" />
              </div>

              <div className="bg-blue-50 p-4 rounded-md flex items-start mb-6">
                <InfoIcon className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800">
                    You still have room to invest {formatCurrency(150000 - section80cInvestment)} more under Section 80C to maximize your tax benefits.
                  </p>
                  {section80cInvestment < 150000 && (
                    <Button
                      variant="link"
                      className="text-blue-700 p-0 h-auto text-sm"
                    >
                      Explore investment options
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-sm text-wealth-charcoal mb-4">
                Recommended tax-saving instruments based on your profile:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-wealth-navy">ELSS Mutual Funds</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Highly Recommended
                    </span>
                  </div>
                  <p className="text-sm text-wealth-charcoal mb-2">
                    Equity Linked Saving Scheme with 3-year lock-in period.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-wealth-teal border-wealth-teal/30"
                  >
                    Learn more
                  </Button>
                </div>

                <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-wealth-navy">PPF</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Highly Recommended
                    </span>
                  </div>
                  <p className="text-sm text-wealth-charcoal mb-2">
                    Public Provident Fund with sovereign guarantee and tax-free returns.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-wealth-teal border-wealth-teal/30"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Tax-Saving Instruments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instrument</TableHead>
                  <TableHead>Section</TableHead>
                  <TableHead>Max Deduction</TableHead>
                  <TableHead>Invested</TableHead>
                  <TableHead>Recommendation</TableHead>
                  <TableHead>Benefits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxSavingInstruments.map((instrument) => (
                  <TableRow key={instrument.name}>
                    <TableCell className="font-medium">
                      {instrument.name}
                    </TableCell>
                    <TableCell>{instrument.section}</TableCell>
                    <TableCell>{instrument.maxDeduction}</TableCell>
                    <TableCell>{instrument.invested}</TableCell>
                    <TableCell>
                      {instrument.recommendation === "High" ? (
                        <span className="inline-flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          High
                        </span>
                      ) : instrument.recommendation === "Medium" ? (
                        <span className="text-amber-600">Medium</span>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="flex items-center text-sm text-wealth-charcoal cursor-help">
                            View Benefits
                            <HelpCircle className="ml-1 h-3 w-3 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{instrument.benefits}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-6 flex justify-end">
              <Button className="bg-wealth-teal hover:bg-wealth-teal/90 text-white">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Investment
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TaxPlanning;
