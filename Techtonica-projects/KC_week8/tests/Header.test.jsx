// test test lol
//import { describe, it, expect } from 'vitest'

// describe('A truthy statement', () => {
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// })

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../src/components/Header'

describe('Header', () => {
  it('renders the Header component', () => {
    // checks that the Header component renders
    render(<Header />)
    // prints out the JSX in the Header component onto the command line
    screen.debug();
    // checks if "hello techtonica!" is in the header component
    expect(screen.getByText('Hello Techtonica!')).toBeInTheDocument();
  })
})