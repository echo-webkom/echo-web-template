import { GithubIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="border-b p-4">
      <header className="flex items-baseline w-full max-w-4xl mx-auto">
        <a href="/">
          <p className="text-3xl font-bold">Foo Bar</p>
        </a>

        <nav className="ml-auto">
          <a
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            href="https://github.com/echo-webkom/echo-webkom-template"
          >
            <GithubIcon className="w-4 h-4 mr-1" />
            GitHub
          </a>
        </nav>
      </header>
    </div>
  );
};
