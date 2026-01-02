import teddyBear from "../../assets/images/page-images/teddy bear.jpg";
import fluffyBunny from "../../assets/images/page-images/fluffy bunny.jpg";
import snugglyPuppy from "../../assets/images/page-images/puppy.jpg";
import softKitten from "../../assets/images/page-images/kitten.jpg";
import horse from "../../assets/images/page-images/horse.jpg";
import dragon from "../../assets/images/page-images/dragon.jpg";

import "./showcase-slider.scss";
import ShowcaseSliderContent from "./showcase-slider-content";

const { title } = ShowcaseSliderContent;

export default function ShowcaseSlider() {
  let Plushies = [
    { name: "Cuddly Bear", imageUrl: teddyBear },
    { name: "Fluffy Bunny", imageUrl: fluffyBunny },
    { name: "Snuggly Puppy", imageUrl: snugglyPuppy },
    { name: "Soft Kitten", imageUrl: softKitten },
    { name: "Gentle Horse", imageUrl: horse },
    { name: "Friendly Dragon", imageUrl: dragon },
  ];

  const sliderItems = [...Plushies, ...Plushies, ...Plushies];

  return (
    <main className="showcase-slider flex flex-col items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h3 className="text-center">{title}</h3>
          </div>
        </header>
      </div>
      <div className="showcase-slider-track flex flex-row overflow-x-auto px-4 py-8">
        {/* First set of items */}
        {sliderItems.map((plushie, index) => (
          <div key={`set1-${index}`} className="showcase-slider-track-slide">
            <img src={plushie.imageUrl} alt={plushie.name} className="plushie-image" />
          </div>
        ))}
      </div>
    </main>
  );
};