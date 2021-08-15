import React, { useState }  from 'react';
import { IonContent, IonPage, IonToolbar, IonAvatar, IonInput, IonButton, IonText, IonLoading, IonItem, IonIcon } from '@ionic/react';
import './Register.css';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig'
import { lockClosed, mailOutline } from 'ionicons/icons';

const Register: React.FC = () => {
  const [emailaddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  async function register() {
    //validation
    if(password !== cpassword) {
      return toast('Passwords do not match')
    }
    if(emailaddress.trim() === '' || password.trim() === '' || cpassword.trim() === '') {
      return toast('creditial are missing')
    }
    
    const res = await registerUser(emailaddress, password)
    if(res) {
      toast('You have registered successfully')
    }
  }

  return (
    <IonPage>
    <IonContent>
        <div className="logo">
        <img src="/assets/INDI_transparent V2.png" />  
        </div>
       
    <h3 className="login"> Create  Account</h3>  
    <p className="reset" >Lets get started</p>
      
    
    <IonItem className="padding" >
    <IonIcon className="mailout" icon={mailOutline} slot="start" />
    
      <IonInput className="namea"
      type="email" 
      placeholder="Email Address"
      onIonChange={(e: any) => setEmailAddress(e.target.value)}/>
      </IonItem>

       <IonItem className="padding">
       <IonIcon className="lockclosed" icon={lockClosed} slot="start" />
      <IonInput
      type="password" 
      placeholder="Password" 
      onIonChange={(e: any) => setPassword(e.target.value)}/>
      </IonItem>

      <IonItem className="padding">
      <IonIcon className="lockclosed" icon={lockClosed} slot="start" />
      <IonInput
      type="password" 
      placeholder="Confirm Password" 
      onIonChange={(e: any) => setCPassword(e.target.value)}/>
      </IonItem>

      <div className="block" >
      <IonButton  expand="block" color="warning" onClick={register}> <p className="signbutton"> Get Started </p> </IonButton>
      </div>

      <div className="cancelbutton" >
      <IonButton  href="cover" expand="block"  fill="clear"> <p className="cancel">Cancel</p></IonButton>
      </div>
      

      </IonContent>
    </IonPage>
  );
};


export default Register;