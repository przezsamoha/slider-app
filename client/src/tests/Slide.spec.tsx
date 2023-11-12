import { render, screen } from '@testing-library/react';
import Slide from '../components/Slide/Slide';
import '@testing-library/jest-dom';

describe('Slide', () => {
  it('should render correctly', () => {
    const id = 2;
    const text = 'Mocked slide description';
    const imageURL = 'url';
    const slideClassName = 'slide';

    render(
      <Slide
        id={id}
        text={text}
        imageURL={imageURL}
        slideClassName={slideClassName}
      />
    );

    expect(screen.getByTestId('slide-text')).toHaveTextContent(text);
  });
});
