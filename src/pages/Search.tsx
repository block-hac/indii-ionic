import React, {useState} from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonList, IonItem, IonLabel, IonImg, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonCard, IonAvatar, IonNote, IonButtons, IonButton, IonIcon, IonThumbnail } from '@ionic/react';
import { chevronBack, closeOutline, pencil, star, starHalfOutline, starOutline } from 'ionicons/icons';
import './Search.css';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('');
  return (
  <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="title" >Search</IonTitle>
            <IonButtons slot="start">
            <IonButton href="explore">
              <IonIcon icon={chevronBack} />
            </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonSearchbar className="searchbar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        
            <h6 className="suggested" >Recent</h6>
            <IonButton fill="clear" slot="end" color="warning">Clear All</IonButton>
      {/*-- List of Sliding Items --*/}
      <IonList>

    <IonCard className="searchcard" >
          <IonItem lines="none" >
          <IonThumbnail slot="start">
            <IonImg src='http://placekitten.com/g/200/300' />
          </IonThumbnail>
          <IonButton fill="clear" slot="end">
                <IonIcon  icon={closeOutline} slot="icon-only" color="warning" />
                </IonButton>
            <IonLabel>
            <h2>Mike Rock</h2>
            <p>Music Artist</p>
                </IonLabel>
          </IonItem>
     </IonCard>

          <IonCard  className="coordinator" >
          <IonItem lines="none" >
          <IonThumbnail slot="start">
            <IonImg src='http://placekitten.com/g/200/300' />
          </IonThumbnail>
          <IonButton fill="clear" slot="end">
                <IonIcon  icon={closeOutline} slot="icon-only" color="warning" />
                </IonButton>
            <IonLabel>
            <h2>Lori Grey</h2>
            <p>Model</p>
                </IonLabel>
          </IonItem>
     </IonCard>
      </IonList>
    </IonContent>
    </IonPage>
  );
};

export default Search;