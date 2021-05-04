import { IonHeader, IonImg, IonToolbar } from '@ionic/react'
import React from 'react'

import Logo from "../images/logo.png";

const Header = () => {
    return (
        <IonHeader>
            <IonToolbar color="primary">
                <div className="header-logo-wrapper">
                    <div className="header-wrapper">
                        <IonImg src={Logo} />
                    </div>
                </div>
            </IonToolbar>
        </IonHeader>

    )
}

export default Header
