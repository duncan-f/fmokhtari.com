export default function Hamburger() {
  return (
    <div className="md:hidden relative inline-block text-left">
      <button id="hamburger" data-dropdown-toggle="dropdown" className="relative group">
        <div className="relative flex overflow-hidden items-center justify-center rounded-xl w-[40px] h-[40px] transform transition-all bg-zinc-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[10px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
            <div className="bg-white h-[2px] w-5 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            <div className="bg-white h-[2px] w-5 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
            <div className="bg-white h-[2px] w-5 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
          </div>
        </div>
      </button>
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="hamburger">
          <li>
            <a
              href="/projects"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/posts"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
