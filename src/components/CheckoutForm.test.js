import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>);
  const header = screen.getByRole('heading');
  expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm/>);

  expect(screen.queryByTestId('successMessage')).not.toBeInTheDocument();

  userEvent.type(screen.getByLabelText(/first name/i), 'Taylor');
  userEvent.type(screen.getByLabelText(/last name/i), 'Friesen');
  userEvent.type(screen.getByLabelText(/address/i), '111 N High St');
  userEvent.type(screen.getByLabelText(/city/i), 'Somewhere');
  userEvent.type(screen.getByLabelText(/state/i), 'Texas');
  userEvent.type(screen.getByLabelText(/zip/i), '00000');

  userEvent.click(screen.getByRole('button'));

  expect(screen.queryByTestId('successMessage')).toBeInTheDocument();
});
