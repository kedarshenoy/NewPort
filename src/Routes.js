import{Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './components/About';
import About from './components/About';
import CV from './components/Certificate';
import Project from './components/Work';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import DraggableNavMenu from './components/Nav';

const Router =()=>{
    return(
        <BrowserRouter>
        <DraggableNavMenu />

            <Routes>
                {/* <Route path='*' element={<DraggableNavMenu/>}></Route> */}
            <Route  path ='/' Component={Home}></Route>
                <Route path='/home' Component={Home}></Route>
                <Route path='/about' Component={About}></Route>
                <Route path='/cv' Component={CV}></Route>
                <Route path='/projects' Component={Project}></Route>
                <Route path='/certificates' Component={Certificate}></Route>
                <Route path='/contact' Component={Contact}></Route>

            </Routes>
        
        
        </BrowserRouter>
    )
}

export default Router;