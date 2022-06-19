import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useCallback } from "react";
import clipboardCopy from "../../common/icons/clipboard-copy.svg";

interface Props {
  title: string;
  body: string;
  buttonText: string;
}

function Trick() {
  /* This element is to trick the browser into centering the modal contents. */
  return (
    <span className="inline-block h-screen align-middle" aria-hidden="true">
      &#8203;
    </span>
  );
}

function Overlay() {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-80"
      enterTo="opacity-0"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-milpaBlue-default opacity-40 filter blur-3xl" />
    </Transition.Child>
  );
}

function Logo() {
  return (
    <div className="flex justify-center">
      <span
        id="copy-button"
        className="bg-button-logo"
        style={{
          width: "50px",
          height: "50px",
        }}
      />
    </div>
  );
}

function ModalTitle(props: { title: string; body: string }) {
  const { title, body } = props;
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-milpaPink-default text-center mt-1"
      >
        {title}
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-milpaPink-dark text-center">{body}</p>
      </div>
    </>
  );
}

function GameCodeButton(props: { buttonText: string }) {
  const { buttonText } = props;
  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(buttonText).catch(() => {
      window.location.reload();
    });
  }, [buttonText]);
  return (
    <div className="flex justify-center mt-4">
      <button
        type="button"
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-milpaGreen-default bg-mexicanGreen-light border border-transparent rounded-md hover:bg-mexicanBone focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        onClick={copyToClipboard}
      >
        {buttonText}
        <img
          className="ml-2"
          src={clipboardCopy}
          alt="Copy to clipboard"
          height="16px"
          width="16px"
        />
      </button>
    </div>
  );
}

function Modal(props: Props) {
  const { title, body, buttonText } = props;
  const completeButtonRef = useRef(null);

  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-milpaBeige-light shadow-xl rounded-2xl">
        {/* eslint-disable */}
        <button type="button" ref={completeButtonRef} />
        {/* eslint-enable */}
        <Logo />
        <ModalTitle title={title} body={body} />
        <GameCodeButton buttonText={buttonText} />
      </div>
    </Transition.Child>
  );
}

function OverlayAndModal(props: Props) {
  const { title, body, buttonText } = props;
  return (
    <div className="min-h-screen px-4 text-center">
      <Overlay />
      <Trick />
      <Modal title={title} body={body} buttonText={buttonText} />
    </div>
  );
}

function WaitingModal(props: Props) {
  const { title, body, buttonText } = props;
  const isOpen = true;
  const completeButtonRef = useRef(null);
  const onClose = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
        initialFocus={completeButtonRef}
      >
        <OverlayAndModal title={title} body={body} buttonText={buttonText} />
      </Dialog>
    </Transition>
  );
}

export default WaitingModal;
