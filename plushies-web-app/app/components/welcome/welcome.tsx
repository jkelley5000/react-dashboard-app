import WelcomeContent from "./welcome-content";
import { Link } from "react-router";

const { welcomeMessage, cta } = WelcomeContent;

export function Welcome() {
  return (
    <main className="theme-container theme-section flex items-center justify-center">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-center theme-text-primary text-3xl font-semibold tracking-tight">
              {welcomeMessage}
            </h1>
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="theme-card theme-card-padded theme-shadow-md rounded-3xl space-y-4 text-center">
            <Link to="/reports" className="theme-link leading-6 block">
              {cta}
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
