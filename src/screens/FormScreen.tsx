import { IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonText } from '@ionic/react'
import { arrowBack } from 'ionicons/icons';
import React from 'react'
import { useParams } from 'react-router'
import HeaderText from '../components/HeaderText';
import ShirtForm from '../components/ShirtForm';


import SuiteForm from "../components/SuiteForm";
import TrouserForm from '../components/TrouserForm';
import WaistCoatForm from '../components/WasitCoatForm';

const FormScreen = () => {
    const { name } = useParams<{ name: string }>();


    const displayForm = () => {

        switch (name) {
            case "trouser":
                return <TrouserForm />;
            case "suite":
                return <SuiteForm />;
            case "waistcoat":
                return <WaistCoatForm />
            case "shirt":
                return <ShirtForm />
            default:
                break;
        }
    }

    const displayHeader = () => {
        switch (name) {
            case "trouser":
                return <HeaderText title="Trouser Form" />;
            case "suite":
                return <HeaderText title="Suite Form" />;
            case "waistcoat":
                return <HeaderText title="WaistCoat Form" />;
            case "shirt":
                return <HeaderText title="Shirt Form" />;
            default:
                break;
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // let formData = new FormData(e)
        console.log(e.target);
    }
    

    return (
        <IonPage>
            <IonContent fullscreen>
                {displayHeader()}
                <IonFab horizontal="start" vertical="top" slot="fixed">
                    <IonFabButton size="small" routerLink="/category" routerDirection='back'>
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>

                <div className="ion-margin-top">
                    <form action="" className="form" onSubmit={ e => handleSubmit(e)}>
                        {displayForm()}
                    </form>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default FormScreen
