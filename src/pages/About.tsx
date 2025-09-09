import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="light" />

      {/* Hero Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-better-green text-lg font-semibold mb-6">Our mission</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-better-green mb-2">$100B+</div>
              <div className="text-gray-600">funded entirely online</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-better-green mb-2">400K+</div>
              <div className="text-gray-600">customers who chose Better Mortgage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-better-green mb-2">8,000+</div>
              <div className="text-gray-600">five-star reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-better-green mb-2">50</div>
              <div className="text-gray-600">states served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  After going through the traditional mortgage process ourselves, we knew there had to be a better way.
                </p>
                <p>
                  We founded Better in 2016 to make homeownership more accessible through technology, removing the complexity and inefficiencies of the traditional mortgage process.
                </p>
                <p>
                  Today, we've funded over $100 billion in home loans entirely online, helping hundreds of thousands of customers achieve their dream of homeownership.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/start">
                  <Button variant="better-primary">
                    Start your journey
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-better-green/10 p-6 rounded-xl">
                <Users className="w-8 h-8 text-better-green mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Customer First</h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make puts our customers' needs first.
                </p>
              </div>
              
              <div className="bg-better-green/10 p-6 rounded-xl">
                <Award className="w-8 h-8 text-better-green mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Award Winning</h3>
                <p className="text-gray-600 text-sm">
                  Recognized for excellence in digital lending innovation.
                </p>
              </div>
              
              <div className="bg-better-green/10 p-6 rounded-xl">
                <Globe className="w-8 h-8 text-better-green mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Nationwide</h3>
                <p className="text-gray-600 text-sm">
                  Serving customers across all 50 states.
                </p>
              </div>
              
              <div className="bg-better-green/10 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-better-green mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Growing Fast</h3>
                <p className="text-gray-600 text-sm">
                  One of the fastest-growing mortgage lenders in America.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our values
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Transparency</h3>
              <p className="text-gray-300">
                No hidden fees, no surprises. We believe in complete transparency throughout the mortgage process.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We leverage cutting-edge technology to make the mortgage process faster and more efficient.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Accessibility</h3>
              <p className="text-gray-300">
                Homeownership should be accessible to everyone. We're breaking down barriers to make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;