import { Button } from "@/components/ui/button";
import VideoCard from "@/components/VideoCard";

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
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Creator Dashboard</h1>
          <Button className="bg-pink-600 hover:bg-pink-700">
            Find Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {MOCK_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} isVisible={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;