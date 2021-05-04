import { IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const HeaderText: React.FC<{title: string}> = ({title}) => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <div className="header-logo-wrapper">
                    <div className="header-wrapper">
                        <IonTitle>{title}</IonTitle>
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>
    )
}

export default HeaderText
