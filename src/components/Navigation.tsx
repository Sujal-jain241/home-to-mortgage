import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const location = useLocation();
  const isDark = variant === "dark";

  const navItems = [
    { name: "Buy", path: "/" },
    { name: "Refinance", path: "/" },
    { name: "HELOC", path: "/" },
    { name: "Rates", path: "/" },
    { name: "Better+", path: "/" },
  ];

  return (
    <nav className={`w-full py-4 px-6 ${isDark ? "bg-transparent" : "bg-white border-b"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-better-teal"}`}>
            Better
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:opacity-75 ${
                isDark ? "text-white" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side - Phone and Sign in */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className={`hidden sm:flex items-center space-x-2 ${
              isDark 
                ? "text-white hover:bg-white/10" 
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`${
              isDark 
                ? "text-white hover:bg-white/10" 
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;