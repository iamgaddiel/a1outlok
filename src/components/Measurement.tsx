import React from 'react'
import { IonCard, IonCardContent, IonImg, IonItem, IonList, IonPage } from '@ionic/react'

import BeachShirt from '../svgs/beach-shirt.svg';

const Measurement = () => {
    return (
        <IonList className="ion-margin-top">
            <IonItem routerLink="/">
                <IonCard>
                    <IonCardContent>
                        <IonImg src={BeachShirt} slot="start" className="list-item-image" />
                    </IonCardContent>
                </IonCard>
                <div className="list-detail">
                    <h5>Gaddiel Ighota</h5>
                    <small>example@example.com</small>
                </div>
            </IonItem>
        </IonList>
    )
}

export default Measurement
