/* eslint-disable */
import { Popover } from "@headlessui/react";
import React, { LegacyRef, useState } from "react";
import { usePopper } from "react-popper";
import useGameContext from "../../providers/GameProvider/useGameContext";
import { ScoreLogType } from "../../common/enums";

function ScorePopOver() {
  const context = useGameContext();

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left-end",
  });
  const { nickname } = context;

  const { history } = context;

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={
              setReferenceElement as LegacyRef<HTMLButtonElement> | undefined
            }
            className="bg-button-leaderboard focus:bg-button-leaderboard-pressed focus:outline-none"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <Popover.Overlay
            className={`${
              open ? "opacity-30 fixed inset-0" : "opacity-0"
            } bg-black`}
          />

          <Popover.Panel
            className="absolute px-4 mt-3 sm:px-0 w-96 "
            ref={setPopperElement as LegacyRef<HTMLDivElement> | undefined}
            style={styles.popper}
            {...attributes.popper}
          >
            <div
              className="overflow-y-scroll rounded-lg shadow-lg ring-1 ring-black bg-m ring-opacity-5"
              style={{ maxHeight: "40rem" }}
            >
              <div className="relative  bg-milpaGreen-dark p-3 flex flex-col">
                {history.map((item) => (
                  <div
                    key={new Date().getTime()}
                    className={`flex items-center p-2 m-1 ${
                      item.type === ScoreLogType.Turn
                        ? "bg-milpaGreen-light"
                        : item.type === ScoreLogType.Final_Score
                        ? "bg-milpaPink-default"
                        : item.type === ScoreLogType.End_Of_Turn
                        ? "bg-milpaPink-default"
                        : item.name.includes(nickname)
                        ? "bg-milpaBeige-default"
                        : "bg-milpaBeige-light"
                    } transition duration-150 ease-in-out rounded-lg focus:outline-none`}
                  >
                    <div className="mx-4 w-full">
                      <p
                        className={`text-sm font-medium text-gray-900 ${
                          item.type === ScoreLogType.Turn ||
                          item.type === ScoreLogType.Final_Score
                            ? "text-center"
                            : item.name.includes(nickname)
                            ? "text-left"
                            : "text-right"
                        }`}
                      >
                        {item.name}
                      </p>
                      {item.description.map((description) => (
                        <p
                          key={new Date().getTime()}
                          className={`text-sm  ${
                            item.type === ScoreLogType.Turn ||
                            item.type === ScoreLogType.Final_Score
                              ? "text-center text-white"
                              : item.type === ScoreLogType.End_Of_Turn
                              ? item.name.includes(nickname)
                                ? "text-left text-white"
                                : "text-right text-white"
                              : item.type === ScoreLogType.Card_Played
                              ? item.name.includes(nickname)
                                ? "text-left text-gray-700"
                                : "text-right text-gray-700"
                              : "text-center text-white"
                          }`}
                        >
                          {description}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-milpaGreen-light">
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
}

export default ScorePopOver;
