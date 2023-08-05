import {GithubIcon} from "lucide-react";

export const Header = () => {
  return (
    <div className="border-b p-4">
      <header className="mx-auto flex w-full max-w-4xl items-baseline">
        <a href="/">
          <p className="text-3xl font-bold">Foo Bar</p>
        </a>

        <nav className="ml-auto">
          <a
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            href="https://github.com/echo-webkom/echo-webkom-template"
          >
            <GithubIcon className="mr-1 h-4 w-4" />
            GitHub
          </a>
        </nav>
      </header>
    </div>
  );
};
