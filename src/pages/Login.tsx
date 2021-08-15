import React, { useState }  from 'react';
import { Link } from 'react-router-dom'
import { loginUser } from '../firebaseConfig'
import { IonContent, IonPage, IonAvatar, IonInput, IonButton, IonIcon, IonItem } from '@ionic/react';
import './Login.css';
import { toast } from '../toast';
import { lockClosed, mailOutline } from 'ionicons/icons';

const Login: React.FC = () => {

  const [busy, setBus] = useState<boolean>(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

async function login() {
  const res = await loginUser(username, password)
  if(!res) {
    toast('Error logging with you credentials')
  } else{
    toast('You have logged in!')
  }
  }

  return (
    <IonPage>
      <IonContent>
      <div className="logo"  >
        <img   src="/assets/INDI_transparent V2.png" />  
        </div>
    <h3 className="login"> Login into your INDI</h3>
    
  <IonItem className="padding">
  <IonIcon className="mailout" icon={mailOutline} slot="start" />

      <IonInput className="namea"
      placeholder="Username" 
      onIonChange={(e: any) => setUsername(e.target.value)}/>
      </IonItem>


       <IonItem className="padding">
       <IonIcon className="lockclosed" icon={lockClosed} slot="start" />

      <IonInput className="nameb"
      type="password" 
      placeholder="Password"
      onIonChange={(e: any) => setPassword(e.target.value)}/>

      </IonItem>
      <div className="forgotenbutton" >
      <IonButton href="forgotten" expand="block"  fill="clear">Forgotten Password</IonButton>
      </div>

       <div className="block" >
      <IonButton  expand="block" color="warning" onClick={login}> <p className="signbutton"> Sign In </p> </IonButton>
      </div>

      <div className="cancelbutton" >
      <IonButton  href="cover" expand="block"  fill="clear"> <p className="cancel">Cancel</p></IonButton>
      </div>
      <p className="account">Don't have an account? <Link to="/register" className="signup1">Sign Up</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;