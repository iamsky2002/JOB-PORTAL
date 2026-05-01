import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
