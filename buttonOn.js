const lightsoff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77239';
const lightson = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77241';
const KiLight =  'https://sequematic.com/trigger-custom-webhook/69F02D122B/78387';
const MiLight = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78390';
const NiLight = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78393';
const Fan = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78396';
const KiLightOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78402';
const MiLightOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78404';
const NiLightOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78406';
const FanOff = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/78408';
        const initDetails = {
            method: 'get',
            headers: {
                "Content-Type": "button.js; charset=utf-8"
            },
            mode: "cors"
        }

        function TurnOn() {

            fetch( lightson, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function TurnOff() {

            fetch( lightsoff, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function KiOn() {

            fetch( KiLight, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function MiOn() {

            fetch( MiLight, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function NiOn() {

            fetch( NiLight, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function FanOn() {

            fetch( Fan, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function KiOff() {

            fetch( KiLightOff, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function MiOff() {

            fetch( MiLightOff, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function NiOff() {

            fetch( NiLightOff, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }
        function FanTurnOff() {

            fetch( FanOff, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'Looks like there was a problem. Status Code: ' +
                            response.status );
                        return;
                    }

                    console.log( response.headers.get( "Content-Type" ) );
                    return response.json();
                }
                )
                .then( myJson =>
                {
                    console.log( JSON.stringify( myJson ) );
                } )
                .catch( err =>
                {
                    console.log( 'Fetch Error :-S', err );
                } );
        }