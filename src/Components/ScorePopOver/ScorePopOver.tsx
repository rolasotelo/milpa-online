import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, LegacyRef, useState } from "react";
import { usePopper } from "react-popper";
const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
];
interface Props {}

const ScorePopOver = (props: Props) => {
  let [referenceElement, setReferenceElement] = useState(null);
  let [popperElement, setPopperElement] = useState(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left-end",
  });

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={
              setReferenceElement as LegacyRef<HTMLButtonElement> | undefined
            }
          >
            <div
              className="bg-button-menu focus:bg-button-menu-pressed focus:outline-none"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </Popover.Button>
          {/* <Popover.Overlay
            className={`${
              open ? "opacity-30 fixed inset-0" : "opacity-0"
            } bg-black`}
          /> */}

          <Popover.Panel
            className="absolute px-4 mt-3 sm:px-0 w-80 "
            ref={setPopperElement as LegacyRef<HTMLDivElement> | undefined}
            style={styles.popper}
            {...attributes.popper}
          >
            <div
              className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
              style={{ maxHeight: "40rem", overflow: "scroll" }}
            >
              <div className="relative  bg-white p-3 flex flex-col">
                {solutions.map((item) => (
                  <p className="flex items-center p-2 m-1 transition duration-150 ease-in-out rounded-lg focus:outline-none">
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </p>
                ))}
              </div>
              <div className="p-4 bg-mexicanGreen-light">
                <p className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md  focus:outline-none">
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      Documentation
                    </span>
                  </span>
                  <span className="block text-sm text-white">
                    Start integrating products and tools
                  </span>
                </p>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default ScorePopOver;

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
