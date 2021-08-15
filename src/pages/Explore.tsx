import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonSearchbar, IonThumbnail, IonImg, IonList, IonSlide, IonSlides, IonItemGroup, IonText } from '@ionic/react';
import { pin, wifi, wine, warning, walk, star, videocam, videocamOutline, searchCircleOutline, search, musicalNoteOutline, musicalNotesOutline, cameraOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Explore.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: '' }];


const Explore: React.FC = () => {
    const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
       <IonContent> 
           <IonSearchbar className="searchbarexplorer" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
           <h5 className="trendingtitle" >Trending</h5>
            <IonButton className="showallbutton" color="warning" fill="clear" >View more</IonButton>

            
            <IonSlides className="ionslider"  >
            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div>
            </IonCard>
  
            <IonCard className="londoncard"  >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>

            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>
            </IonSlides> 

            <IonSlides>
            <IonSlide>
            <IonCard className="categorycard">
              <IonButton className="categoryicons" fill="clear"  >
                  <IonIcon  className="my-icon" icon={videocamOutline} size="large" color="warning"/>
              </IonButton>
              <IonCardSubtitle  >Video</IonCardSubtitle>
            </IonCard>

            <IonCard className="categorycard" >
              <IonButton fill="clear">
                  <IonIcon  className="my-icon" icon={musicalNotesOutline} size="large" color="warning"/>
              </IonButton>
            </IonCard>

            <IonCard className="categorycard" >
              <IonButton fill="clear">
                  <IonIcon  className="my-icon" icon={cameraOutline} size="large" color="warning"/>
              </IonButton>
            </IonCard>
            </IonSlide>

            <IonSlide>
            <IonCard className="categorycard" >
              <IonButton fill="clear">
                  <IonIcon  className="my-icon" icon={videocamOutline} size="large" color="warning"/>
              </IonButton>
            </IonCard>

            <IonCard className="categorycard">
              <IonButton fill="clear">
                  <IonIcon className="my-icon" icon={musicalNotesOutline} size="large" color="warning"/>
              </IonButton>
            </IonCard>

            <IonCard className="categorycard" >
              <IonButton fill="clear">
                  <IonIcon className="my-icon" icon={cameraOutline} size="large" color="warning"/>
              </IonButton>
            </IonCard>
            </IonSlide>
            </IonSlides>


            <h5 className="trendingtitle" >Recommended</h5>
            <IonButton className="showallbutton" color="warning" fill="clear" >View more</IonButton>


            <IonSlides className="ionslider"  >
            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div>
            </IonCard>
  
            <IonCard className="londoncard"  >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>

            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>
            </IonSlides> 
            

            <h5 className="trendingtitle" >Popular</h5>
            <IonButton className="showallbutton" color="warning" fill="clear" >View more</IonButton>
            
            <IonSlides className="ionslider"  >
            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div>
            </IonCard>
  
            <IonCard className="londoncard"  >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>

            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>
            </IonSlides> 

            <h5 className="trendingtitle" >Newest</h5>
            <IonButton className="showallbutton" color="warning" fill="clear" >View more</IonButton>
            
            <IonSlides className="ionslider"  >
            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div>
            </IonCard>
  
            <IonCard className="londoncard"  >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>

            <IonSlide>
            <IonCard className="londoncard" >
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>

            <IonCard className="londoncard">
            <IonImg className="london" src="/assets/london.png" />
            <h5 className="trendingheader" >Lori Grey</h5>
            <IonCardSubtitle className="trendingcategory" >Fashion Model</IonCardSubtitle>
                <div className="explorestars" >
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                <IonIcon icon={star} size="small" color="warning" />
                </div> 
            </IonCard>
            </IonSlide>
            </IonSlides> 
            
            
          </IonContent>
        </IonPage>
      );
    };

export default Explore;
