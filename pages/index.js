import React, { useEffect, useState, useCallback } from 'react';
import matter from 'gray-matter'
import Router from 'next/router';
import { magic } from '../magic';
import { Magic, RPCError, RPCErrorCode } from "magic-sdk"
import Loading from '../components/loading';


export default function Index() {
  const [userMetadata, setUserMetadata] = useState();
  const [newEmail, setNewEmail] = useState('')

  const str = '---\ntitle: Content 1\n---\nThis is an excerpt.\n---\nThis is content';
  const file = matter(str, { excerpt: true })

  useEffect(() => {
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata);
      } else {
        // If no user is logged in, redirect to `/login`
        Router.push('/login');
      }
    });
  }, []);

const handleChangeEmail = async () => {
  const m = new Magic('pk_live_BA27AD13D51DA6FB');
  try {
    await m.user.updateEmail({ email: newEmail, showUI: false });
  } catch (err) {
    if (err instanceof RPCError) {
      switch (err.code) {
        case RPCErrorCode.UpdateEmailFailed:
          break;
      }
    }
  }
}

  const logout = useCallback(() => {
    magic.user.logout().then(() => {
      Router.push('/login');
    });
  }, [Router]);

  
  // console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'));

  return userMetadata ? (
    <div>
      <div className='container'>
        <h1>Current user: {userMetadata.email}</h1>
        <button onClick={logout}>Logout</button>
        
      </div>
      <div>
        <text>Issuer:{userMetadata.issuer}</text><br/>
        <text>Public Address:{userMetadata.publicAddress}</text><br/>
        <text>email:{userMetadata.email}</text>
      </div>
      <input onChange={val => setNewEmail(val.target.value)} name="phone" type="email" name="phone" required="required" placeholder="Change Email" />
      <button onClick={handleChangeEmail} type="submit">Send</button>
      <h4 size="xl" mb={4}>Gray Matter</h4>
        <text>Data: {file.data.title}</text>  
        <text>Content: {file.content}</text>
    </div>
  ) : (
    <Loading />
  );
}


// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }