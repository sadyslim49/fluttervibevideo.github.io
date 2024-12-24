import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, ChevronLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for demonstration
const PROJECT_DETAILS = {
  id: "1",
  title: "Summer Collection Promo",
  description: "Create engaging 30-second videos showcasing our summer collection. Focus on lifestyle shots and product features.",
  requirements: [
    "Video length: 30 seconds",
    "Vertical format (9:16)",
    "Must include product close-ups",
    "Upbeat background music",
    "Clear call-to-action",
  ],
  budget: 1000,
  deadline: "2024-05-01",
  status: "active",
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmission = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        toast({
          title: "Video selected",
          description: `${file.name} ready to upload`,
        });
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="text-white hover:text-gray-300 mb-6"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back
        </Button>
        
        <h1 className="text-3xl font-bold mb-6">{PROJECT_DETAILS.title}</h1>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          <p className="text-gray-300 mb-6">{PROJECT_DETAILS.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                {PROJECT_DETAILS.requirements.map((req, index) => (
                  <li key={index}>• {req}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Budget</h3>
                <p className="text-gray-300">${PROJECT_DETAILS.budget}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Deadline</h3>
                <p className="text-gray-300">
                  {new Date(PROJECT_DETAILS.deadline).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleSubmission}
          className="w-full bg-pink-600 hover:bg-pink-700"
        >
          <Upload className="mr-2 h-4 w-4" />
          Submit Video
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;