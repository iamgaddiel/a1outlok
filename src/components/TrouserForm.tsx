import { IonButton, IonCol, IonInput, IonLabel, IonRow } from '@ionic/react'
import React from 'react'
import { FormGroup } from 'reactstrap'

const TrouserForm = () => {
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
                <IonLabel>Waist</IonLabel>
                <IonInput type="number" name="waist" min="1"placeholder="1" className="form-input" required />
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Seat</IonLabel>
                <IonInput type="number" name="seat" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Hip</IonLabel>
                <IonInput type="number" name="hip" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Length</IonLabel>
                <IonInput type="number" name="length" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Calf</IonLabel>
                <IonInput type="number" name="calf" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Thigh Size</IonLabel>
                <IonInput type="number" name="thighSize" min="1"placeholder="1"  className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>Inside Leg Side</IonLabel>
                <IonInput type="number" name="insideLegSide" min="1" placeholder="1" className="form-input" required/>
            </IonCol>
            <IonCol className="mt-3" size="6">
                <IonLabel>InStep</IonLabel>
                <IonInput type="number" name="inStep" min="1" placeholder="1" className="form-input"  required/>
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

export default TrouserForm
