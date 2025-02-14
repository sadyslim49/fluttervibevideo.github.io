import { Button } from "@/components/ui/button";
import { Plus, ChevronLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  budget: number;
  submissions: number;
  status: string;
  deadline: string;
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Product Review: Latest Gaming Headset",
    budget: 500,
    submissions: 3,
    status: "active",
    deadline: "2024-04-15",
  },
  {
    id: "2",
    title: "Skincare Product Unboxing Series",
    budget: 750,
    submissions: 5,
    status: "review",
    deadline: "2024-04-20",
  },
  {
    id: "3",
    title: "Tech Gadget Comparison Video",
    budget: 1000,
    submissions: 2,
    status: "active",
    deadline: "2024-04-25",
  },
  {
    id: "4",
    title: "Fitness Equipment Demo Campaign",
    budget: 800,
    submissions: 4,
    status: "review",
    deadline: "2024-04-30",
  }
];

const BrandDashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    setProjects(storedProjects.length > 0 ? storedProjects : SAMPLE_PROJECTS);
  }, []);

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
            <Button 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/create-project')}
            >
              <Plus className="mr-2 h-4 w-4" /> Create New Project
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;