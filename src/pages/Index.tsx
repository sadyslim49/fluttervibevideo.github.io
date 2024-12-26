import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Creatore
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Creators Inspire. Brands Thrive. You Shop.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/brand/dashboard">
              <Button size="lg" className="bg-[#8E9196] hover:bg-[#8E9196]/90">
                I'm a Brand
              </Button>
            </Link>
            <Link to="/creator/dashboard">
              <Button size="lg" className="bg-[#8E9196] hover:bg-[#8E9196]/90">
                I'm a Creator
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-[#8E9196]/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">For Brands</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Post video project requirements</li>
              <li>• Review and approve submissions</li>
              <li>• Track campaign performance</li>
              <li>• Direct messaging with creators</li>
            </ul>
          </div>
          
          <div className="p-6 bg-[#8E9196]/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">For Creators</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Browse available projects</li>
              <li>• Submit video content</li>
              <li>• Earn from accepted videos</li>
              <li>• Get commission on sales</li>
            </ul>
          </div>
          
          <div className="p-6 bg-[#8E9196]/10 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">For Viewers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Watch authentic content</li>
              <li>• Shop featured products</li>
              <li>• Engage with creators</li>
              <li>• Share favorite videos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;