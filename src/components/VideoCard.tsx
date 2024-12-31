import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Star, ShoppingBag, User } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

interface VideoCardProps {
  video: {
    url: string;
    username: string;
    caption: string;
    likes: number;
    comments: number;
    brand: string;
    creatorProfile: {
      name: string;
      followers: string;
      bio: string;
      profilePic: string;
    };
    products?: Array<{
      id: string;
      name: string;
      price: number;
      url: string;
    }>;
  };
  isVisible: boolean;
}

const VideoCard = ({ video, isVisible }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCreatorProfile, setShowCreatorProfile] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowProducts(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowProducts(false);
      setShowCreatorProfile(false);
    }
  }, [isVisible]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProductClick = (productUrl: string) => {
    window.open(productUrl, '_blank');
    toast({
      title: "Opening product page",
      description: "Redirecting you to the product details",
    });
  };

  const handleVideoClick = () => {
    if (video.products && video.products.length > 0) {
      handleProductClick(video.products[0].url);
    } else {
      togglePlay();
    }
  };

  const toggleCreatorProfile = () => {
    setShowCreatorProfile(!showCreatorProfile);
  };

  return (
    <div className="h-screen w-full relative snap-start">
      {/* Brand header - only shows when video is visible */}
      {isVisible && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-4">
          <h1 className="text-white font-bold text-xl">{video.brand}</h1>
        </div>
      )}

      <video
        ref={videoRef}
        src={video.url}
        className="h-full w-full object-cover cursor-pointer"
        loop
        muted
        playsInline
        onClick={handleVideoClick}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* Video info */}
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="font-bold text-lg">{video.username}</h2>
        <p className="text-sm opacity-90">{video.caption}</p>
        <a 
          href={video.products?.[0]?.url || 'https://www.amazon.com'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-pink-500 hover:text-pink-400 transition-colors mt-2 inline-block"
        >
          Shop Now
        </a>
      </div>

      {/* Creator Profile Modal */}
      {showCreatorProfile && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-white">
          <img 
            src={video.creatorProfile.profilePic} 
            alt={video.creatorProfile.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{video.creatorProfile.name}</h2>
          <p className="text-sm mb-2">{video.creatorProfile.followers} followers</p>
          <p className="text-sm text-center mb-4">{video.creatorProfile.bio}</p>
          <Button 
            variant="outline" 
            onClick={toggleCreatorProfile}
            className="bg-white/10 hover:bg-white/20"
          >
            Close
          </Button>
        </div>
      )}

      {/* Product links */}
      {showProducts && video.products && (
        <div className="absolute left-4 right-16 bottom-32 space-y-2">
          {video.products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product.url)}
              className="flex items-center w-full bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-black/70 transition-colors"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              <span className="flex-1">{product.name}</span>
              <span className="font-bold">${product.price}</span>
            </button>
          ))}
        </div>
      )}

      {/* Interaction buttons */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-black/50 hover:bg-black/70 w-12 h-12"
            onClick={toggleCreatorProfile}
          >
            <User className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">Profile</span>
        </div>

        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70 w-12 h-12">
            <Heart className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">{video.likes}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70 w-12 h-12">
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">{video.comments}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70 w-12 h-12">
            <Star className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
