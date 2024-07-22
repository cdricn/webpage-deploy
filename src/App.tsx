import './App.css'
import './fonts.css'
import icon from './assets/githubicon.png'
import Items from './assets/components/Items.tsx'

function App() {

  return (
    <>
      <div className='main-container'>
        <div className='page-header'>
          CDRICN
          <a
            //href="https://github.com/cdricn"
            target="_blank">
            <img 
              src={icon}
              className="gh-icon"
              alt="GitHub account link icon"
              >
            </img>
          </a>
        </div>
        <div className='itemview'>
          <div className='arrow-left'></div>
          <ul id='scroll-container' className='content'>
            <Items />
          </ul>
          <div className='arrow-right'></div>
        </div>
      </div>
    </>
  );
}

export default App
