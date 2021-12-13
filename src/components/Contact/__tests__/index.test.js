import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe('Contact is rendering', () => {

  it('renders', () => {
    render(<ContactForm />)
  });

  it('renders testid', () => {
    const { getByTestId } = render (<ContactForm />)
    expect(getByTestId('Contact me')).toHaveTextContent('Contact me')
  });

  it('renders button', () => {
    const { getByTestId } = render (<ContactForm />)
    expect(getByTestId('Submit')).toHaveTextContent('Submit')
  });

})