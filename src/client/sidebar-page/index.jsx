/* eslint-disable prettier/prettier */
import { createRoot } from 'react-dom/client';
import Home from './components/Home';

const container = document.getElementById('index');
const root = createRoot(container);
root.render(<Home />);
