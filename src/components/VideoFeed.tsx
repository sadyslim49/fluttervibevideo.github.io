import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';
import { useToast } from './ui/use-toast';

// Temporary mock data
const MOCK_VIDEOS = [
  {
    id: 1,
    url: 'https://player.vimeo.com/external/373839467.sd.mp4?s=39df58c1f8c16c0c294cca98c58c858e0c0f4a31&profile_id=164&oauth2_token_id=57447761',
    username: '@techreviewer',
    caption: 'Latest smart gadgets for your home 🏠✨',
    likes: 1534,
    comments: 89,
    brand: 'Smart Home Tech',
    creatorProfile: {
      name: 'Tech Reviewer',
      followers: '250K',
      bio: 'Reviewing the latest in tech | Smart home enthusiast 🏠',
      profilePic: 'https://i.pravatar.cc/150?img=3'
    },
    products: [
      {
        id: 'p1',
        name: 'Smart Home Hub',
        price: 129.99,
        url: 'https://www.amazon.com/smart-home-hub',
      },
      {
        id: 'p2',
        name: 'WiFi LED Bulbs (4-pack)',
        price: 49.99,
        url: 'https://www.amazon.com/smart-bulbs',
      }
    ]
  },
  {
    id: 2,
    url: 'https://player.vimeo.com/external/474409562.sd.mp4?s=e41e146a2256cda7e7e47e4e19ce9cf4893ab497&profile_id=164&oauth2_token_id=57447761',
    username: '@beautyguru',
    caption: 'Must-have skincare products for glowing skin ✨',
    likes: 2892,
    comments: 156,
    brand: 'Glow Beauty',
    creatorProfile: {
      name: 'Beauty Guru',
      followers: '180K',
      bio: 'Sharing beauty secrets | Skincare specialist 💫',
      profilePic: 'https://i.pravatar.cc/150?img=4'
    },
    products: [
      {
        id: 'p3',
        name: 'Vitamin C Serum',
        price: 34.99,
        url: 'https://www.amazon.com/vitamin-c-serum',
      },
      {
        id: 'p4',
        name: 'Hydrating Moisturizer',
        price: 28.99,
        url: 'https://www.amazon.com/moisturizer',
      }
    ]
  },
  {
    id: 3,
    url: 'https://player.vimeo.com/external/403295268.sd.mp4?s=3446f36ca57399e7bf3e7e6d6784c9a6849ec155&profile_id=164&oauth2_token_id=57447761',
    username: '@fitnessgear',
    caption: 'Essential workout equipment for home fitness 💪',
    likes: 1756,
    comments: 92,
    brand: 'FitGear Pro',
    creatorProfile: {
      name: 'Fitness Pro',
      followers: '120K',
      bio: 'Home workout specialist | Fitness equipment reviews 🏋️‍♂️',
      profilePic: 'https://i.pravatar.cc/150?img=5'
    },
    products: [
      {
        id: 'p5',
        name: 'Resistance Bands Set',
        price: 24.99,
        url: 'https://www.amazon.com/resistance-bands',
      },
      {
        id: 'p6',
        name: 'Adjustable Dumbbells',
        price: 149.99,
        url: 'https://www.amazon.com/dumbbells',
      }
    ]
  }
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