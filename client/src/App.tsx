import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { FooterComponent } from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-full m-0 p-0">
      <nav className=" z-50  mx-0 w-screen sticky top-0 bg-white">
        <Navbar />
      </nav>
      <main className=" mx-10 flex-grow flex-shrink-0 basis-auto">
        <AppRoutes />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
