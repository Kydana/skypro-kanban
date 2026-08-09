import './App.css';
import PopBrowse from './components/PopBrowse/PopBrowse';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {

  return (
    <div class="wrapper">

			<PopExit />

			<PopNewCard />

			<PopBrowse />

		  <Header />

		  <Main />

    </div>
  )
};

export default App;
