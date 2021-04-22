import './App.css'
import Header from './Header.js'
import StyleChange from './StyleChange.js'
import Images from './Images.js'
import Footer from './Footer.js'

function App() {
  document.body.style.backgroundColor = "#FCEFF9"
  return (
    <div className="app">
      <Header />
      <StyleChange />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
