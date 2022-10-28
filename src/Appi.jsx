import React from 'react';

const Appi = () => {
    function App() {
        const [count, setCount] = useState(0)
        const [cielo, setCielo] = useState(false)
      
        
      
        const news = () => {
          setCount(count + 1)
        }
      
        const npm = () => {
          setCount(count - 1)
        }
      
        const day = () => {
          setCielo(true)
        }
      
      
        useEffect(() => {
      
          const colors = [
            "#845EC2",
            "#D65DB1",
            "#FF6F91",
            "#FF9671",
            "#FFC75F",
            "#F9F871"
          ];
          const randomNumber = Math.floor(Math.random() * colors.length); // 2
          document.body.style = `background: ${colors[randomNumber]}`;
          console.log("Me rendericé");
      
      
        }, [cielo])
      
      
        return (
          <div className="App">
      
            <h1>{count}</h1>
            <button onClick={news}>increment</button>
            <button onClick={npm}>decrement</button>
            <hr />
      
            <input type={cielo ? "text" : "password"} />
            <button onClick={() => setCielo(!cielo)}>cambiar</button>
          </div>
        )
      }


      
    return (
        <div>
            
        </div>
    );
};

export default Appi;