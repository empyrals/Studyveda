import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FcAndroidOs } from "react-icons/fc";
import CourseCard from "../CourseCard";
import img from "../user.jpg";

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
          <img src={img} className="user_img" alt="user" />
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
  img {
    width: 35px;
    border-radius: 100%;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(6, 11, 38, 0.1);

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
  padding-top: 2rem;
  .icon {
    font-size: 1rem;
  }
  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0.8rem;
`;
