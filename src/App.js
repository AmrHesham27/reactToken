import './App.css';
import { useEffect, useState } from 'react';
import { sign, getCerts } from './server';

function App() {

  const [tokens, setTokens] = useState([])

  const [token, setToken] = useState()
  const [password, setPassword] = useState()
  const [document, setDocument] = useState()

  const signDocument = (e) => {
    return sign(token, password, document)
  }

  useEffect(() => {
    setTokens(getCerts())
  }, [setTokens])

  return (
    <div className="container mt-5">
      <form onSubmit={signDocument}>
        <div className='form-group'>
          <label htmlFor='tokens'>Tokens</label>
          <select id="token" onChange={(e) => setToken(e.target.value)} className="form-control">
            {tokens.map(token => {
              return `<option value="${token.SerialNumber}">${token.Label} ${token.SerialNumber}</option>`
            })}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='tokens'>Password</label>
          <input type='password' className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='tokens'>Document</label>
          <textarea type="text" className="form-control" onChange={(e) => setDocument(e.target.value)}></textarea>
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>Sign</button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
