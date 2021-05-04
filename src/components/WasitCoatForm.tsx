import { IonButton, IonCol, IonInput, IonLabel, IonRow } from '@ionic/react'
import React from 'react'
import { FormGroup } from 'reactstrap'

const WasitCoatForm = () => {
    return (
        <div className="ion-margin-top ion-padding mb-4 pb-5">
        <FormGroup className="mt-4">
            <IonLabel slot="floating">Full Name</IonLabel>
            <IonInput type="text" placeholder="Enter customer full name" color="dark" name="fullname"  className="form-input" required/>
        </FormGroup>
        <FormGroup className="mt-3">
            <IonLabel slot="floating">Pone Number</IonLabel>
            <IonInput type="text" placeholder="Enter phone number" color="dark" name="phone"  className="form-input" required/>
        </FormGroup>
        <FormGroup className="mt-3">
            <IonLabel slot="floating">Email</IonLabel>
            <IonInput type="email" placeholder="Enter email" color="dark" name="email"  className="form-input" required/>
        </FormGroup>
        <IonRow className="justify-content-between">
            <IonCol className="mt-3" size="6">
                <IonLabel>Shoulder Size</IonLabel>
                <IonInput type="number" name="shoulderSize" min="1"placeholder="1" className="form-input" required />
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Chest Size</IonLabel>
                <IonInput type="number" name="chestSize" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>WaistCoat Size</IonLabel>
                <IonInput type="number" name="waistsSize" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Length</IonLabel>
                <IonInput type="number" name="length" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
        </IonRow>
        <FormGroup className="mt-3">
            <IonLabel slot="floating">Comment</IonLabel>
            <IonInput type="text" placeholder="Comments..." color="dark" name="comment" className="form-input"/>
        </FormGroup>

        <IonButton type="submit" color="primary" fill="solid" expand="full">
            Add Measurement
        </IonButton>

    </div>
    )
}

export default WasitCoatForm
