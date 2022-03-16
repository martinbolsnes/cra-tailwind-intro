import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex flex-col w-1/2 h-fit'>
          <h1 className='font-bold text-xl mb-2'>Yosemite</h1>
          <img
            className='rounded-xl drop-shadow'
            src='https://images.unsplash.com/photo-1647119126202-d13a4263d40c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
            alt='random avatar'
          ></img>
          <button className='bg-zinc-800 text-white font-bold mt-2 rounded-md h-10 hover:bg-white hover:text-zinc-800 hover:border-solid hover:border-2 hover:border-zinc-800'>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
