import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator as CalculatorIcon, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState("30");
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("");
  const [propertyTaxes, setPropertyTaxes] = useState(0);
  const [homeInsurance, setHomeInsurance] = useState(0);
  const [hoaFees, setHoaFees] = useState(0);

  const loanAmount = homePrice - downPayment;
  const downPaymentPercent = Math.round((downPayment / homePrice) * 100);
  
  // Simple mortgage calculation
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = parseInt(loanTerm) * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  const totalMonthlyPayment = Math.round(monthlyPayment + propertyTaxes + homeInsurance + hoaFees);

  const handleDownPaymentChange = (value: number[]) => {
    setDownPayment(value[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation variant="light" />

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Estimate your monthly mortgage payments
            </h1>
          </div>

          {/* Calculator Layout */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Fields */}
              <div className="lg:col-span-2 space-y-6">
                {/* Home Price and Down Payment */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="home-price" className="text-sm font-medium text-gray-700 mb-2 block">
                      Home price
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="home-price"
                        type="number"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="pl-8 h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="down-payment" className="text-sm font-medium text-gray-700 mb-2 block">
                      Down payment
                    </Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="down-payment"
                          type="number"
                          value={downPayment}
                          onChange={(e) => setDownPayment(Number(e.target.value))}
                          className="pl-8 h-12 text-lg"
                        />
                      </div>
                      <div className="bg-gray-100 px-4 py-3 rounded-lg flex items-center min-w-[80px] justify-center">
                        <span className="text-lg font-medium">{downPaymentPercent}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Down Payment Slider */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-4 block">
                    Adjust down payment
                  </Label>
                  <Slider
                    value={[downPayment]}
                    onValueChange={handleDownPaymentChange}
                    max={homePrice * 0.5}
                    min={homePrice * 0.03}
                    step={1000}
                    className="w-full"
                  />
                </div>

                {/* Loan Term and Interest Rate */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="loan-term" className="text-sm font-medium text-gray-700 mb-2 block">
                      Length of loan
                    </Label>
                    <Select value={loanTerm} onValueChange={setLoanTerm}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interest-rate" className="text-sm font-medium text-gray-700 mb-2 block">
                      Interest rate
                    </Label>
                    <div className="relative">
                      <Input
                        id="interest-rate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="pr-8 h-12 text-lg"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">%</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zip-code" className="text-sm font-medium text-gray-700 mb-2 block">
                      ZIP code
                    </Label>
                    <Input
                      id="zip-code"
                      type="text"
                      placeholder="12345"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-600 mb-2">Monthly payment</div>
                  <div className="text-4xl font-bold text-gray-900">
                    ${totalMonthlyPayment.toLocaleString()}/mo
                  </div>
                </div>

                <Button variant="better-primary" className="w-full mb-6" asChild>
                  <Link to="/start">Get pre-approved</Link>
                </Button>

                {/* Payment Breakdown */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Monthly payment breakdown</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Principal & interest</span>
                      <span className="font-medium">${Math.round(monthlyPayment).toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-600">Property taxes</span>
                        <Input
                          type="number"
                          value={propertyTaxes}
                          onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                          className="mt-1 h-8 text-sm"
                          placeholder="0"
                        />
                      </div>
                      <span className="font-medium">${propertyTaxes}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-600">Homeowners insurance</span>
                        <Input
                          type="number"
                          value={homeInsurance}
                          onChange={(e) => setHomeInsurance(Number(e.target.value))}
                          className="mt-1 h-8 text-sm"
                          placeholder="0"
                        />
                      </div>
                      <span className="font-medium">${homeInsurance}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-gray-600">HOA fees</span>
                        <Input
                          type="number"
                          value={hoaFees}
                          onChange={(e) => setHoaFees(Number(e.target.value))}
                          className="mt-1 h-8 text-sm"
                          placeholder="0"
                        />
                      </div>
                      <span className="font-medium">${hoaFees}</span>
                    </div>
                  </div>

                  {/* Visual Bar */}
                  <div className="mt-6">
                    <div className="bg-better-green h-6 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                        100%
                      </div>
                    </div>
                    <div className="text-center mt-2 text-4xl font-bold text-gray-900">
                      ${totalMonthlyPayment.toLocaleString()}/mo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Calculator;