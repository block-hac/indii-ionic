import React from 'react';
import { IonContent, IonPage, IonToolbar, IonButton, IonIcon, IonAvatar, IonCard, IonSlide, IonItem, IonThumbnail, IonHeader, IonTitle } from '@ionic/react';
import { checkmarkCircle, menuOutline, notifications, notificationsOutline, star } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
    <IonContent>

    <div className="profilenotification">
 <IonButton className="notificationicon3"
    href="/notifications" color="primary"  fill="clear"><IonIcon icon={notifications} /> </IonButton>
 
    <IonButton className="notificationicon3"
     href="/settings" color="primary"  fill="clear"> <IonIcon icon={menuOutline} /> </IonButton>
   </div>  

  
        <IonAvatar className="profilepng" >
          <div>
            <img src="/assets/editprofile.png" />
            </div>  
        </IonAvatar>

        <div  className="profiletitle">
        <h5>Mike Rock </h5>
        </div>


        <div className="editprofilebutton" >
        <IonButton href="/Editprofile" expand="block" color="warning" > <p className="signbutton"> Edit Profile </p> </IonButton>
        </div>


          <IonCard className="profilebio" >
            <h5 className="artisttitle" >Artist</h5>
            <p className="bio" >Mike Rock is a British singer and songwriter. 
              In 2020 mike  achieved over 90millio streams on Spotify, securing his debut album the 20th 
              spot on the UK Top forty. </p>
              <p className="bio" >He performed a freestyle at the 2016 HBAA wards, calling out the government  for their  perceived in  action in the aftermath of shutting down 500 youth centres across the country the previous year.</p>
          </IonCard>

            <div className="profilefeature" >
            <h5 >Featured Services</h5>
            <IonButton className="showallbuttonthree" color="warning" fill="clear" >Show All</IonButton>
            </div>

            <img className="appearancepng" src="/assets/appearance.png" />
          
            <div className="profilefeature" >
            <h5  >Instagram Photos</h5>
            <IonButton className="showallbuttonthree" color="warning"  fill="clear">Show All</IonButton>
            </div>

              <div className="instafeed" >
              <img  className="insta01" src="/assets/instagram1.png" />
              <img  className="insta01" src="/assets/instagram2.png" />
              <img  className="insta01" src="/assets/instagram3.png" />
              <img  className="insta01" src="/assets/instagram4.png" />
              <img  className="insta01" src="/assets/instagram5.png" />
              <img  className="insta01" src="/assets/instagram6.png" />
              </div>
           
              <div className="aptitle" >
              <p>Appearance</p>
              </div>
  
      </IonContent>
    </IonPage>
  );
};

export default Profile;