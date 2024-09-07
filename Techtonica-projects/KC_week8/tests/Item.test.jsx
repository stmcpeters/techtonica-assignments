import { getByText, render, screen } from '@testing-library/react'
import Item from '../src/components/item'

describe('Item', () => {
  it('renders the Item component with testing string', () => {
    // prints out the JSX in the Item component onto the command line
    //screen.debug();

    // creates mock item for testing
    const mockItem = { text: 'testing' };
    // checks item renders with mock item
    render(<Item item={mockItem} />)
    // checks to see if class singleitem exists
    expect(screen.getByText('testing')).toHaveClass('singleitem');
  })
})