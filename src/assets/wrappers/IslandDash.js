import styled from "styled-components";

const Wrapper = styled.section`
  .dash-container {
    display: flex;
    align-items: center;
  }
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
    right: 100px;
  }

  .dash-items {
    width: 30px;
    height: 27px;
    color: var(--primary-dark);
  }
`;
export default Wrapper;
