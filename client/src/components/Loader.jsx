const Loader = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative w-20 h-20">
          {/* Red Circle with Pulse Animation */}
          <div className="absolute top-0 left-0 h-8 w-8 bg-red-500 rounded-full animate-pulse"></div>
  
          {/* Green Square with Rotate Animation */}
          <div className="absolute top-0 right-0 h-8 w-8 bg-green-500 animate-spin-slow"></div>
  
          {/* Inverted Blue Triangle with Bounce Animation */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[32px] border-t-blue-500 border-l-transparent border-r-transparent animate-bounce"></div>
  
          {/* Yellow Circle with Spin Animation */}
          <div className="absolute bottom-0 right-0 h-8 w-8 bg-yellow-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  