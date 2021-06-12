import React from "react";
import { CourseData } from "../components/CourseData";
import CourseCard from "../CourseCard";
import styled from "styled-components";

const Course = () => {
  console.log("Hello");
  return (
    <div className="course">
      <h1>Explore Courses</h1>

      <CourseMain className="course">
        {/* <div className="inner-course"> */}
        {CourseData.map((item, index) => {
          return (
            <CourseCard
              key={index}
              day={item.day}
              time={item.time}
              icon={item.icon}
              title={item.title}
              mentor={item.mentor}
              venue={item.venue}
            />
          );
        })}
        {/* </div> */}
      </CourseMain>
    </div>
  );
};

export default Course;

const CourseMain = styled.main`
  /* .inner-course { */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;
  /* } */

  /* background-color: black; */
`;
