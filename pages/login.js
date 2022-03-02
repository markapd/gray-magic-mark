import { useCallback, useState } from 'react';
import Router from 'next/router';
import { Magic, RPCError, RPCErrorCode } from "magic-sdk"
import { OAuthExtension } from '@magic-ext/oauth';
import { ethers } from 'ethers';
import { magic } from '../magic';

export default function Login() {
  const [email, setEmail] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [sms, setSms] = useState('')

 
  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   * 
   
   */


  const loginBinance = async () => {
    const magic = new Magic('pk_live_BA27AD13D51DA6FB');
    const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
    console.log(provider)    
  }

   const loginGoogle = async () => {
    const magic = new Magic('pk_live_BA27AD13D51DA6FB', {
      extensions: [new OAuthExtension()],
    });
    await magic.oauth.loginWithRedirect({
      provider: 'google',
      redirectURI: 'http://localhost:3000',
    });
   }

  const loginFacebook = async () => {
    const magic = new Magic('pk_live_BA27AD13D51DA6FB', {
      extensions: [new OAuthExtension()],
    });
    
     const mak = await magic.oauth.loginWithRedirect({
      provider: 'facebook',
      redirectURI: 'http://localhost:3000',
    });
    
    console.log(mak)
  }

   const loginSms = useCallback(async () => {
    const m = new Magic('pk_live_BA27AD13D51DA6FB')
    try {
      await m.auth.loginWithSMS({ phoneNumber: sms})
    } catch (err) {
      console.log(err)
     
    }
  },[sms])

  const login = useCallback(async () => {
    setIsLoggingIn(true);
    const m = new Magic('pk_live_BA27AD13D51DA6FB')

    try {
      const didToken = await m.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href,
      });

      const res = await fetch('/api/login', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });
      res.status === 200 && Router.push('/');
    } catch {
      setIsLoggingIn(false);
    }
  }, [email]);

  /**
   * Saves the value of our email input into component state.
   */
  const handleInputOnChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);
  const handleInputOnChangeSms = useCallback((event) => {
    setSms(event.target.value);
  }, []);
  
  return (
    <div className='container'>
      <h1>Please sign up or login</h1>
      <input type='email' name='email' required='required' placeholder='Enter your email' onChange={handleInputOnChange} disabled={isLoggingIn}/>
      <button onClick={login} disabled={isLoggingIn}>
        Send
      </button>
      
      <input onChange={handleInputOnChangeSms} name="phone" type="tel" name="phone" required="required" placeholder="Enter your phone #" />
      <button onClick={loginSms} type="submit">Send</button>

      {/* <input onChange={handleInputOnChangeSms} name="phone" type="tel" name="phone" required="required" placeholder="Enter your phone #" /> */}
      <button onClick={loginFacebook} type="submit">login facebook</button>
      <br/>
      <button onClick={loginGoogle} type="submit">login Google</button>
      <br/>
      <button onClick={loginBinance} type="submit">login binance</button>


    </div>
  );
}
