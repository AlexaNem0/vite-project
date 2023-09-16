import SalesItem from "./SalesItem";
import WebAnalytics from "./WebAnalitycs";
import ScoreList from "./ScoreList";

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesItem />
      <WebAnalytics />
      <ScoreList />
    </div>
  );
};

export default RightColumn;
