import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tokens, setTokens] = useState([])

  const [token, setToken] = useState()
  const [password, setPassword] = useState()
  const [document, setDocument] = useState()

  const signDocument = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/signDocument', {
      method: 'post',
      body: JSON.stringify({
        tokenSerial: token,
        tokenPin: password, 
        originalDocument: document
      })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json['data'])
      })
  }

  useEffect(() => {
    fetch('http://localhost:3000/getCerts')
      .then((res) => res.json())
      .then((json) => {
        setTokens(json);
      })
  }, [])

  return (
    <div className="container mt-5">
      <form onSubmit={signDocument}>
        <div className='form-group'>
          <label htmlFor='tokens'>Tokens</label>
          <select id="token" onChange={(e) => setToken(e.target.value)} class="form-control">
            {tokens.map(token => {
              return `<option value="${token.SerialNumber}">${token.Label} ${token.SerialNumber}</option>`
            })}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='tokens'>Password</label>
          <input type='password' class="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='tokens'>Document</label>
          <textarea type="text" class="form-control" onChange={(e) => setDocument(e.target.value)}></textarea>
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>Sign</button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
