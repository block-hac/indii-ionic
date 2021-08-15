import React, { useState, useEffect }  from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonThumbnail, IonImg, IonLabel, IonItem, IonFab, IonFabButton, IonIcon, IonFabList, IonAvatar, IonInput, IonButton } from '@ionic/react';
import { add, settings, mail, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Forgotten.css';
import { lockClosed, mailOutline } from 'ionicons/icons';


const Forgotten: React.FC = () => {
  const [username, setEmailAddress] = useState('')

  return (
    <IonPage>
            <IonToolbar>
              <IonTitle className="forgotten">Forgotten Password</IonTitle>
            </IonToolbar>

      <IonContent>
      <IonItem className="group2285">
      <img src= "/assets/Group 2285.png" />
      </IonItem>

    <p className="email">Enter your email address and we will send you instructions to reset your password.</p>

      <IonItem className="padding">
      <IonIcon className="mailout2" icon={mailOutline} slot="start"/>

      <IonInput className="emailad"
      placeholder="Email Address"
      onIonChange={(e: any) => setEmailAddress(e.target.value)} />
       </IonItem>

       <div className="blocktwo">
      <IonButton  expand="block" color="warning" > <p className="signbutton"> Send </p> </IonButton>
      </div>

      <div className="cancelbuttontwo" >
      <IonButton  expand="block"  fill="clear"> <p className="cancel">Cancel</p></IonButton>
      </div>

      </IonContent>
    </IonPage>
  );
};

export default Forgotten;