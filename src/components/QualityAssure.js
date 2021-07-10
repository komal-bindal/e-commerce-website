import indian from "../images/india.png";
import bestQuality from "../images/bestQuality.jpg";
import bestOffer from "../images/bestOffer.jpeg";
function QualityAssure() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between font-semibold text-md py-12 px-8 md:px-28">
      <div className="flex flex-col items-center justify-center pr-8">
        <img src={indian} className="h-16 w-16" />
        <h2 className="font-bold flex-shrink-0 text-xs md:text-md text-center">
          Shipping all over India
        </h2>
        <p className="text-xs text-center">
          We provide you with safe and fast delivery.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-5 pr-8 md:pt-0">
        <img src={bestQuality} className="h-16 w-16" />
        <h2 className="font-bold">Best Quality</h2>
        <p className="text-xs text-center">
          We provide you new designs and collections with the best quality.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pt-5 md:pt-0 ">
        <img src={bestOffer} className="h-16 w-16" />
        <h2 className="font-bold">Reasonable price</h2>
        <p className="text-xs text-center">
          We have our manufacturing so the price is reasonable.
        </p>
      </div>
    </div>
  );
}
export default QualityAssure;
