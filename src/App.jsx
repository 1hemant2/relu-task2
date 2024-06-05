import './App.css'
import LeftBar from './pages/LeftBar';
import MainBar from './pages/MainBar';
import RightBar from './pages/RightBar';

function App() {

  return (
    <>
      <div className="flex bg-[#F5F5F5]">
        <div className=" ml-[10%] w-1/5 mr-[35px] h-screen">
          <LeftBar></LeftBar>
        </div>
        <div className=" col-60 w-3/5 "><MainBar></MainBar></div>
        <div className=" mr-[10%] col-20 w-1/5 ml-[35px]"><RightBar></RightBar></div>
      </div>
    </>
  )
}

export default App;
