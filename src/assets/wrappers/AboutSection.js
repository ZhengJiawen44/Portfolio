import styled from "styled-components";
const Wrapper = styled.section`
  height: 70vh;
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
    margin-top: 1px;
    justify-content: flex-start;
  }

  p.indented {
    margin-top: 5rem;
    margin-right: 30rem;
    margin-left: 2rem;
    font-size: 1.5rem;
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
