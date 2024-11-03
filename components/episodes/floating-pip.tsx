"use client";

import { useState, useEffect } from "react";
import { VideoPlayer } from "@/components/video/video-player";
import { PiPContainer } from "@/components/video/pip-container";

interface FloatingPiPProps {
  videoUrl: string;
  thumbnail: string;
  slug: string;
}

export function FloatingPiP({ videoUrl, thumbnail, slug }: FloatingPiPProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasShownPiP, setHasShownPiP] = useState(false);

  useEffect(() => {
    // Only show PiP once per session
    if (hasShownPiP) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasShownPiP(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, [hasShownPiP]);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  if (!isVisible || hasInteracted) return null;

  return (
    <PiPContainer
      isVisible={isVisible}
      onClose={handleClose}
      href={`/episodes/${slug}`}
    >
      <VideoPlayer
        src={videoUrl}
        poster={thumbnail}
        autoPlay={true}
        muted={true}
        onPlay={() => {}}
      />
    </PiPContainer>
  );
}