import { NavLink, Route, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { RouteTrigger, pages } from './components/constants';
import Header from './components/Header';
const App = () => {

  return (
    <div className="h-full">

      <div className="flex-1 h-fit pb-40">
        <Header />
        <Routes>
          {
            pages.map(page => <Route key={page.element} path={page.path} element={page.element} />)
          }
          
        </Routes>
      </div>

      <div className='RouteHolders flex w-screen bg-black rounded-t-md justify-around text-slate-400 shadow-lg h-14  items-center absolute bottom-0'>
        {
          RouteTrigger.map((trigger) => {
            return (
              <div className='Navs' key={trigger.name}>

                <NavLink to={trigger.Component}>
                  <div className=' flex flex-col items-center text-2xl'>
                    <div>
                      {trigger.icon}
                    </div>
                    <p className='text-xs'>{trigger.name}</p>
                  </div>
                </NavLink>
              </div>
            )
          })
        }
      </div>


    </div>
  );
};

export default App;
