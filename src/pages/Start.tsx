import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, DollarSign, Phone, CheckCircle, Smartphone } from "lucide-react";

const Start = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: "buying",
      icon: Home,
      title: "Buying a home",
      description: "Get pre-approved for a purchase loan"
    },
    {
      id: "refinancing",
      icon: RefreshCw,
      title: "Refinancing my mortgage",
      description: "Lower your rate or cash out equity"
    },
    {
      id: "cash-out",
      icon: DollarSign,
      title: "Get cash from my home",
      description: "Access your home's equity with a HELOC"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      text: "Custom mortgage rates"
    },
    {
      icon: DollarSign,
      text: "Exclusive offers"
    },
    {
      icon: Smartphone,
      text: "A personalized dashboard"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="light" />

      {/* Help Section */}
      <div className="py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            <span>Need help? Call 415-523-8837</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="py-4 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-better-green rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm Betsy!
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              What can I help you with?
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-12">
            {options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all hover:border-better-green hover:bg-better-green/5 ${
                    selectedOption === option.id 
                      ? "border-better-green bg-better-green/5" 
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-better-green/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-better-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                      <p className="text-gray-600 mt-1">{option.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$100B</div>
              <div className="text-sm text-gray-600">home loans funded entirely online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">400K</div>
              <div className="text-sm text-gray-600">Customers who chose a Better Mortgage</div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-better-green/5 rounded-xl p-6 mb-8">
            <p className="text-gray-700 mb-4 font-medium">After a few questions, you'll unlock:</p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-better-green" />
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Continue Button */}
          <Button 
            variant="better-primary" 
            size="lg" 
            className="w-full max-w-sm"
            disabled={!selectedOption}
          >
            Continue
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Start;