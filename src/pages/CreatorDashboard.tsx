import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration
const MOCK_VIDEOS = [
  {
    id: "1",
    url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    username: "@creative_studio",
    caption: "Summer collection showcase",
    likes: 1234,
    comments: 45,
    earnings: 500,
    status: "approved",
  },
  {
    id: "2",
    url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    username: "@creative_studio",
    caption: "Nature-inspired product shoot",
    likes: 892,
    comments: 23,
    earnings: 300,
    status: "pending",
  },
];

const CreatorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
          <Button 
            variant="ghost" 
            className="text-white hover:text-gray-300"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
            <h1 className="text-2xl sm:text-3xl font-bold">Creator Dashboard</h1>
            <Button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700">
              Find Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {MOCK_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} isVisible={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;