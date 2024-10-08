import './App.css';
import Nav from "./components/Nav";
import styled from "styled-components";
import Banner from "./components/Banner";
import Category from "./components/Category";
import React from "react";
import Row from "./components/Row";
import requests from "./api/request";

function App() {
    return (
        <Container>
            <Nav/>
            <Banner/>
            <Category/>
            <Row title="Trending Now" id = "TN" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" id = "TR" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" id = "AM" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" id = "CM" fetchUrl={requests.fetchComedyMovies} />
            {/*<Row title="Horror Movies" id = "HM" fetchUrl={requests.fetchHorrorMovies} />*/}
            {/*<Row title="Romance Movies" id = "RM" fetchUrl={requests.fetchRomanceMovies} />*/}
            {/*<Row title="Documentaries" id = "DO" fetchUrl={requests.fetchDocumentaries} />*/}
        </Container>
    );
}

export default App;


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

