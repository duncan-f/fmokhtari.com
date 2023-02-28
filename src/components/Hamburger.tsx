import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export default function Hamburger() {
  return (
    <Menu as="div" className="md:hidden relative inline-block text-left">
      <Menu.Button className="relative group">
        <div className="relative flex overflow-hidden items-center justify-center rounded-lg w-[40px] h-[40px] transform transition-all bg-zinc-800 dark:bg-zinc-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
      <Menu.Items className="absolute right-0 origin-top-right top-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-zinc-700">
        <div className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="hamburger">
          <Menu.Item>
            <a
              href="/projects"
              className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
            >
              Projects
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="/posts"
              className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white"
            >
              Blog
            </a>
          </Menu.Item>
        </div>
      </Menu.Items>
      </Transition>
    </Menu>
  );
}
