import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';
import { useToast } from './ui/use-toast';

// Temporary mock data
const MOCK_VIDEOS = [
  {
    id: 1,
    url: 'https://player.vimeo.com/progressive_redirect/playback/735428933/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=55b89fcd1b9f4a8e8c0f0f3f8c5cc38ec2f0b0e8a7749e1c03b0c0eee00c6f3c',
    username: '@techreview',
    caption: 'Unboxing the latest smartphone - amazing camera quality! 📱✨',
    likes: 2534,
    comments: 189,
    brand: 'TechGear',
    creatorProfile: {
      name: 'Tech Review Pro',
      followers: '450K',
      bio: 'Daily tech reviews and unboxing | Smartphone expert 📱',
      profilePic: 'https://i.pravatar.cc/150?img=12'
    },
    products: [
      {
        id: 'p1',
        name: 'Latest Smartphone Pro Max',
        price: 999.99,
        url: 'https://www.amazon.com/smartphone',
      },
      {
        id: 'p2',
        name: 'Premium Phone Case',
        price: 29.99,
        url: 'https://www.amazon.com/phone-case',
      }
    ]
  },
  {
    id: 2,
    url: 'https://player.vimeo.com/progressive_redirect/playback/748627659/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=5e1c5f7f7f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f',
    username: '@makeupmaster',
    caption: 'Get ready with me using this amazing new foundation! 💄✨',
    likes: 3892,
    comments: 256,
    brand: 'BeautyGlow',
    creatorProfile: {
      name: 'Makeup Master',
      followers: '280K',
      bio: 'Professional MUA | Beauty tips & tutorials 💄',
      profilePic: 'https://i.pravatar.cc/150?img=9'
    },
    products: [
      {
        id: 'p3',
        name: 'Luminous Foundation',
        price: 42.99,
        url: 'https://www.amazon.com/foundation',
      },
      {
        id: 'p4',
        name: 'Pro Makeup Brush Set',
        price: 35.99,
        url: 'https://www.amazon.com/brushes',
      }
    ]
  },
  {
    id: 3,
    url: 'https://player.vimeo.com/progressive_redirect/playback/742593303/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=6c6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e6f6e',
    username: '@kitchenguru',
    caption: 'Making healthy smoothies with this amazing new blender! 🥤🍓',
    likes: 1956,
    comments: 142,
    brand: 'KitchenPro',
    creatorProfile: {
      name: 'Kitchen Guru',
      followers: '180K',
      bio: 'Healthy recipes & kitchen gadget reviews 🥗',
      profilePic: 'https://i.pravatar.cc/150?img=7'
    },
    products: [
      {
        id: 'p5',
        name: 'Pro Blender 3000',
        price: 199.99,
        url: 'https://www.amazon.com/blender',
      },
      {
        id: 'p6',
        name: 'Smoothie Recipe Book',
        price: 24.99,
        url: 'https://www.amazon.com/recipe-book',
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