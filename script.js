const uri = 'https://sequematic.com/trigger-custom-webhook/69F02D122B/77239';
        const initDetails = {
            method: 'get',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            mode: "cors"
        }

        function GetData() {

            fetch( uri, initDetails )
                .then( response =>
                {
                    if ( response.status !== 200 )
                    {
                        console.log( 'No luck there ' +
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