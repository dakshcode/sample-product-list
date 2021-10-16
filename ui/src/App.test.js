import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

test('App render check', () => {
  const div = document.createElement("div");
  render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
