import './App.css';
import Accordion from './components/Accordion';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      question: "What's your name ?",
      answer: "My name is Lun Dev",
      active: 1
    },
    {
      question: "What do you do ?",
      answer: "I'm FullStack Deveoper",
    }
  ]);
  return (
   <div className='bg-[#f2f2f2] h-screen flex justify-center items-center'>
    <div className='list'>
    {
        list.map((item, key) => (
          <Accordion key={key} datas={item} />
        ))
      }
    </div>
      
   </div>
  );
}

export default App;
