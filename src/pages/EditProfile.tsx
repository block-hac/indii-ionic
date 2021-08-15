import React from 'react';
import { IonContent, IonPage, IonToolbar, IonButton, IonIcon, IonAvatar, IonCard, IonHeader, IonTitle, IonTextarea, IonNote, IonSelectOption, IonSelect, IonLabel, IonItem } from '@ionic/react';
import { checkmarkCircle, menuOutline, notifications, star, gridOutline, logoInstagram, checkmarkDoneCircleOutline, checkmarkCircleOutline, albumsOutline } from 'ionicons/icons';
import './EditProfile.css';



const Profile: React.FC = () => {
  return (

    <IonPage>
    <IonContent>
            
        <IonAvatar className="profilepngone" >
          <div>
            <img src="/assets/editprofile.png" />
            </div>  
        </IonAvatar>

        <div  className="profiletitle">
        <h5>Change profile photo </h5>
        </div>

        <div className="editprofilebutton">
      <IonButton href="/profile" expand="block" color="warning" > <p className="signbutton"> Complete </p> </IonButton>
      </div>

            

          <IonCard className="firstcard">
              <IonTextarea className="bio"  placeholder="Bio">
              </IonTextarea>
              <IonNote className="wordcount" >
                0/500
            </IonNote>
          </IonCard>

          <IonCard className="secondcard" >
          <IonItem lines="none" >
          <IonLabel>Catergory</IonLabel>
          <IonIcon slot="start" icon={gridOutline} />
          <IonSelect className="popover" value="" interface="popover">
            <IonSelectOption className="dropdown" value="music">Music</IonSelectOption>
            <IonSelectOption className="dropdown" value="video">Video</IonSelectOption>
            <IonSelectOption  className="dropdown" value="model">Model</IonSelectOption>
          </IonSelect>
        </IonItem>
        </IonCard>

      <IonCard className="secondcard" >
        <IonItem lines="none" href="services">
          <IonLabel>Featured Services</IonLabel>
          <IonIcon slot="start" icon={albumsOutline} />
        </IonItem>
        </IonCard>

        <IonCard className="secondcard"  >
        <IonItem lines="none" >
          <IonLabel>Connect Instagram</IonLabel>
          <IonIcon slot="start" icon={logoInstagram} />
        </IonItem>
        </IonCard>

    
      </IonContent>  
    </IonPage>
  );
};

export default Profile;