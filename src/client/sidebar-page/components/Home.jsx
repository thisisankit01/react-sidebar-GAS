/* eslint-disable prettier/prettier */

const Home = () => {
  const handleConnectToQuickBooks = () => {
    const authRoute = `http://localhost:3000/auth`;
    window.open(authRoute, '_blank', 'width=500,height=600');
  };

  return (
    <div>
      <h1>Connect to QuickBooks</h1>
      <button onClick={handleConnectToQuickBooks}>Connect</button>
    </div>
  );
};

export default Home;
