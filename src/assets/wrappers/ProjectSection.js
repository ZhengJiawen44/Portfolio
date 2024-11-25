import styled from "styled-components";

const Wrapper = styled.section`
  .card-container {
    display: flex;
    align-items: start;
    width: 100%;
    padding: 2rem;
    p {
      font-size: 1.55rem;
      color: var(--primary-dark);
    }
    h2 {
      font-weight: 600;
    }
  }

  .expand {
    background-color: var(--foreground);
    height: fit-content;
    align-items: start;
    margin-top: 1.5rem;
    column-gap: 1.5rem;
    h2 {
      font-size: 3rem;
    }
    .image {
      width: 15%;
    }
  }

  .expand2 {
    padding: 4rem 4rem 0 4rem;
  }
  .content {
    font-size: 1.55rem;
    padding: 6rem 4rem 4rem 4rem;
  }

  .image {
    box-shadow: -8px 8px 10px 1px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    background-color: green;
    width: 10%;
    aspect-ratio: 1/1;
    margin-right: 2rem;
  }

  h2 {
    margin: 0;
    padding: 0;
  }
  .description-container {
    width: 90%;
  }

  .tag-container {
    margin-top: 3rem;
    display: flex;
  }
  .tag {
    box-shadow: inset -5px 5px 6px 0px rgba(0, 0, 0, 0.64);
    &:hover {
      box-shadow: none;
      color: var(--primary-light);
    }
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.7rem;
    background-color: var(--background);
    padding: 0.7rem 1.2rem 0.7rem 1.2rem;
    margin-right: 1.4rem;
    border-radius: 22px;
    font-family: "Space Mono", monospace;
    font-size: 1.1rem;
  }
  .logo {
    height: 1.2rem;
    width: 1.2rem;
  }

  @media screen and (max-width: 1500px) {
    .image {
      display: none;
    }
  }
`;

export default Wrapper;
