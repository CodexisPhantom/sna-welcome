import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { debugData } from "./utils/debugData";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome/welcome";
import Firstscript from "./components/firstscript/firstscript";
import Secondscript from "./components/secondscript/secondscript";
import Thirdscript from "./components/thirdscript/thirdscript";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const Container = styled.div`
  padding: 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
  height: 800px;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid black;
  color: #000;
  background: #FFF;
`;

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/firstscript" element={<Firstscript/>} />
            <Route path="/secondscript" element={<Secondscript/>} />
            <Route path="/thirdscript" element={<Thirdscript/>} />
          </Routes>
        </Content>
      </Container>
    </>
  );
};

export default App;
