'use client'
import React, { useRef, useEffect } from 'react';

// Define types for the YouTube Player API to avoid using 'any'
interface YTPlayer {
  playVideo: () => void;
  // You can add other player methods you might use here
}

interface YTEvent {
  target: YTPlayer;
}

declare global {
  interface Window {
    YT?: {
      Player: new (id: string, options: object) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const VideoPlayer: React.FC = () => {
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    const createPlayer = () => {
      if (document.getElementById('player') && window.YT) {
        playerRef.current = new window.YT.Player('player', {
          videoId: 'd254v3At_lg',
          playerVars: {
            autoplay: 1,
            loop: 1,
            mute: 1,
            start: 0,
            end: 25,
            playlist: 'd254v3At_lg', // needed for loop
            modestbranding: 1,
            controls: 0,
            rel: 0,
          },
          events: {
            onReady: (event: YTEvent) => event.target.playVideo(),
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // Load the YouTube IFrame API if it's not already there
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      // Clean up the global function on unmount
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  return (
    <div id="player" style={{ position: 'relative', paddingTop: '56.25%' }}>
      {/* YouTube player will be injected here */}
    </div>
  );
};

export default VideoPlayer;
