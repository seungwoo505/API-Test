import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(2);
  const [lod, setLod] = useState();
  const save = () =>{
    fetch("/list", {
      method: "POST",
      headers: {'content-type' : "application/json"},
      body: JSON.stringify({
        title:title, text:text
      })
    })
    .then((response)=>{
      console.log("status", response.status);
      return response.json();
    })
    .then((result) => console.log(result));
    setTitle("")
    setText("");
  }

  const load = () => {
    fetch("/list", {
      method: "GET",
      headers: {"content-type" : "application/json"}
    })
    .then((response) => {
      return response.json()
    })
    .then((result)=>{
      setLod(result);
    })
  }
  return (
    <div className="App">
      <input placeholder='제목' onChange={(e)=>setTitle(e.target.value)} value={title} style={{backgroundColor:"black", color:"white"}}/>
      <input placeholder='글' onChange={(e)=>setText(e.target.value)} value={text} style={{backgroundColor:"black", color:"white"}}/>
      <button onClick={save}>
        저장
      </button>
      <button onClick={load}>
        로드
      </button>
      <div>
        {
          lod?.map((e)=>{
            return(
              <>
                <div>
                  {e.id} : {e.title} | {e.text}
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
