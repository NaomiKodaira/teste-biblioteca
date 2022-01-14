import logo from './logo.svg';
import './App.css';
import {Button, Header} from 'taskbox-teste-subir-npm';
import {ch} from './dist';
import styled from 'styled-components';

const Layout = styled.div`
  ${ch.grid.default.body}
  ${ch.grid.default.sm}
  @media (min-width: ${ch.breakpoint.md.min}px) {
    ${ch.grid.default.md}
  }
  @media (min-width: ${ch.breakpoint.lg.min}px) {
    ${ch.grid.default.lg}
  }
  @media (min-width: ${ch.breakpoint.xl.min}px) {
    ${ch.grid.default.xl}
  }
  @media (min-width: ${ch.breakpoint.xxl.min}px) {
    ${ch.grid.default.xxl}
  }
`

const Header2 = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;
@media (min-width: ${ch.breakpoint.md.min}px) {
  grid-column-start: 1;
  grid-column-end: 4;
}
@media (min-width: ${ch.breakpoint.lg.min}px) {
  grid-column-start: 1;
  grid-column-end: 5;
}
@media (min-width: ${ch.breakpoint.xl.min}px) {
  grid-column-start: 1;
  grid-column-end: 5;
}
`

function App() {
  console.log("1- ------------------------------", Button);
  console.log(ch)
  return (
    <Layout className="App">
      <Header2 className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label="Testeeeeee" />
        <Header/>
      </Header2>
    </Layout>
  );
}

export default App;
