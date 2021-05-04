import { IonCard, IonCardContent, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonListHeader, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react'
import React from 'react'
import { add } from "ionicons/icons";
import { Container } from 'reactstrap';

// Custom Imports
import Logo from "../images/logo.png";
import BeachShirt from '../svgs/beach-shirt.svg';
import Measurement from '../components/Measurement';
import Header from '../components/Header';

const Dashboard = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                {/* header */}
                <Header />

                <Container className="ion-margin-top">
                    <IonText className="text-muted">Category</IonText>
                    <div className="d-flex justify-content-evenly no-padding ion-margin-top" style={{ background: "#3880ff" }}>
                        <IonCard>
                            <IonCardContent>
                                <div className="db-cat-image">
                                    <IonImg src={BeachShirt} title="beach-shirt" className="db-cat-img" />
                                </div>
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardContent>
                                <div className="db-cat-image">
                                    <IonImg src={BeachShirt} title="beach-shirt" className="db-cat-img" />
                                </div>
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardContent>
                                <div className="db-cat-image">
                                    <IonImg src={BeachShirt} title="beach-shirt" className="db-cat-img" />
                                </div>
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardContent>
                                <div className="db-cat-image">
                                    <IonImg src={BeachShirt} title="beach-shirt" className="db-cat-img" />
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </div>
                </Container>

                <div className="ion-margin-top">
                    {/* <IonText className="text-muted">Recently Added</IonText> */}
                    <div className="ion-margin-top">
                        <IonListHeader className="text-muted">Task</IonListHeader>
                    </div>
                    <Measurement />
                </div>

                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton routerLink="/category">
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard
