import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lod, setLod] = useState();
  const save = () =>{
    //http://localhost:3000
    fetch("http://localhost:3000/list", {
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
    fetch("http://localhost:3000/list", {
      method: "GET",
      headers: {"content-type" : "application/json"}
    })
    .then((response) => {
      return response.json();
    })
    .then((result)=>{
      setLod(result);
    })
  }
  const load1 = () => {
    fetch("http://localhost:3000/list/1", {
      method: "GET",
      headers: {"content-type" : "application/json"}
    })
    .then((response) => {
      return response.json();
    })
    .then((result)=>{
      setLod([result]);
    })
  }

  const change_patch = () => {
    fetch("http://localhost:3000/list/1", {
      method: "PATCH",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify({
        text: text
      })
    })
    .then((response) => {
      console.log("status", response.status);
      return response.json();
    })
    .then((result)=> console.log(result));
    setText("");
  }

  const change_put = () => {
    fetch("http://localhost:3000/list/1", {
      method: "PUT",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify({
        title: title
      })
    })
    .then((response) => {
      console.log("status", response.status);
      return response.json();
    })
    .then((result)=> console.log(result));
    setTitle("");
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
      <button onClick={load1}>
        로드 1
      </button>
      <button onClick={change_patch}>
        1 변경(PATCH)
      </button>
      <button onClick={change_put}>
        1 변경(put)
      </button>
      <div>
        {
          lod?.map((e)=>{
            return(
              <div key={e.id}>
                {e.id} : {e.title} | {e.text}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
