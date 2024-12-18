import styled from "styled-components";
const Wrapper = styled.section`
  margin-bottom: 21rem;
  .green-popup-grid {
    grid-template-rows: 1fr 1fr;
    position: absolute;
    right: 150px;
  }

  .green-popup {
    width: 350px;
    height: 185px;
    border-radius: 25px;
    background-color: var(--cyan-200);
  }
  .dark {
    background-color: var(--cyan-300);
    margin-top: 2rem;
  }

  .about-me {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  h1 {
    margin-bottom: 2px;
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 2px;
  }
  .socials {
    margin-top: 0.7rem;
    justify-content: flex-start;
  }
  a {
    transition: transform 155ms ease-in-out;
    &:hover {
      color: white;
      transform: scale(1.3);
    }
  }

  p.indented {
    margin-top: 5rem;
    margin-right: 30rem;
    margin-left: 2rem;
    font-size: var(--text-medium);
  }

  @media screen and (max-width: 1500px) {
    .green-popup-grid {
      display: none;
    }
    p.indented {
      margin-right: 2rem;
    }
  }
`;
export default Wrapper;
