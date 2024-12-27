import BrowseRangeComponent from "./Components/browseRange";
import ImageGallery from "./Components/gallery";
import Hero from "./Components/hero";
import OurProducts from "./Components/ourproducts";
import Rooms from "./Components/rooms";


export default function Home() {
  return (
    <div>
      <Hero/>
      <BrowseRangeComponent/>
      <OurProducts/>
      <Rooms/>
      <ImageGallery/>

    </div>

  )
}