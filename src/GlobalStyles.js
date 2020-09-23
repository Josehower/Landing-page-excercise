import { createGlobalStyle, css } from 'styled-components';

export const colors = {
  yellow: '#fdd231',
  grey: '#12121280',
  white: '#f2f2f2',
  whiteLight: '#f2f2f280',
};

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
color:#F2F2F2;
background-color:#000;
font-family: 'Inter', sans-serif;
margin-left:-15px;
}

}
body::-webkit-scrollbar {
  width: 13px;
}
body {
  scrollbar-width: 13px;
  scrollbar-color: #fdd231; black;
}
body::-webkit-scrollbar-track {
  background: black
}
body::-webkit-scrollbar-thumb {
  background-color: #fdd231;
  border-radius: 6px;
  border: 4px black solid;

}

h1, h2,h3{
  font-weight: 700;
}

h2,h3{
  font-size: 44.8px;
}
`;

export const marginStyles = css`
  width: 1056px;
  margin: 0 auto;
`;

export default GlobalStyle;
