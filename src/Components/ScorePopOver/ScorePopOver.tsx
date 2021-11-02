import { Popover } from "@headlessui/react";
import React, { LegacyRef, useMemo, useState } from "react";
import { usePopper } from "react-popper";
const enum ScoreLogsType {
  Card_Played = "card played",
  End_Of_Turn = "end of turn",
  Final_Score = "card played",
  Total_Score = "total score",
  Turn = "turn",
}
const solutions = () => {
  return [
    {
      name: "Turn 1",
      description: ["Atlcahualo"],
      type: ScoreLogsType.Turn,
      icon: IconOne,
    },
    {
      name: "Rolando",
      description: ["🌽 Corn Played : +5 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Gabinka",
      description: ["💩 Manure Played: +3 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Rolando",
      description: ["🌰 Beans Played : +4 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Gabinka",
      description: ["🍆 Blue Corn Played on 💩 Manure: +12 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Rolando",
      description: ["🌵 Cactus Played : +6 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Gabinka",
      description: ["🏺 Coatlicue Played: -2 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Rolando - End of first turn",
      description: [
        "🌵 Cactus Played : +6 🍫",
        "🍆 Cactus Played : +6 🍫",
        "🥕 Cactus Played : +6 🍫",
        "🌵 Cactus Played : +6 🍫",
        "🌰 Cactus Played : +6 🍫",
      ],
      type: ScoreLogsType.End_Of_Turn,
      icon: IconOne,
    },
    {
      name: "Gabinka - End of first turn",
      description: [
        "🌵 Cactus Played : +6 🍫",
        "🍄 Huitlacoche Played : +6 🍫",
        "🥕 RedCorn Played : +6 🍫",
        "🏺 Coatlicue Played : +6 🍫",
        "🌰 Beans Played : +6 🍫",
      ],
      type: ScoreLogsType.End_Of_Turn,
      icon: IconOne,
    },
    {
      name: "Turn 2",
      description: ["Tlacaxipe-Hualiztli"],
      type: ScoreLogsType.Turn,
      icon: IconOne,
    },
    {
      name: "Gabinka",
      description: ["🍄 Played Huitlacoche on 🥕 Red Corn: +5 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Rolando",
      description: ["🌵 Cactus Played : +6 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Gabinka",
      description: ["🌽 Corn Played: +4 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
    {
      name: "Rolando",
      description: ["🌧 Tlaloc Played : +4 🍫"],
      type: ScoreLogsType.Card_Played,
      icon: IconOne,
    },
  ];
};
interface Props {}

const ScorePopOver = (props: Props) => {
  let [referenceElement, setReferenceElement] = useState(null);
  let [popperElement, setPopperElement] = useState(null);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "left-end",
  });
  const yourName = "Rolando";

  const reversedSolution = useMemo(
    () => solutions().reverse().slice(),
    [solutions]
  );
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
                {reversedSolution.map((item) => (
                  <p
                    className={`flex items-center p-2 m-1 ${
                      item.type !== ScoreLogsType.Turn
                        ? item.name.includes(yourName)
                          ? "bg-mexicanBone"
                          : "bg-mexicanBoneLight"
                        : "bg-mexicanGreen-light"
                    } transition duration-150 ease-in-out rounded-lg focus:outline-none`}
                  >
                    <div className="mx-4 w-full">
                      <p
                        className={`text-sm font-medium text-gray-900 ${
                          item.type !== ScoreLogsType.Turn
                            ? item.name.includes(yourName)
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
                              item.type !== ScoreLogsType.Turn
                                ? item.name.includes(yourName)
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
