import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useNavigate } from "react-router-dom";

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
    status: "review",
    deadline: "2024-04-15",
  },
];

const BrandDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
          <Button 
            variant="ghost" 
            className="text-white hover:text-gray-300"
            onClick={() => navigate('/')}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
            <h1 className="text-2xl sm:text-3xl font-bold">Brand Dashboard</h1>
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" /> Create New Project
            </Button>
          </div>
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

export default BrandDashboard;