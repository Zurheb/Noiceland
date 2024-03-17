export const Medium = () => {
    return (
      <div className="text-white py-16 px-5 lg:px-10">
        <h5 className="text-center lg:text-left">CATEGORIES</h5>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-20 py-10">
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h2 className="hover:cursor-pointer hover:text-gray-500">Animation</h2>
            <h2 className="hover:cursor-pointer hover:text-gray-500">Interactive Design</h2>
          </div>
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h2 className="hover:cursor-pointer hover:text-gray-500">Animation</h2>
            <h2 className="hover:cursor-pointer hover:text-gray-500">Interactive Design</h2>
          </div>
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h2 className="hover:cursor-pointer hover:text-gray-500">Animation</h2>
            <h2 className="hover:cursor-pointer hover:text-gray-500">Interactive Design</h2>
          </div>
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h2 className="hover:cursor-pointer hover:text-gray-500">Animation</h2>
            <h2 className="hover:cursor-pointer hover:text-gray-500">Interactive Design</h2>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <form className="text-center lg:text-left">
            <h5>SUBSCRIBE TO NEWSLETTER</h5>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black px-4 py-2 rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-black hover:text-white focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };