import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import SetupRouter from './routes';

function App() {
  const auth = false;
  return (
    <BrowserRouter>
      <main className="flex w-full h-screen">
        {auth && <Sidebar />}
        <div className={`${auth ? 'basis-10/12' : 'w-full'}`}>
          {auth && <Header />}
          <div className="p-5 h-[92vh] overflow-auto">
            <SetupRouter />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
