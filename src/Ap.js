import "./App.css";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import Department from "./Department";
import Helps from "./Helps";
import Library from "./Library";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { IoLibrarySharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { IoHelpCircleSharp } from "react-icons/io5";
import { AiOutlineGitlab } from "react-icons/ai";
// import { Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const AddActive = () => {};
  return (
    <>
      <Router>
        <Wrapper className="App">
          <aside className="sidebar">
            <Sidebar className="sidebar-container">
              <div className="logo">
                <AiOutlineGitlab className="icon" />
                <h2>StudyVeda</h2>
              </div>
              <SideLinks className="side-links">
                <SingleLink href="#" className="active" onClick={AddActive}>
                  <div>
                    <MdDashboard className="icon" />
                  </div>
                  <h3>Dashboard</h3>
                </SingleLink>

                <SingleLink href="#">
                  <div>
                    <AiOutlineFundProjectionScreen className="icon" />
                  </div>
                  <h3>Courses</h3>
                </SingleLink>
                <SingleLink href="#">
                  <div>
                    <IoLibrarySharp className="icon" />
                  </div>
                  <h3>Library</h3>
                </SingleLink>
                <SingleLink href="#">
                  <div>
                    <GiGraduateCap className="icon" />
                  </div>
                  <h3>Department</h3>
                </SingleLink>
                <SingleLink href="#">
                  <div>
                    <IoHelpCircleSharp className="icon" />
                  </div>
                  <h3>Helps</h3>
                </SingleLink>
              </SideLinks>
            </Sidebar>
          </aside>
          <Main className="main">
            <Switch>
              <Dashboard />
            </Switch>
            {/* <Courses /> */}
            {/* <Library /> */}
            {/* <Department /> */}
            {/* <Helps /> */}
          </Main>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 1rem 1.2rem;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-gap: rem; */
  justify-content: start;
  /* background-color: greenyellow; */
  min-height: 90vh;
  /* background-color: #8777e5; */
  background-color: #ade8f4;
  border-radius: 20px;
  padding: 1rem 0.5rem;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    font-size: 3rem;
    margin-right: 0.5rem;
  }
`;

const SideLinks = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 5rem;
  /* margin-bottom: 2rem; */
`;

const SingleLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  .icon {
    font-size: 2rem;
    /* align-self: center; */
    margin-right: 0.3rem;
  }
`;
const Main = styled.main`
  padding: 1rem 0.5rem;
  border-radius: 5%;
  background-color: #fcfbf2;
  /* background-color: #03045e; */
`;
