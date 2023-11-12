import './Slide.css';

export interface SlideProps {
  id: number;
  text: string;
  imageURL: string;
  audioURL?: string;
}

export default function Slide({
  id,
  text,
  imageURL,
  slideClassName,
}: SlideProps & { slideClassName: string }) {
  return (
    <div className={slideClassName}>
      <img
        src={imageURL}
        key={id}
        className="slide-img"
        width={390}
        height={630}
      ></img>
      <p data-testid="slide-text" className="slide-text">
        {text}
      </p>
    </div>
  );
}
