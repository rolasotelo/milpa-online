/* eslint-disable no-nested-ternary,react/jsx-props-no-spreading,react/no-array-index-key */
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const solutions = [
  {
    name: 'Home',
    description: 'Main page 🌽',
    href: '/',
  },
  {
    name: 'Play',
    description: 'Let the better Milpa win 🏆!',
    href: '/play',
  },
  {
    name: 'Rules',
    description: 'Learn to play the game 👓',
    href: '/play##',
  },
  {
    name: 'About',
    description: 'What is a Milpa 🌵?',
    href: '/##',
  },
]
const ButtonStyling = "w-button-square h-button-square focus:outline-none";

function MenuPopOver() {


  return (
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button
              className={`${ButtonStyling} bg-button-menu focus:bg-button-menu-pressed`}
            />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20  w-screen max-w-sm transform px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-milpaBlue-default">
                  <div className="relative grid gap-8  p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-milpaBeige-light hover:bg-milpaBeige-default focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >

                        <div className="ml-4">
                          <p className="text-sm font-medium text-milpaPink-default">
                            {item.name}
                          </p>
                          <p className="text-sm text-milpaBlue-default">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
  );
}

export default MenuPopOver;
