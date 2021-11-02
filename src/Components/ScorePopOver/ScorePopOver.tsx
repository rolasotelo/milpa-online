import { Popover } from "@headlessui/react";
import React, { LegacyRef, useState } from "react";
import { usePopper } from "react-popper";

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
              setReferenceElement as unknown as
                | LegacyRef<HTMLButtonElement>
                | undefined
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
          <Popover.Overlay
            className={`${
              open ? "opacity-30 fixed inset-0" : "opacity-0"
            } bg-black`}
          />

          <Popover.Panel
            ref={
              setPopperElement as unknown as
                | LegacyRef<HTMLDivElement>
                | undefined
            }
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="grid grid-cols-2 h-56 w-36 bg-white">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default ScorePopOver;
