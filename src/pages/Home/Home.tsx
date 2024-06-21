import { checkAuthContent } from '@/app/content';
import logo from '@/assets/logo.png'
import { useState } from 'react';

const Home = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);


  const handleMoveToChats = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id;
      if (tabId) {
        chrome.tabs.update(tabId, { url: 'http://localhost:3000/chats' }, function (tab) {
          console.log('Tab updated successfully:', tab);
        });
      } else {
        console.error('Tab ID is undefined');
      }
    });
  };

  return (
    <div className='min-w-80 py-6 flex items-center justify-center flex-col'>
      <div className='mb-4'>
        <a href="http://localhost:3000" target="_blank">
          <img src={logo} className="logo" alt="My skills logo" />
        </a>
      </div>
      <h1 className='font-bold text-2xl mb-4'>My skills</h1>
      {isAuthorized ? (
        <button onClick={handleMoveToChats} className='flex items-center justify-center font-bold mb-6 text-md'>
          Повідомлень <span className='flex items-center justify-center text-white font-bold bg-orange-500 rounded-full w-6 h-6 ml-10'>1</span>
        </button>
      ) :
        null}
      <button onClick={checkAuthContent}>Check auth</button>
    </div>
  );
};

export default Home;
