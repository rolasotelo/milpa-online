/* eslint-disable no-nested-ternary,react/jsx-props-no-spreading,react/no-array-index-key */
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { EventTargetWithName } from "../../common/interfaces";
import { Languages } from "../../common/constants";

type OptionType =  {option: string}

const Options = [
  {
    name: 'Home',
    option: 'home',
    description: 'Main page 🌽',
    href: '/',
  },
  {
    name: 'Play',
    option: 'play',
    description: 'Let the better Milpa win 🏆!',
    href: '/play',
  },
  {
    name: 'Rules',
    option: 'rules',
    description: 'Learn to play the game 👓',
    href: '/play#learn_to_play',
  },
  {
    name: 'About',
    option: 'about',
    description: 'What is a Milpa 🌵?',
    href: '/#what_is_a_milpa',
  },
]
const ButtonStyling = "w-button-square h-button-square focus:outline-none";

function Option(input: OptionType) {
  const {option} = input;
  const { t } = useTranslation();
 return (
   <div className="ml-4">
     <p className="text-sm font-medium text-milpaPink-default">
       {t(`menu.body.${option}.title`)}
     </p>
     <p className="text-sm text-milpaBlue-dark">
       {t(`menu.body.${option}.description`)}
     </p>
   </div>
 )
}

function MenuOptions() {
  return (Options.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out bg-milpaBeige-light hover:bg-milpaBeige-default focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
    >
      <Option option={item.option} />
    </a>
  )))
}

function LanguageOptions() {
  const { i18n } = useTranslation();
  const { changeLanguage } = i18n;
  const change: MouseEventHandler<HTMLButtonElement> = async (e) => {
    const { name: newLanguage } = e.target as EventTargetWithName;
    await changeLanguage(newLanguage);
  };
  return (Object.keys(Languages).map((lng) => (
    <button
      key={Languages[lng].code}
      name={Languages[lng].code}
      onClick={change}
      type='button'
      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-milpaPink-light focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 text-sm text-milpaBeige-light"
    >

      {`${Languages[lng].nativeName}`}
    </button>
  )))
}

function MenuFooter() {
  const { t } = useTranslation();
  return (
    <div className="bg-milpaPink-default p-4">
      <span className="flex items-center p-2">
        <span className="text-sm font-medium text-milpaBlue-dark">
          {t("menu.footer.title")} 🌐
        </span>
      </span>
      <div className="flex justify-around">
        {LanguageOptions()}
      </div>
    </div>
  )
}

function Panel() {

 return (
   <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-milpaBlue-default">
     <div className="relative grid gap-8  p-7 lg:grid-cols-2">
       {MenuOptions()}
     </div>
     <MenuFooter/>
   </div>
 )
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
       <Panel/>
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
           <TransitionAndPanel/>
          </>
        )}
      </Popover>
  );
}

export default MenuPopOver;
