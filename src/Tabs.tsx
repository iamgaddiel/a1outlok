import { IonIcon, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonText as IonLabel } from '@ionic/react';
import { home, people, document, logOut } from "ionicons/icons";
import { IonReactRouter } from '@ionic/react-router';
import React from 'react'
import { Redirect, Route } from 'react-router-dom';

// Custom Components
import Dashboard from "./screens/DashboardScreen";
import ClientsScreen from "./screens/ClientsScreen";
import Notes from "./screens/NotesScreen";
import CategoryScreen from "./screens/CategoryScreen";
import FormScreen from "./screens/FormScreen";


const Tabs = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet id="main">
                    <Route path="/" exact>
                        <Redirect to="/dashboard" />
                    </Route>
                    <Route path="/dashboard" component={Dashboard} exact />
                    <Route path="/client" component={ClientsScreen} exact />
                    <Route path="/notes" component={Notes} exact />
                    <Route path="/logout" component={Notes} exact />
                    <Route path="/category" component={CategoryScreen} exact />
                    <Route path="/form/:name" component={FormScreen} exact />
                </IonRouterOutlet>

                <IonTabBar slot="bottom" color="primary">
                    <IonTabButton href="/dashboard" tab="home">
                        <IonIcon icon={home} color="light"/>
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    <IonTabButton href="/client" tab="client">
                        <IonIcon icon={people} color="light"/>
                        <IonLabel>Clients</IonLabel>
                    </IonTabButton>
                    <IonTabButton href="/notes" tab="notes">
                        <IonIcon icon={document} color="light"/>
                        <IonLabel>Notes</IonLabel>
                    </IonTabButton>
                    <IonTabButton href="/logout" tab="logout">
                        <IonIcon icon={logOut} color="light"/>
                        <IonLabel>logout</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Tabs
