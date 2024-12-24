import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from './ui/button';

interface VideoCardProps {
  video: {
    url: string;
    username: string;
    caption: string;
    likes: number;
    comments: number;
  };
  isVisible: boolean;
}

const VideoCard = ({ video, isVisible }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
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

  return (
    <div className="h-screen w-full relative snap-start">
      <video
        ref={videoRef}
        src={video.url}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        onClick={togglePlay}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* Video info */}
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="font-bold text-lg">{video.username}</h2>
        <p className="text-sm opacity-90">{video.caption}</p>
      </div>

      {/* Interaction buttons */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-4">
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
            <Share2 className="h-6 w-6 text-white" />
          </Button>
          <span className="text-xs text-white mt-1">Share</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;