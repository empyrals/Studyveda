import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { LibraryData } from "./LibrayData";
import styled from "styled-components";

const SingleBook = () => {
  // console.log(useParams());
  const [bookTitle, setBookTitle] = useState("default");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("John Doe");
  const [download, setDownload] = useState("google.com");
  const [summary, setSummary] = useState("No Data");
  const { title } = useParams();

  useEffect(() => {
    const newItem = LibraryData.find((item) => item.title === title);
    setBookTitle(newItem.title);
    setUrl(newItem.url);
    setAuthor(newItem.author);
    setSummary(newItem.summary);
    setDownload(newItem.download_url);
  });
  return (
    <Container className="main-container">
      <DisplayBook className="display-book">
        <img src={url} alt="" />
        <div className="book-info">
          <div className="main-info">
            <h2>{bookTitle}</h2>
            <h4>by {author}</h4>
          </div>
          <p>{summary}</p>
        </div>
      </DisplayBook>
      <Button className="btn-container">
        <Link to="/library">
          <button className="btn">Back</button>
        </Link>
        <a href={download} target="_blank">
          <button className="btn">Download</button>
        </a>
      </Button>

      {/* <Button className="btn-container">
        <Link to="/library">
          <button className="btn">Back</button>
        </Link>
        <button className="btn">Download</button>
      </Button> */}
    </Container>
  );
};

export default SingleBook;

const Container = styled.div`
  height: 30rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 25rem; */
  .btn {
    padding: 0.8rem 1.6rem;
    background-color: #060b26;
    color: #f5f5f5;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    box-shadow: 4px 6px 7px #666;
    transition: all 0.2s ease-in;
    /* font-weight: 400; */
    cursor: pointer;
  }
  .btn:hover {
    background-color: #1a83ff;
    color: #fff;
    box-shadow: 6px 2px 4px #444;
  }
`;
const DisplayBook = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  /* align-items: center; */
  /* justify-content: center; */
  .book-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  img {
    width: 250px;
    height: 350px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 4rem; */
  margin-right: 4rem;
  /* justify-self: center; */
`;
