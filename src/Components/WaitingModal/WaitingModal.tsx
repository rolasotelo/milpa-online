import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import clipboardCopy from "../../common/icons/clipboard-copy.svg";

interface Props {
  title: string;
  body: string;
  buttonText: string;
}

const WaitingModal = (props: Props) => {
  let [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.buttonText);
  };
  const h = useHistory();

  let completeButtonRef = useRef(null);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {}}
          initialFocus={completeButtonRef}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-80"
              enterTo="opacity-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-mexicanBlue opacity-40 filter blur-3xl" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-mexicanBoneLight shadow-xl rounded-2xl">
                <button ref={completeButtonRef}></button>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      h.push("/");
                    }}
                    className="bg-button-logo focus:bg-button-logo-pressed focus:outline-none"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  ></button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-mexicanPink text-center mt-1"
                >
                  {props.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-mexicanBlue text-center">
                    {props.body}
                  </p>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-mexicanGreen-dark bg-mexicanGreen-light border border-transparent rounded-md hover:bg-mexicanBone focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={copyToClipboard}
                  >
                    {props.buttonText}
                    <img
                      className="ml-2"
                      src={clipboardCopy}
                      alt="Copy to clipboard"
                      height="16px"
                      width="16px"
                    />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default WaitingModal;
