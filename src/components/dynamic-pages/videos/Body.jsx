import Landing from "./components/Landing";
import Description from "./components/Description";
import OtherVideos from "./OtherVideos";

function Body({ data, others }) {
  return (
    <div className="pt-16 w-full h-auto">
      <div className="bg-[#f2c744] w-full h-[85vh] absolute inset-0 "></div>
      <Landing data={data} />
      <Description data={data} />
      <OtherVideos data={others} />
    </div>
  );
}

export default Body;
