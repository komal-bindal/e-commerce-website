import ImageCard from "../components/ImageCard.js";
import ImageCard1 from "../components/ImageCard1.js";
import krishnadress1 from "../images/KrishnaDresses/krishnadress1.JPEG";
import krishnadress2 from "../images/KrishnaDresses/krishnadress2.JPEG";
import krishnadress3 from "../images/KrishnaDresses/krishnadress3.JPEG";
import krishnadress4 from "../images/KrishnaDresses/krishnadress4.JPEG";
import krishnadress6 from "../images/KrishnaDresses/krishnadress6.JPEG";
import krishnadress7 from "../images/KrishnaDresses/krishnadress7.JPEG";
import krishnadress8 from "../images/KrishnaDresses/krishnadress8.JPEG";
import krishnadress9 from "../images/KrishnaDresses/krishnadress9.JPEG";
import dhoti1 from "../images/dhotis and patkas/dhoti1.JPEG";
import dhoti3 from "../images/dhotis and patkas/dhoti3.jpg";
import dhoti4 from "../images/dhotis and patkas/dhoti4.JPG";
import dhoti5 from "../images/dhotis and patkas/dhoti5.JPG";
import dhoti7 from "../images/dhotis and patkas/dhoti7.JPG";
import dhoti9 from "../images/dhotis and patkas/dhoti9.jpg";
import dhoti10 from "../images/dhotis and patkas/dhoti10.jpg";
import coat0 from "../images/coats/coat0.JPG";
import coat1 from "../images/coats/coat1.JPG";
import coat2 from "../images/coats/coat2.JPG";
import dress1 from "../images/dress1.JPG";
import flute1 from "../images/flutes/flute1.jpg";
import flute2 from "../images/flutes/flute2.jpg";
import flute3 from "../images/flutes/flute3.jpg";
import flute4 from "../images/flutes/flute4.jpg";
import flute5 from "../images/flutes/flute5.jpg";
import jewelset1 from "../images/JewelSet/jewelset1.jpg";
import jewelset2 from "../images/JewelSet/jewelset2.jpg";
import jewelset3 from "../images/JewelSet/jewelset3.jpg";
import jewelset4 from "../images/JewelSet/jewelset4.jpg";
import jewelset5 from "../images/JewelSet/jewelset5.jpg";
import jewelset6 from "../images/JewelSet/jewelset6.jpg";
import jewelset7 from "../images/JewelSet/jewelset7.jpg";
import jewelset8 from "../images/JewelSet/jewelset8.jpg";
import Belt1 from "../images/Belts/Belt1.jpg";
import Belt2 from "../images/Belts/Belt2.jpg";
import Belt3 from "../images/Belts/Belt3.jpg";
import Belt4 from "../images/Belts/Belt4.jpg";
import Belt5 from "../images/Belts/Belt5.jpg";
import Belt6 from "../images/Belts/Belt6.jpg";
import Belt7 from "../images/Belts/Belt7.jpg";
import BaajuBand1 from "../images/BaajuBand/BaajuBand1.jpg";
import BaajuBand2 from "../images/BaajuBand/BaajuBand2.jpg";
import BaajuBand3 from "../images/BaajuBand/BaajuBand3.jpg";
import BaajuBand4 from "../images/BaajuBand/BaajuBand4.jpg";
import BaajuBand5 from "../images/BaajuBand/BaajuBand5.jpg";
import Mukut1 from "../images/Mukuts/Mukut1.JPG";
import Mukut2 from "../images/Mukuts/Mukut2.JPG";
import Mukut3 from "../images/Mukuts/Mukut3.jpg";
import Mukut4 from "../images/Mukuts/Mukut4.jpg";
import Mukut5 from "../images/Mukuts/Mukut5.jpg";
import Mukut6 from "../images/Mukuts/Mukut6.jpg";
import Mukut7 from "../images/Mukuts/Mukut7.jpg";
import Mukut8 from "../images/Mukuts/Mukut8.jpg";
import Mukut9 from "../images/Mukuts/Mukut9.jpg";


function Store() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold underline pb-6 pt-10 pl-4">
          Krishna Dresses
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard
            image={krishnadress1}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress2}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress3}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress4}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress6}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress7}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress8}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
          <ImageCard
            image={krishnadress9}
            title="Krishna Dress"
            ageGroup="1-6 years"
            size="16,18,20,22,24,26"
            color1="pink"
            color2="orange"
            color3="blue"
          ></ImageCard>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">Coats</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1 image={coat0}></ImageCard1>
          <ImageCard1 image={coat1}></ImageCard1>
          <ImageCard1 image={coat2}></ImageCard1>
          <ImageCard1 image={dress1}></ImageCard1>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">
          Dhoti Patka
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1 image={dhoti1}></ImageCard1>
          <ImageCard1 image={dhoti3}></ImageCard1>
          <ImageCard1 image={dhoti4}></ImageCard1>
          <ImageCard1 image={dhoti5}></ImageCard1>
          <ImageCard1 image={dhoti7}></ImageCard1>
          <ImageCard1 image={dhoti9}></ImageCard1>
          <ImageCard1 image={dhoti10}></ImageCard1>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">Flutes</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1 image={flute1}></ImageCard1>
          <ImageCard1 image={flute2}></ImageCard1>
          <ImageCard1 image={flute3}></ImageCard1>
          <ImageCard1 image={flute4}></ImageCard1>
          <ImageCard1 image={flute5}></ImageCard1>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">
          Mukuts{" "}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1 image={Mukut1}></ImageCard1>
          <ImageCard1 image={Mukut2}></ImageCard1>
          <ImageCard1 image={Mukut3}></ImageCard1>
          <ImageCard1 image={Mukut4}></ImageCard1>
          <ImageCard1 image={Mukut5}></ImageCard1>
          <ImageCard1 image={Mukut6}></ImageCard1>
          <ImageCard1 image={Mukut7}></ImageCard1>
          <ImageCard1 image={Mukut8}></ImageCard1>
          <ImageCard1 image={Mukut9}></ImageCard1>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">
          Jewel Set{" "}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1
            image={jewelset1}
            title="Krishna Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset2}
            title="Krishna Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset3}
            title="Krishna Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset4}
            title="Krishna Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset5}
            title="Krishna Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset6}
            title="Shankar Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset7}
            title="Shankar Jewellery Set"
          ></ImageCard1>
          <ImageCard1
            image={jewelset8}
            title="Shankar Jewellery Set"
          ></ImageCard1>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">Belts </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1 image={Belt1}></ImageCard1>
          <ImageCard1 image={Belt2}></ImageCard1>
          <ImageCard1 image={Belt3}></ImageCard1>
          <ImageCard1 image={Belt4}></ImageCard1>
          <ImageCard1 image={Belt5}></ImageCard1>
          <ImageCard1 image={Belt6}></ImageCard1>
          <ImageCard1 image={Belt7}></ImageCard1>
        </div>
        <h1 className="text-3xl font-bold underline pb-6 pl-4 pt-10">
          Baaju Band{" "}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ImageCard1 image={BaajuBand1}></ImageCard1>
          <ImageCard1 image={BaajuBand2}></ImageCard1>
          <ImageCard1 image={BaajuBand3}></ImageCard1>
          <ImageCard1 image={BaajuBand4}></ImageCard1>
          <ImageCard1 image={BaajuBand5}></ImageCard1>
        </div>
      </div>
    </div>
  );
}
export default Store;
