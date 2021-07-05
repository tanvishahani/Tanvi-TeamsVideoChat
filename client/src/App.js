/*import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import { config } from './config';
import { PublicClientApplication } from '@azure/msal-browser';
import { Component } from 'react';

/*import { FaBeer } from 'react-icons/fa';*/
/*class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 0,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '1px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
   // {},

}));

//const App = () => {
class App extends Component {
    //const classes = useStyles();
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isAuthenticated: false,
            user: {}
        };
        this.login = this.login.bind(this)
        this.publicClientApplication = new PublicClientApplication({
            auth: {
                clientId: config.appId,
                redirectUrl: config.redirectUrl,
                authority: config.authority
            },
            cache: {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie: true
            }
        });
    }
    async login() {
        try {
            await this.publicClientApplication.loginPopup(
            {
                scopes: config.scopes,
                prompt: "select_account"
            });
            this.setState({ isAuthenticated: true })

        }
        catch (err) {
            this.setState({
                isAuthenticated: false,
                user: {},
                error: err
            });
        }
    }
    engage() {
        this.setState({ isAuthenticated: true})
    }
    logout() {
    this.publicClientApplication.logout();
    }

    render() {

        //if (this.state.isAuthenticated === true) {

        return (
                <div>
                   // <div style={this.state.isauthenticated ? {} : { display: 'none' }}/*className={classes.wrapper}>

                    Engage Teams Clone
                   // <AppBar /*className={classes.appBar} position="static" color="inherit">
                        <Typography variant="h2" align="center">MS Teams</Typography>
                    </AppBar>

                    <VideoPlayer />
                    <Options>
                        <Notifications />


                    </Options>
                    </div>
                    <div style={this.state.isauthenticated ? { display: 'none'} : {}}>
                        <button onClick={()=>this.engage()} >Login in </button>

                    </div>
                </div>


            );
        
        
    }
}



export default App;  */


import React from 'react';
import { Link } from "react-router-dom";
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
//import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Footer from './components/footer/Footer';


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
            <br/>
            <Footer/>
        </div>
    );
};

export default App;
