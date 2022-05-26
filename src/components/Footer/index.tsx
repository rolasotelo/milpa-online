import React from "react";
import { PropsWithChildren } from "../../common/interfaces";

function Frame(props: PropsWithChildren) {
  const { children } = props;
  return (
    <footer className="text-center">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">{children}</div>
      </div>
    </footer>
  );
}

function TwitterIcon() {
  return (
    <a
      className="text-blue-500 hover:text-opacity-75"
      href="https://twitter.com/rolasotelo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    </a>
  );
}
function GithubIcon() {
  return (
    <a
      className="text-gray-900 hover:text-opacity-75"
      href="https://github.com/rolasotelo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
function LinkedInIcon() {
  return (
    <a
      className="text-pink-600 hover:text-opacity-75"
      href="https://www.linkedin.com/in/rolasotelo/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path
          fill="#0076b2"
          d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
        />
        <path
          fill="#fff"
          d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
        />
      </svg>
    </a>
  );
}

function Icons() {
  return (
    <div className="flex justify-center space-x-6">
      <TwitterIcon />

      <GithubIcon />
      <LinkedInIcon />
    </div>
  );
}

function NavFooter() {
  return (
    <nav
      className="relative flex flex-wrap justify-center gap-8 p-8 text-sm font-bold border-4 border-milpaBlue-dark rounded-xl text-milpaPink-default"
      style={{
        fontFamily: "goodlife-serif, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "1.5rem",
      }}
    >
      <a
        className="hover:opacity-75"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        This project
      </a>

      <a
        className="hover:opacity-75"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        More about Milpas
      </a>

      <a
        className="hover:opacity-75"
        href="https://rolasotelo.xyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio
      </a>

      <a
        className="hover:opacity-75"
        href="https://rolasotelo.xyz"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </a>
    </nav>
  );
}
function Paragraph() {
  return (
    <p className="max-w-lg mx-auto text-sm text-milpaBlue-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, natus
      tempore illo laborum nam, modi quam sequi amet quo quasi impedit iure eum
      similique pariatur alias exercitationem, porro perspiciatis esse. Corporis
      odit consequatur sint sequi.
      <a
        className="block mt-1 text-milpaPink-default underline decoration-wavy decoration-pink-500 hover:opacity-75"
        href="/thanks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Special thanks
      </a>
    </p>
  );
}

function Footer() {
  return (
    <Frame>
      <Icons />
      <NavFooter />
      <Paragraph />
      <p className="text-xs font-medium">2022 Rolando Sotelo</p>
    </Frame>
  );
}

export default Footer;
