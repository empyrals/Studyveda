import React from "react";
import styled from "styled-components";
import { IoPersonOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";

const CourseCard = ({ icon, day, time, title, mentor, venue }) => {
  return (
    <Main>
      <div className="card">
        <Head className="head">
          <Icon className="icon">
            <p>{icon}</p>
          </Icon>
          <Time className="timing">
            {day}, {time}
          </Time>
        </Head>
        <Info className="info-container">
          <h3>{title}</h3>
          <div className="mentor">
            <p>
              <IoPersonOutline className="icon" />
            </p>
            <p>{mentor}</p>
          </div>
          <div className="venue">
            <p>
              <GoLocation className="icon" />
            </p>
            <p>{venue}</p>
          </div>
        </Info>
        <Progress className="progress">
          <div className="progress_count">
            <h4>Progress</h4>
            <p>30%</p>
          </div>
          <div className="outer">
            <div className="inner"></div>
          </div>
        </Progress>
      </div>
    </Main>
  );
};

export default CourseCard;

const Main = styled.div`
  text-align: left;
  width: 20rem;
  height: 20rem;
  /* background-color: #eeeeef; */
  /* background-color: #caf0f8; */
  background-color: rgba(6, 11, 38, 0.9);
  color: #f6f6f5;
  padding: 0.8rem 1.2rem;
  border-radius: 10%;
  box-shadow: 10px 10px 5px rgba(6, 11, 38, 0.5);
`;
const Icon = styled.div`
  background-color: #c7f497;
  border-radius: 8px;
  width: 2.5rem;
  height: 3.3rem;
  text-align: center;
  p {
    font-size: 2rem;
  }
`;
const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.1rem 1rem;
`;
const Time = styled.div`
  background-color: aliceblue;
  color: #222;
  padding: 0.2rem 0.8rem;
  border-radius: 8px;
`;
const Info = styled.div`
  margin-top: 1.5rem;
  h3 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 0.5;
  }
  .mentor {
    display: flex;
    align-items: center;
  }
  .venue {
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 1.6rem;
    margin-right: 0.5rem;
  }
`;
const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 3.5rem;
  .outer {
    width: 100%;
    height: 1.2rem;
    background-color: black;
    border-radius: 10px;
  }
  .inner {
    width: 30%;
    background-color: aqua;
    height: 1.2rem;
    border-radius: 10px;
  }
  .progress_count {
    display: flex;
    justify-content: space-between;
  }
`;
