const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }} // Darkens the video to make content more readable
      >
        <source src="/snow-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to ensure text readability */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.3))',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
};

export default VideoBackground;