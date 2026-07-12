import React, { useRef, useEffect } from 'react';

const ProjectVideo = ({ src, className }) => {
  const videoRef = useRef(null);
  const playPromiseRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (videoElement) {
        if (entry.isIntersecting) {
          const playPromise = videoElement.play();
          if (playPromise !== undefined) {
            playPromiseRef.current = playPromise;
            playPromise.catch((error) => {
              // Suppress browser play interruption or autoplay prevention errors
              console.log("Video playback prevented or interrupted:", error);
            });
          }
        } else {
          if (playPromiseRef.current) {
            playPromiseRef.current.then(() => {
              if (videoElement) videoElement.pause();
            }).catch(() => {
              // Ignore play cancellation errors
            });
          } else {
            videoElement.pause();
          }
        }
      }
    }, options);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
        try {
          videoElement.pause();
        } catch (e) {
          // Suppress errors during unmount pause
        }
      }
    };
  }, []); // Run once on mount

  // Watch for source changes and re-initialize video source loading
  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.load();
      } catch (e) {
        console.error("Error loading video src:", e);
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ProjectVideo;