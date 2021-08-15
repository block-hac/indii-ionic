import React from 'react';
import { IonPage, IonButton, IonFab } from '@ionic/react';
import './Cover.css';


const Cover: React.FC = () => {
  return (
    <IonPage>
      <div>
      <img src="assets/covervideo.mp4" alt="cover" />
      </div>
      <IonFab vertical="top" horizontal="start" slot="fixed"><h1>INDI</h1></IonFab>
      <IonFab vertical="bottom" horizontal="center" slot="fixed"><IonButton href="login" color="light" expand="block" fill="clear"><h2>ENTER</h2></IonButton></IonFab>
    </IonPage>
  );
};

export default Cover;