import Header from "./components/Header/Header";
import Main from "./pages/Main";


function App() {

  return (
    <>
      <Header />
      <main className="main"> 
        <div className="wrapper">
          <Main />
        </div>
      </main>
    </>
  );
}

export default App;
