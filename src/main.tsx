import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { applyTheme } from './config/theme';
import './styles.css';
import { clearOfflineCatalog } from './data/storage';

// Older installs kept private rows in the offline cache (C116). Drop that cache once.
void clearOfflineCatalog(true);

applyTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
