import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react"



function SignUp() {
  
  const { loginWithRedirect } = useAuth0();
//   const { logout } = useAuth0();

//     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button>
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
   
  
}

export default SignUp