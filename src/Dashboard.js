import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FcAndroidOs } from "react-icons/fc";
import CourseCard from "./CourseCard";

const Dashboard = () => {
  return (
    <div>
      <Head className="header">
        <Greet className="greet">
          <h4>Welcome back, Alex!</h4>
          <p>You're doing great this week. Keep it up!</p>
        </Greet>
        <HeaderRight className="header_left">
          <Search>
            <input className="input" type="text" placeholder="Search here" />
            <BsSearch className="icon" />
          </Search>
          <img
            src={`https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F51%2Ff6%2Ffb%2F51f6fb256629fc755b8870c801092942.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F675680750326659227%2F&tbnid=eRWFwGusAo6U9M&vet=12ahUKEwiP_ou8r4zxAhVbsksFHUleBfEQMygRegUIARD0AQ..i&docid=c0x0w5GRr5o4hM&w=256&h=256&q=user&ved=2ahUKEwiP_ou8r4zxAhVbsksFHUleBfEQMygRegUIARD0AQ`}
            alt="user"
          />
        </HeaderRight>
      </Head>
      <Main>
        <h3>Your Courses</h3>
        {/* <CourseCard icon=<FcAndroidOs /> day="Mon" time="8:20 a.m" /> */}
        <CardContainer className="card_container">
          <CourseCard
            day="Monday"
            time="8:30 a.m"
            icon={<FcAndroidOs />}
            title="Artificial"
            mentor="Galvin Biden"
            venue="Room no.301"
          />
          <CourseCard
            day="Monday"
            time="8:30 a.m"
            icon={<FcAndroidOs />}
            title="Operating Systems"
            mentor="Galvin Biden"
            venue="Room no.301"
          />
          <CourseCard
            day="Monday"
            time="8:30 a.m"
            icon={<FcAndroidOs />}
            title="Operating Systems"
            mentor="Galvin Biden"
            venue="Room no.301"
          />
        </CardContainer>
        {/* <Course_card /> */}
      </Main>
    </div>
  );
};

export default Dashboard;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* background-color: #fff; */
`;
const Greet = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start; */
  p {
    line-height: 1;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20vw;
  align-items: center;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: azure;
  height: 2.4rem;
  padding-bottom: 0.2rem;
  padding-right: 0.7rem;
  border-radius: 10px;
  .input {
    height: 2rem;
    border: none;
    background-color: transparent;
    text-align: center;
    outline: none;
  }
  .icon {
    font-size: 1rem;
  }
`;
const Main = styled.div`
  .icon {
    font-size: 1rem;
  }
  h3 {
    margin-bottom: 2rem;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0.8rem;
`;
