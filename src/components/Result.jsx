import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height:100vh;
    width:50vw;
    float:right;
    margin:0;
    padding:0;

float:right;

    
`

/*height: 100vh;
    width:50vh;
    float:right;
    margin:0;
    padding:0;*/

const Result = () => {

    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (
        <Container style={html || css || js ? null : {background: 'white' }}>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
               
                style={{width: '100%', height: '90%'}}

            />      
        </Container>
    )
}

export default Result;