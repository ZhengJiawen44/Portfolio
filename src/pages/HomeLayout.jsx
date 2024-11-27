import IslandDash from "../components/IslandDash";
import Wrapper from "../assets/wrappers/HomeLayout";
import { Outlet } from "react-router-dom";
import { useObserver } from "../utils/useObserver";
const HomeLayout = () => {
  const [dashboardRef, isVisible] = useObserver();
  //vite hot refresh breaks this, the Observer stops updating isVisible

  return (
    <Wrapper>
      {!isVisible && <IslandDash isVertical={true} ref={dashboardRef} />}
      <IslandDash ref={dashboardRef} />
      <div className="page">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default HomeLayout;
