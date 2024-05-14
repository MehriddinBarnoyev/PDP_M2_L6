import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Page404 from './Components/404';
import Arizalar from './Components/Arizalar';
import Dashboard from './Components/Dashboard';
import Foydalanuchilar from './Components/Foydalanuvchilar';
import Qoshish from './Components/Qoshish';
import Kategoriya from './Components/Qoshish/Katigoriya';
import Taom from './Components/Qoshish/Taom';
import YitAriza from './Components/YetArizalar';
import store from './Redux/store';
import Welcome from './Components/Welcome';
import Login from './Components/Loginpage';

const LoginContext = createContext({isLogin: false, setLogin: () => {}});

function App() {  
  
  const [isLogin, setLogin] = useState(false);
  
  return (
    <Provider store={store}>
        <Router>
      <LoginContext.Provider value={{isLogin, setLogin}}>  
          <Routes>
           <Route path='/' element={<Welcome/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
            { isLogin && (
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
      </LoginContext.Provider>
        </Router>
    </Provider>
  );
}

export {LoginContext}

export default App;
