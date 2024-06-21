import ReactDOM from 'react-dom/client'
import './main.css'
import Home from '@/pages/Home/Home'
import NotWorking from '@/pages/NotWorking/NotWorking';

chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, function (tabs) {
  if (tabs[0].url?.includes('http://localhost:3000')) {
    ReactDOM.createRoot(document.getElementById('root')!).render(<Home />)
  } else {
    ReactDOM.createRoot(document.getElementById('root')!).render(<NotWorking />)
  }
});
