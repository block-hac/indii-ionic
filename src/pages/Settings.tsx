import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonList, IonItem, IonLabel, IonFooter, IonAlert } from '@ionic/react';
import { chevronBack, personAddOutline, ribbonOutline, cardOutline, notificationsOutline, calendarOutline, gridOutline, peopleOutline, shieldOutline, lockClosedOutline, helpOutline, personOutline, gitNetworkOutline, starOutline, shareSocialOutline } from 'ionicons/icons';
import './Settings.css';


const Settings: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="title" >Settings</IonTitle>
        <IonButton href="/profile" fill="clear" slot="start">
          <IonIcon icon={chevronBack} />
        </IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonList>
            <IonItem href="payment">
                <IonLabel>Payment</IonLabel>
                <IonIcon slot="start" icon={cardOutline} />
            </IonItem>
            <IonItem href="notificationssettings">
                <IonLabel>Notifications</IonLabel>
                <IonIcon slot="start" icon={notificationsOutline} />
            </IonItem>
            <IonItem href="Availabilty">
                <IonLabel>Availabilty</IonLabel>
                <IonIcon slot="start" icon={calendarOutline} />
            </IonItem>
            <IonItem href="security">
                <IonLabel>Security</IonLabel>
                <IonIcon slot="start" icon={shieldOutline} />
            </IonItem>
            <IonItem href="tutorial">
                <IonLabel>Help</IonLabel>
                <IonIcon slot="start" icon={helpOutline} />
            </IonItem>
            <IonItem href="policies">
                <IonLabel>Policies</IonLabel>
                <IonIcon slot="start" icon={lockClosedOutline} />
            </IonItem>
        </IonList>


        
      </IonContent>
      <IonFooter  >
            <IonToolbar>
                <IonButton className="logout" onClick={() => setShowAlert1(true)} slot="start" fill="clear">Log Out</IonButton>
                <IonAlert
      isOpen={showAlert1}
      onDidDismiss={() => setShowAlert1(false)}
      cssClass='my-custom-class'
      header={'Log Out'}
      message={'Are you sure you want to log out.'}
      buttons={['Cancel', 'Log Out']}
    />

        </IonToolbar>
        </IonFooter> 
    </IonPage>
  );
};

export default Settings;