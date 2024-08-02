import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [data, setData] = useState([]);

 const handleNameChange = (event) => {
  setName(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

  return (
    <div>
      {data && data.map((item, index) => (
        <div key={item.id}>
          <p>{index}番目</p>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}

      <div>
        <p>名前入力欄</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <p>メールアドレス入力欄</p>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>

      <hr />
      <p>名前入力： {name}</p>
      <p>email入力： {email}</p>
    </div>
  );
};

export default Form;