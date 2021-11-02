import { Popover } from "@headlessui/react";
import React, { LegacyRef, useState } from "react";
import { usePopper } from "react-popper";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { ScoreLogType } from "../../Realms/Pure/enums";

interface Props {}

const ScorePopOver = (props: Props) => {
  const context = useGameContext();

  let [referenceElement, setReferenceElement] = useState(null);
  let [popperElement, setPopperElement] = useState(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left-end",
  });
  const nickname = context.nickname;

  const history = context.history;

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={
              setReferenceElement as LegacyRef<HTMLButtonElement> | undefined
            }
          >
            <button
              className="bg-button-leaderboard focus:bg-button-leaderboard-pressed focus:outline-none"
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
            className="absolute px-4 mt-3 sm:px-0 w-80 "
            ref={setPopperElement as LegacyRef<HTMLDivElement> | undefined}
            style={styles.popper}
            {...attributes.popper}
          >
            <div
              className="rounded-lg shadow-lg ring-1 ring-black bg-m ring-opacity-5"
              style={{ maxHeight: "40rem", overflow: "scroll" }}
            >
              <div className="relative  bg-mexicanGreen-dark p-3 flex flex-col">
                {history.map((item) => (
                  <p
                    className={`flex items-center p-2 m-1 ${
                      item.type !== ScoreLogType.Turn
                        ? item.name.includes(nickname)
                          ? "bg-mexicanBone"
                          : "bg-mexicanBoneLight"
                        : "bg-mexicanGreen-light"
                    } transition duration-150 ease-in-out rounded-lg focus:outline-none`}
                  >
                    <div className="mx-4 w-full">
                      <p
                        className={`text-sm font-medium text-gray-900 ${
                          item.type !== ScoreLogType.Turn
                            ? item.name.includes(nickname)
                              ? "text-left"
                              : "text-right"
                            : "text-center"
                        }`}
                      >
                        {item.name}
                      </p>
                      {item.description.map((description, index) => {
                        return (
                          <p
                            key={index}
                            className={`text-sm  ${
                              item.type !== ScoreLogType.Turn
                                ? item.name.includes(nickname)
                                  ? "text-left text-gray-700"
                                  : "text-right text-gray-700"
                                : "text-center text-white"
                            }`}
                          >
                            {description}
                          </p>
                        );
                      })}
                    </div>
                  </p>
                ))}
              </div>
              <div className="p-4 bg-mexicanGreen-light">
                <p className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md  focus:outline-none">
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      Scoring History
                    </span>
                  </span>
                  <span className="block text-sm text-white">
                    Here you will find a log with all Cacao 🍫 added to your
                    total score. GLHV!
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
