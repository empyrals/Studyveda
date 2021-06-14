import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LibraryData } from "../components/LibrayData";

const Library = () => {
  return (
    <div className="library">
      <h2>Explore Books</h2>

      <Books className="books">
        {LibraryData.map((item) => {
          return (
            <>
              <BookCover key={item.id}>
                <Link to={`/library/${item.title}`}>
                  <img src={item.url} alt="book" />
                </Link>
              </BookCover>
            </>
          );
        })}
      </Books>
    </div>
  );
};

export default Library;

const Books = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 2rem 1rem 1rem 2rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BookCover = styled.div`
  /* max-height: 24rem; */
  /* border: 1px solid; */
  border: 1px solid #ddd;
  width: 220px;
  height: 300px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* border: 1px solid #ddd; */
    padding: 0.5rem;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.08);
  }
`;
