import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        outline:none;
    }

    html, body {
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        background-size: contain;
        background-repeat: repeat;
        height: 100%;
    }



`
export default globalStyle