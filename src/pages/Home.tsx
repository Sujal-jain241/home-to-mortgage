import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient background */}
      <div className="bg-better-gradient min-h-screen relative overflow-hidden">
        <Navigation variant="dark" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Better Forever Banner */}
            <div className="mb-8 inline-block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <span className="text-white text-sm font-medium">
                  Better Forever: Save on future home loans with $0 origination fees
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The first{" "}
              <span className="bg-ai-gradient bg-clip-text text-transparent">
                AI-powered
              </span>{" "}
              Mortgage
            </h1>

            {/* Subheading */}
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our tech unlocks lower rates, higher chances of approval,
              and a lightning‑fast process from approval to closing. Over $100 billion funded.
            </p>

            {/* CTA Button */}
            <Link to="/start">
              <Button variant="better-primary" size="lg" className="mb-4">
                Start my pre-approval
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <p className="text-white/70 text-sm">
              <Clock className="w-4 h-4 inline mr-2" />
              3 min | No hard credit check
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm">
                <div className="bg-better-green rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 text-white">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm font-medium">Congrats, you're pre-approved</span>
                  </div>
                  <div className="text-white text-2xl font-bold mt-2">$450,000</div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <div className="w-2 h-2 bg-better-green rounded-full"></div>
                      <span>580 FICO - You don't need perfect credit to qualify</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <Zap className="w-4 h-4 text-better-green" />
                      <span>Instant answers with Betsy AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find out why we're better.
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-better-green font-bold">Excellent</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-better-green rounded-sm"></div>
                ))}
              </div>
              <span className="font-bold">4.4 out of 5</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-better-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Get pre-approved in as little as 3 minutes with our AI-powered process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-better-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Trusted</h3>
              <p className="text-gray-600">
                Bank-level security with over $100 billion in funded loans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-better-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">One Day Mortgage</h3>
              <p className="text-gray-600">
                From locked rate to Commitment Letter in a single day.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link to="/mortgage-calculator">
              <Button variant="better-primary" size="lg">
                Calculate your payments
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;