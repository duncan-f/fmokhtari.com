import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { IoMenu } from 'react-icons/io5';

export default function Hamburger() {
  return (
    <Menu as="div" className="md:hidden relative inline-flex text-left">
      <Menu.Button className="relative group" aria-label="Menu">
        <div className="relative flex overflow-hidden items-center justify-center rounded-lg w-[40px] h-[40px] transform transition-all text-white bg-gray-600 dark:bg-zinc-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <IoMenu size={20} />
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
        <div className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown">
          <Menu.Item>
            <a
              href="/projects"
              className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-zinc-600 dark:hover:text-white"
            >
              Projects
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="/posts"
              className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-zinc-600 dark:hover:text-white"
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
