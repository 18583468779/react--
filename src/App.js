import "./App.css";
// import { Father } from "./component/Father";
import Programmer from "./component/Extends";

function App() {
  return (
    <>
      {/* <div className="App">react 通信方式</div>
      <Father /> 第一个方法，使用props和callback方式 */}
      <div>
        <h1>继承</h1>
        <Programmer />
      </div>
    </>
  );
}

export default App;
