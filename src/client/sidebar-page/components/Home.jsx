/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleConnectToQuickBooks = () => {
    const authRoute = `http://localhost:3000/auth`;
    window.open(authRoute, '_blank', 'width=500,height=600');
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === 'authSuccess') {
        setIsAuthenticated(true);
        console.log('Authentication successful!');
        alert('Successfully authenticated with QuickBooks!');
      } else if (event.data === 'authFailure') {
        setIsAuthenticated(false);
        console.log('Authentication failed.');
        alert('Authentication failed. Please try again.');
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <h1>User is Authenticated Successfully</h1>
      ) : (
        <div>
          <h1>Connect to QuickBooks</h1>
          <button onClick={handleConnectToQuickBooks}>Connect</button>
        </div>
      )}
    </div>
  );
};

export default Home;
