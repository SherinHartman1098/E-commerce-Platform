import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import EazyButton from "../EazyButton";

const H1 = styled.h1`
  color: #5b21b6;
  text-align: center;
`;

export default function Footer() {
  return (
    <>
      {/* <H1>Demo of Styled compmenets from Footer</H1>
      <EazyButton $primary>Submit</EazyButton> */}
      <footer className="flex justify-center items-center py-4 font-primary text-gray-700">
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          className="text-red-600 mx-1 animate-pulse"
          aria-hidden="true"
        />
        by
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark"
        >
          Sherin Hartman
        </a>
      </footer>
    </>
  );
}
