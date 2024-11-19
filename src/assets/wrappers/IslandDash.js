import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    width: max-content;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--foreground);
    color: var(--primary-dark);
    border-radius: var(--border-radius);
    margin: auto;
    margin-top: 30px;
    padding: 0px 30px;
    column-gap: 20px;
  }
  .translate {
    padding: 0px 20px;
    position: absolute;
    top: 0;
    right: 5em;
  }

  .dash-items {
    width: 30px;
    height: 30px;
    color: var(--primary-dark);
    stroke-width: 1.5;
    transition: transform 185ms ease-in-out;
    padding: 0.2rem;
  }
  .dash-items:hover {
    color: var(--primary-light);
    cursor: pointer;
    transform: translateY(-5px) scale(1.1);
  }

  .dash-item-container:hover .label-container {
    display: block;
  }

  .label-container {
    display: none;
    position: absolute;
    top: 65px;
    color: var(--primary-light);
    font-family: "Space Grotesk";
  }
  .dash-item-container {
    display: grid;
    justify-items: center;
  }
`;
export default Wrapper;
