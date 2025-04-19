
import { ArrowRight, BarChart3, Shield, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wealth-lightGray">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-wealth-navy">
                Build Your Wealth with Confidence
              </h1>
              <p className="text-xl text-wealth-charcoal">
                Take control of your financial future with powerful tools that simplify investing, 
                tax planning, and wealth management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button className="bg-wealth-teal hover:bg-wealth-teal/90 text-white px-8 py-6 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-wealth-navy opacity-10"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80" 
                  alt="Wealth Management Dashboard" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Grow Your Wealth</h2>
            <p className="text-wealth-charcoal text-lg max-w-3xl mx-auto">
              Our comprehensive suite of tools helps you make smarter investment decisions, 
              minimize taxes, and protect your assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<TrendingUp size={32} />}
              title="Investment Tracking"
              description="Monitor stocks, mutual funds, bonds, and more in one unified dashboard."
              color="bg-blue-50"
              textColor="text-blue-600"
            />
            <FeatureCard 
              icon={<BarChart3 size={32} />}
              title="Tax Planning"
              description="Optimize your tax strategy with personalized recommendations."
              color="bg-green-50"
              textColor="text-green-600"
            />
            <FeatureCard 
              icon={<Shield size={32} />}
              title="Insurance Advisory"
              description="Compare and manage insurance policies to protect what matters most."
              color="bg-purple-50"
              textColor="text-purple-600"
            />
            <FeatureCard 
              icon={<Briefcase size={32} />}
              title="Portfolio Analytics"
              description="Gain insights into your portfolio's performance, risk, and allocation."
              color="bg-amber-50"
              textColor="text-amber-600"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-wealth-charcoal text-lg max-w-3xl mx-auto">
              See what our users are saying about how WealthBuildPro has transformed their financial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="WealthBuildPro helped me understand my investments and plan for retirement. The tax optimization features alone saved me thousands."
              author="Sarah K."
              title="Marketing Executive"
            />
            <TestimonialCard 
              quote="The portfolio visualization tools are incredible. I finally have clarity on my asset allocation and risk exposure."
              author="Michael T."
              title="Software Engineer"
            />
            <TestimonialCard 
              quote="As someone new to investing, the educational resources and intuitive interface made wealth building approachable and less intimidating."
              author="Jessica M."
              title="Healthcare Professional"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-wealth-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Take Control of Your Financial Future?</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto">
            Join thousands of users who've already transformed their approach to wealth building. 
            Start your journey today with our powerful tools and resources.
          </p>
          <Link to="/register">
            <Button className="bg-wealth-teal hover:bg-wealth-teal/90 text-white px-8 py-6 text-lg">
              Start Building Wealth Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wealth-charcoal text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">WealthBuildPro</h3>
              <p className="text-sm">
                Your comprehensive platform for wealth building, investment tracking, 
                tax planning, and financial education.
              </p>
            </div>
            <div>
              <h4 className="text-white text-base font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/stocks" className="hover:text-white">Investment Tracking</Link></li>
                <li><Link to="/tax-planning" className="hover:text-white">Tax Planning</Link></li>
                <li><Link to="/insurance" className="hover:text-white">Insurance Advisory</Link></li>
                <li><Link to="/portfolio" className="hover:text-white">Portfolio Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/learn" className="hover:text-white">Learning Center</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/disclaimer" className="hover:text-white">Investment Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} WealthBuildPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  textColor: string;
}

const FeatureCard = ({ icon, title, description, color, textColor }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md card-hover">
      <div className={`${color} ${textColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-wealth-charcoal">{description}</p>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
}

const TestimonialCard = ({ quote, author, title }: TestimonialCardProps) => {
  return (
    <div className="bg-wealth-lightGray rounded-xl p-6 shadow-sm card-hover">
      <p className="text-wealth-charcoal italic mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default Index;
