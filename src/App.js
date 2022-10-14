import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Page404 from './Components/404';
import Arizalar from './Components/Arizalar';
import Dashboard from './Components/Dashboard';
import Foydalanuchilar from './Components/Foydalanuvchilar';
import Qoshish from './Components/Qoshish';
import Kategoriya from './Components/Qoshish/Katigoriya';
import Taom from './Components/Qoshish/Taom';
import YitAriza from './Components/YetArizalar';

const LoginContext = createContext({isLogin: false, setLogin: () => {}})

function App() {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);
  return (
    <LoginContext.Provider value={{isLogin, setLogin}}>
      <Router>
        <Routes>
          <Route path='/' element={
            <div className='border d-block p-4 mx-auto mt-5 rounded shadow' style={{width: 400, height: 200}}>
              <h1 className='text-center text-info mb-4'>Express 24</h1>
              <span className='text-center d-block'>
              <Link to={"/dashboard"} onClick={() => setLogin(true)} className="btn btn-success me-2">Kirish</Link>
              <Link className='btn btn-warning'>Ro'yxatdan o'tish</Link>
              </span>
            </div>
          }/>
          {isLogin && (
            <Route path='/dashboard'element={<Dashboard />}>
              <Route path='ariza' element={<Arizalar />} />
              <Route path='yitariza' element={<YitAriza />} />
              <Route path='foydalanuvchilar' element={<Foydalanuchilar />} />
              <Route path='qoshish' element={<Qoshish />}>
                <Route path='kategoriya' element={<Kategoriya />}/>
                <Route path='taom' element={<Taom />}/>
              </Route>
              <Route path='statistika' element={<></>} />
            </Route>
          )}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}
export {LoginContext}
export default App;
