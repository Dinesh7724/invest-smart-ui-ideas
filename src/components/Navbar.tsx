
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-wealth-navy font-bold text-xl">WealthBuild</span>
            <span className="text-wealth-teal font-bold text-xl">Pro</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="hidden md:flex items-center space-x-6" />
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-wealth-navy">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-wealth-teal text-white hover:bg-wealth-teal/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden text-wealth-navy" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <NavLinks className="flex flex-col space-y-6" mobile={true} />
        <div className="flex flex-col space-y-4 mt-8">
          <Link to="/login">
            <Button variant="outline" className="w-full">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="w-full bg-wealth-teal text-white hover:bg-wealth-teal/90">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
}

const NavLinks = ({ className, mobile = false }: NavLinksProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const navItems = [
    {
      label: "Investments",
      path: "#",
      dropdown: [
        { label: "Stocks", path: "/stocks" },
        { label: "Mutual Funds", path: "/mutual-funds" },
        { label: "Bonds", path: "/bonds" },
        { label: "Government Schemes", path: "/government-schemes" },
      ],
    },
    { label: "Tax Planning", path: "/tax-planning" },
    { label: "Insurance", path: "/insurance" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "News & Insights", path: "/news" },
  ];

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <div key={item.label} className="relative">
          {item.dropdown ? (
            <div className={mobile ? "flex flex-col" : ""}>
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex items-center space-x-1 text-wealth-charcoal hover:text-wealth-navy"
              >
                <span>{item.label}</span>
                <ChevronDown size={16} className={cn(
                  "transition-transform",
                  openDropdown === item.label && "transform rotate-180"
                )} />
              </button>

              {openDropdown === item.label && (
                <div className={cn(
                  mobile ? "mt-2 ml-4 flex flex-col space-y-2" :
                  "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                )}>
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      to={dropdownItem.path}
                      className={cn(
                        mobile ? "text-wealth-charcoal py-1" :
                        "block px-4 py-2 text-wealth-charcoal hover:bg-wealth-lightGray"
                      )}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.path}
              className="text-wealth-charcoal hover:text-wealth-navy"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
