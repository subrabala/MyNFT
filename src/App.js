import "./App.css";
import FirstPage from "./components/FirstPage";

function App() {
  var marker = document.querySelector('#marker');
                    function indicator(e){
                    marker.style.left = e.offsetLeft+"px";
                    marker.style.width = e.offsetWidth+"px";
                    }

                    items.forEach((item)=>{
                    item.addEventListener('click',(e)=>{
                        indicator(e.target);
                    })
                    })
  return (
    <div className="container p-0 m-0">
      <FirstPage />
    </div>
  );
}

export default App;
