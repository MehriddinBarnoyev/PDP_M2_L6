import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Arizalar from './Components/Arizalar';
import Dashboard from './Components/Dashboard';
import Foydalanuchilar from './Components/Foydalanuvchilar';
import Qoshish from './Components/Qoshish';
import Kategoriya from './Components/Qoshish/Katigoriya';
import KatRoyxat from './Components/Qoshish/KatRoyxat';
import Taom from './Components/Qoshish/Taom';
import TaomRoyxat from './Components/Qoshish/TaomRoyxat';
import YitAriza from './Components/YetArizalar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className='border d-block p-4 mx-auto mt-5 rounded shadow' style={{width: 400, height: 200}}>
            <h1 className='text-center text-info mb-4'>Express 24</h1>
            <span className='text-center d-block'>
            <Link to={"/dashboard"} className="btn btn-success me-2">Kirish</Link>
            <Link className='btn btn-warning'>Ro'yxatdan o'tish</Link>
            </span>
          </div>
        }/>
        <Route path='/dashboard'element={<Dashboard />}>
          <Route path='ariza' element={<Arizalar />} />
          <Route path='yitariza' element={<YitAriza />} />
          <Route path='foydalanuvchilar' element={<Foydalanuchilar />} />
          <Route path='qoshish' element={<Qoshish />}>
            <Route path='kategoriya' element={<Kategoriya />}/>
            <Route path='taom' element={<Taom />}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
