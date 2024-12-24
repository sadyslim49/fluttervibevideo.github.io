import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";

// Mock data for demonstration
const MOCK_PROJECTS = [
  {
    id: "1",
    title: "Summer Collection Promo",
    budget: 1000,
    submissions: 5,
    status: "active",
    deadline: "2024-05-01",
  },
  {
    id: "2",
    title: "Product Launch Video",
    budget: 1500,
    submissions: 3,
    status: "active",
    deadline: "2024-04-15",
  },
];

const FindProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          className="text-white hover:text-gray-300 mb-6"
          onClick={() => navigate('/creator/dashboard')}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>

        <h1 className="text-3xl font-bold mb-8">Find Projects</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search projects..."
              className="pl-10 bg-gray-900 border-gray-800"
            />
          </div>
          <Button variant="outline" className="text-white border-gray-700">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindProjects;