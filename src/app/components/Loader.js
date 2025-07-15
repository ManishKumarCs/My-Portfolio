const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="relative w-20 h-20">
        {/* Spinning Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"></div>

        {/* MK Text in Center */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl tracking-wider">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-extrabold">MK</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
