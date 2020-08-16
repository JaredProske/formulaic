import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { TitleForm } from '.';
import userEvent from '@testing-library/user-event'
import {TitleProvider} from '../TitleContext';

describe("<TitleForm/>", () => {
  it("renders title input", () => {
    render(<TitleProvider><TitleForm /></TitleProvider>)

    const titleInput = screen.getByPlaceholderText("enter title and press enter");

    expect(titleInput).toBeInTheDocument();
  });

  it("accepts input", async () => {
    render(<TitleProvider><TitleForm /></TitleProvider>)
    const titleInput = screen.getByPlaceholderText("enter title and press enter");
    const inputText = "What's up?";

    await userEvent.type(titleInput, inputText);

    expect(titleInput).toHaveAttribute("value", inputText);
  });

 

  //   render(<TitleForm />);

  //   const titleInput = screen.getByPlaceholderText("enter title and press enter");
  //   const inputText = "What's up?";

  //   await userEvent.type(titleInput, inputText);
  //   fireEvent.submit(titleInput);

  //   expect(location.search).toBe(titleInput);

  // });
});