import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';
import { useToast } from './ui/use-toast';

// Temporary mock data
const MOCK_VIDEOS = [
  {
    id: 1,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    username: '@neon_vibes',
    caption: 'Living that neon life ✨',
    likes: 1234,
    comments: 45,
  },
  {
    id: 2,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    username: '@nature_lover',
    caption: 'Spring is here! 🌸',
    likes: 892,
    comments: 23,
  },
];

const VideoFeed = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { toast } = useToast();

  const handleScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (e.deltaY > 0 && currentVideoIndex < MOCK_VIDEOS.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  };

  const handleUpload = () => {
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
    <div 
      className="h-screen w-full bg-tiktok-dark overflow-hidden relative snap-y snap-mandatory"
      onWheel={handleScroll}
    >
      <div 
        className="transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${currentVideoIndex * 100}%)` }}
      >
        {MOCK_VIDEOS.map((video, index) => (
          <VideoCard key={video.id} video={video} isVisible={index === currentVideoIndex} />
        ))}
      </div>
      
      <Button
        onClick={handleUpload}
        className="fixed right-4 bottom-4 bg-tiktok-pink hover:bg-tiktok-pink/90 rounded-full p-4 shadow-lg animate-fade-up"
      >
        <Upload className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default VideoFeed;