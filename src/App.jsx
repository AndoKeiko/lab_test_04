import { useState } from 'react'
import './App.css'
import Test from './Test';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  const [test, setTest] = useState(100);
  const [flag, setFlag] = useState(true);
  const [num, setNum] = useState();

  //更新の処理の練習です
  const handleClick = () => {
    setTest("更新されました");
  };
  const handleFlagClick = () => {
    setFlag(!flag);
  };
  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3);
    setNum(random);
  };

  return (
    <>
      {num === 0 && <h1>大吉</h1>}
      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}
      <button onClick={handleNumClick}>ボタンを推しましょう</button>
      {flag && <h1>今はtrueです</h1>}
      {!flag && <h1>今はfalseです</h1>}
      <div>{test}</div>
      <button onClick={handleFlagClick}>ボタンを押してみましょう</button>
      
      <Test gs="07月30日react2回目" lab={17} react="目じるしの練習をしています" />
      <Button text="送信" color="red" />
      <br/>
      <Button text="登録" />
      <Form />
    </>
  );
}

export default App;
