import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const CreateProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="text-white hover:text-gray-300 mb-6"
          onClick={() => navigate('/brand/dashboard')}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>

        <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Project Title</label>
            <Input 
              placeholder="Enter project title"
              className="bg-gray-900 border-gray-800"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea 
              placeholder="Describe your project requirements"
              className="bg-gray-900 border-gray-800 min-h-[150px]"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Budget ($)</label>
              <Input 
                type="number"
                placeholder="Enter budget"
                className="bg-gray-900 border-gray-800"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Deadline</label>
              <Input 
                type="date"
                className="bg-gray-900 border-gray-800"
              />
            </div>
          </div>
          
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Create Project
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;