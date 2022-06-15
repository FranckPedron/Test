import { render } from 'react-dom';
import App from '../src/components/App';
import {BrowserRouter} from "react-router-dom";

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const target = document.getElementById('root');

render(rootReactElement, target);
