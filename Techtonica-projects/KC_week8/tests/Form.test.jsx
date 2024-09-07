import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../src/components/form'

describe('Form component', () => {
  it('renders the Form component', () => {
    // checking rendering of form
    render(<Form />)

    // prints out the JSX in the Form component onto the command line
    // screen.debug();

    // checks if placeholder text appears in document
    expect(screen.getByPlaceholderText('Enter an item')).toBeInTheDocument();
  })


  // test failed :/
  it('does not call addItem when no text is passed into form', () => {
    // create mock function
    const mockItem = vi.fn();
    // render form with mock function
    render(<Form addItem={mockItem} />)
    // simulates typing whitespace into input box
    fireEvent.change(screen.getByPlaceholderText('Enter an item'), {target: {value: ' '}});
    // simulates submitting the form
    fireEvent.submit(screen.getByRole('form'));
    // checks that addItem() was not called
    expect(mockItem).not.toHaveBeenCalled();
  })
})