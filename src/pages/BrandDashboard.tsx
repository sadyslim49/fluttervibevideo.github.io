import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
    status: "review",
    deadline: "2024-04-15",
  },
];

const BrandDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Brand Dashboard</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Create New Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {MOCK_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;