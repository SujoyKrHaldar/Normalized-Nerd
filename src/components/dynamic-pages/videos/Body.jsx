import SampleDesign from "../blogs/components/SampleDesign";
import Landing from "./components/Landing";
import Description from "./components/Description";
import OtherVideos from "./OtherVideos";

function Body({ data, others }) {
  return (
    <div className="pt-16 w-full h-auto">
      <SampleDesign />

      <Landing data={data} />
      <Description data={data} />
      <OtherVideos data={others} />
    </div>
  );
}

export default Body;
