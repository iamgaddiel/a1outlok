import { IonContent, IonListHeader, IonPage } from '@ionic/react'
import React from 'react'
import { Container } from 'reactstrap'
import HeaderText from '../components/HeaderText'
import Measurement from '../components/Measurement'

const ClientsScreen = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <HeaderText title="Measurements" />
                <Container>
                    <div className="ion-margin-top">
                        <Measurement />
                    </div>
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default ClientsScreen
