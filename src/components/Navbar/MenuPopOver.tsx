/* eslint-disable no-nested-ternary,react/jsx-props-no-spreading,react/no-array-index-key */
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { EventTargetWithName } from "../../common/interfaces";
import { Languages } from "../../common/constants";

type OptionType = { option: string };

const Options = [
  {
    name: "Home",
    option: "home",
    description: "Main page 🌽",
    href: "/",
  },
  {
    name: "Play",
    option: "play",
    description: "Let the better Milpa win 🏆!",
    href: "/play",
  },
  {
    name: "Rules",
    option: "rules",
    description: "Learn to play the game 👓",
    href: "/play#learn_to_play",
  },
  {
    name: "About",
    option: "about",
    description: "What is a Milpa 🌵?",
    href: "/#what_is_a_milpa",
  },
];
const ButtonStyling = "w-button-square h-button-square focus:outline-none";

function Option(input: OptionType) {
  const { option } = input;
  const { t } = useTranslation();
  return (
    <div className="mx-auto">
      <p
        className="font-medium text-milpaBlue-dark text-center"
        style={{
          fontFamily: "goodlife-serif, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "1.3rem",
        }}
      >
        {t(`menu.body.${option}.title`)}
      </p>
      <p className="text-sm text-milpaBeige-light">
        {t(`menu.body.${option}.description`)}
      </p>
    </div>
  );
}

function MenuOptions() {
  return Options.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className="-m-3 flex rounded-lg p-2 transition duration-150 ease-in-out bg-milpaGreen-light hover:bg-milpaGreen-default focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
    >
      <Option option={item.option} />
    </a>
  ));
}

function LanguageOptions() {
  const { i18n } = useTranslation();
  const { resolvedLanguage, changeLanguage } = i18n;

  const handleClick: MouseEventHandler<HTMLButtonElement> = React.useCallback(
    async (e) => {
      const { name: newLanguage } = e.target as EventTargetWithName;
      await changeLanguage(newLanguage);
    },
    [changeLanguage]
  );

  return Object.keys(Languages).map((lng) => (
    <button
      key={Languages[lng].code}
      name={Languages[lng].code}
      onClick={handleClick}
      type="button"
      className={`
      ${
        resolvedLanguage === lng
          ? "text-milpaBeige-light underline"
          : "text-milpaBeige-default"
      }
      flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-milpaPink-dark focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 text-sm text-milpaBeige-light`}
    >
      {`${Languages[lng].nativeName}`}
    </button>
  ));
}

function MenuFooter() {
  const { t } = useTranslation();
  return (
    <div className="bg-milpaPink-default p-4">
      <span className="flex items-center p-2">
        <span className="text-sm font-medium text-milpaBeige-light">
          {t("menu.footer.title")} 🌐
        </span>
      </span>
      <div className="flex justify-around">{LanguageOptions()}</div>
    </div>
  );
}

function Panel() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg ring-8 ring-milpaBlue-dark  bg-milpaBlue-default">
      <div className="absolute left-1 top-1 bg-symbol-corner-1 w-8 h-8 " />
      <div className="absolute right-1 top-1 bg-symbol-corner-4 w-8 h-8" />
      <div className="absolute left-1 bottom-1 bg-symbol-corner-3 w-8 h-8" />
      <div className="absolute right-1 bottom-1 bg-symbol-corner-2 w-8 h-8" />
      <div className="relative grid gap-8  p-10 lg:grid-cols-2">
        {MenuOptions()}
      </div>
      <MenuFooter />
    </div>
  );
}

function TransitionAndPanel() {
  return (
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
        <Panel />
      </Popover.Panel>
    </Transition>
  );
}

function MenuPopOver() {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button
            className={`${ButtonStyling} bg-button-menu focus:bg-button-menu-pressed`}
          />
          <TransitionAndPanel />
        </>
      )}
    </Popover>
  );
}

export default MenuPopOver;
