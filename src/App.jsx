import Header from "./components/Header/Header";
import Main from "./pages/Main";

export const iosDevices = [
  "iPad Simulator",
  "iPhone Simulator",
  "iPod Simulator",
  "iPad",
  "iPhone",
  "iPod",
];

export const deviceDetectionHook = () => {
  // @ts-ignore
  const { platform } = navigator.userAgentData || navigator;

  return {
    devicePlatform: platform,
    isIos: iosDevices.includes(platform),
  };
};
const { devicePlatform, isIos } = deviceDetectionHook();

function App() {

   const containerStyle = {
     height: isIos ? "90vh" : "100vh",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     flexDirection: "column",
     textAlign: "center",
     backgroundColor: isIos ? "yellow" : "green",
   };

  return (
    <>
      <div style={containerStyle}>
        <p>Платформа устройства: {devicePlatform}</p>
        {isIos ? <p>Это устройство iOS.</p> : <p>Это не устройство iOS.</p>}
      </div>
      {/* <Header />
      <main className="main"> 
        <div className="wrapper">
          <Main />
        </div>
      </main> */}
    </>
  );
}

export default App;
