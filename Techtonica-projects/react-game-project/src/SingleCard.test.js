import {render, screen} from 'testing-library/react';
import SingleCard from './SingleCard';

it('uses card.src for front of card', () => {
  const props = {
    card: {src: 'example.jpg'},
    handleChoice: jest.fn(),
  }
  render(<SingleCard card={props.card} handleChoice={props.handleChoice} />);
  const image = screen.getByAltText('front of card');
  expect(image.src).toBe(props.card.src);
});