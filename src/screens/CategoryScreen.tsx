import { IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonPage, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { Container } from 'reactstrap';
import { arrowBack } from "ionicons/icons";

import Trouser from '../svgs/jeans.svg';
import Shirt from '../svgs/tshirt.svg';
import WaistCoat from '../svgs/waistcoat.svg';
import Suit from '../svgs/suit.svg';
import HeaderText from '../components/HeaderText';

const CategoryScreen = () => {
    return (
        <IonPage>
            <IonContent>
                <HeaderText title="Select Category"/>
                {/* Back Button */}
                <IonFab vertical="top" horizontal="start" slot="fixed">
                    <IonFabButton routerLink="/dashboard" size="small" routerDirection="back">
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>

                <div className="d-flex justify-content-center align-items-center vh-85">
                    <Container>
                        <IonRow>
                            <IonCol size="6" className="ion-margin-top">
                                <IonCard color="primary" routerLink="/form/suite">
                                    <IonCardContent>
                                        <IonImg src={Suit} />
                                        <IonText className="ion-text-center ion-margin-top">Suit</IonText>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="6" className="ion-margin-top">
                                <IonCard routerLink="/form/waistcoat" color="primary">
                                    <IonCardContent>
                                        <IonImg src={WaistCoat} />
                                        <IonText className="ion-text-center ion-margin-top">WaistCoat</IonText>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="6" className="ion-margin-top">
                                <IonCard routerLink="/form/shirt" color="primary">
                                    <IonCardContent>
                                        <IonImg src={Shirt} />
                                        <IonText className="ion-text-center ion-margin-top">Shirt</IonText>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="6" className="ion-margin-top">
                                <IonCard routerLink="/form/trouser" color="primary">
                                    <IonCardContent>
                                        <IonImg src={Trouser} />
                                        <IonText className="ion-text-center ion-margin-top">Trouser</IonText>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </Container>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default CategoryScreen
