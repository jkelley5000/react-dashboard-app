import type { Route } from "./+types/landing-page";
import { Welcome } from "../components/welcome/welcome";
import ShowcaseSlider from "~/components/showcase-slider/showcase-slider";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Plushies R Us" },
    { name: "description", content: "Reporting for Plushies R Us" },
  ];
}

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <Welcome />
      <ShowcaseSlider />
    </main>
  );
}
