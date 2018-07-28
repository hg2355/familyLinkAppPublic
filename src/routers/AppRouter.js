import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SchoolKingPage from '../components/SchoolKingPage';

const HomePage = () => (
    <div>
        This is the homepage of |familyLink
    </div>
);

const NotFoundPage = () => (
    <div>
        This page doesn't exist
    </div>
);


const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/king" component={SchoolKingPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
