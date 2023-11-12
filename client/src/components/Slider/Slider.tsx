import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import './Slider.css';
import Slide from '../Slide/Slide';
import Player from '../Player/Player';
import { SlideProps } from '../Slide/Slide';

interface SliderProps {
  slidesData: SlideProps[];
}

export default function Slider({ slidesData }: SliderProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const [playing, setPlaying] = useState<boolean>(false);

  function nextSlide() {
    setSlideIndex(slideIndex === slidesData.length - 1 ? 0 : slideIndex + 1);
  }

  function previousSlide() {
    setSlideIndex(slideIndex === 0 ? slidesData.length - 1 : slideIndex - 1);
  }

  return (
    <div className="slider">
      {slidesData[slideIndex] && (
        <Player
          url={slidesData[slideIndex].audioURL || ''}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
      <BsArrowLeft className="arrow arrow-left" onClick={previousSlide} />

      {slidesData.map((slide, index) => {
        return (
          <Slide
            key={slide.id}
            id={slide.id}
            text={slide.text}
            imageURL={slide.imageURL}
            slideClassName={
              index === slideIndex
                ? 'slide'
                : 'slide slide-hidden slide-text-hidden'
            }
          />
        );
      })}

      <BsArrowRight className="arrow arrow-right" onClick={nextSlide} />

      <div className="all-slides-indicators">
        {slidesData.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={
                index === slideIndex
                  ? 'single-slide-indicator'
                  : 'single-slide-indicator slide-indicator-inactive'
              }
            ></button>
          );
        })}
      </div>
    </div>
  );
}
