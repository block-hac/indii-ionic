import React, { useState }  from 'react';
import { IonContent, IonPage, IonToolbar, IonAvatar, IonInput, IonButton, IonText, IonLoading, IonItem, IonIcon } from '@ionic/react';
import './RegisterDetails.css';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig'
import { calendarOutline, personOutline, callOutline } from 'ionicons/icons';

const RegisterDetails: React.FC = () => {
    const [username, setUsername] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [busy, setBusy] = useState<boolean>(false)

  async function registerdetails() {
    //validation
    setBusy(true)
    if(username.trim() === '' || firstname.trim() === '' || lastname.trim() === '' || phonenumber.trim() === '') {
      return toast('creditial are missing')
    }
}

  return (
    <IonPage>
      <IonLoading message="Please wait..." duration={0} isOpen={busy} />

      <IonContent>
      <div className="logo">
        <img src="/assets/INDI_transparent V2.png" />  
        </div>
       
    <h3 className="login"> Register Details</h3>  
    <p className="reset" >Nearly There...</p>
      


    <IonItem className="padding" >
    <IonIcon className="mailout" icon={personOutline} slot="start" />
    <IonInput className="namea"
      placeholder="Username"
      onIonChange={(e: any) => setUsername(e.target.value)} />
    </IonItem>

    <IonItem className="padding"  >
    <IonIcon className="mailout" icon={personOutline} slot="start" />
    <IonInput className="namea"
      placeholder="First Name"
      onIonChange={(e: any) => setFirstName(e.target.value)} />
       </IonItem>

    <IonItem className="padding" >
    <IonIcon className="mailout" icon={personOutline} slot="start" />
    <IonInput className="namea"
    placeholder="Last Name"
    onIonChange={(e: any) => setLastName(e.target.value)}/>
    </IonItem>

    <IonItem className="padding" >
    <IonIcon className="mailout" icon={callOutline} slot="start" />
    <IonInput className="namea"
    type="number"
    placeholder="Phone Number"
    onIonChange={(e: any) => setPhoneNumber(e.target.value)} />
    </IonItem>

    <div className="block" >
      <IonButton  expand="block" color="warning" > <p className="signbutton"> Get Started </p> </IonButton>
      </div>

      <div className="cancelbutton" >
      <IonButton  href="cover" expand="block"  fill="clear"> <p className="cancel">Cancel</p></IonButton>
      </div>
      

      </IonContent>
    </IonPage>
  );
};

export default RegisterDetails;




