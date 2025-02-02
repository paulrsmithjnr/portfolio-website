const Terminal = () => {
  return (
    <div className="h-screen w-screen bg-black-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-[#1e1e1e] rounded-lg overflow-hidden shadow-[0_0_100px_-5px_rgba(87,8,145,0.5)] transition-shadow duration-300">
        {/* Title bar */}
        <div className="bg-[#252526] px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="flex-1 text-center text-sm text-gray-400">
            www.paulsmith.codes
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm">
          <div className="text-white mb-4">Welcome</div>
          
          <div className="text-white mb-6">Starting the server...</div>
          
          <div className="text-white mb-4">You can run several commands:</div>
          
          <div className="mb-2">
            <span className="text-[#56b6c2]">about me</span>
            <div className="ml-4 text-white">Who am i and what do i do.</div>
          </div>
          
          <div className="mb-2">
            <span className="text-[#56b6c2]">all</span>
            <div className="ml-4 text-white">See all commands.</div>
          </div>
          
          <div className="mb-4">
            <span className="text-[#56b6c2]">social -a</span>
            <div className="ml-4 text-white">All my social networks.</div>
          </div>
          
          <div className="mb-4">
            <span className="text-[#98c379]"># user</span>
            <span className="text-[#61afef]"> in </span>
            <span className="text-white">~/heber-leonard</span>
          </div>
          
          <div className="text-green-500">{'>'}</div>
        </div>
      </div>
    </div>
  );
};

export default Terminal; 