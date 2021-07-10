import visitingCard1 from "../images/visitingCard.jpg";
import visitingCard2 from "../images/visitingCard3.jpg";
function Visiting() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between p-8 items-center">
        <div className="flex flex-col justify-center items-start shadow-lg p-4 font-semibold">
          <h2 className="underline font-bold">Business hours</h2>
          <h3>Monday : 10am-10pm</h3>
          <h3>Tuesday : closed</h3>
          <h3>Wednesday : 10am-10pm</h3>
          <h3>Thursday : 10am-10pm</h3>
          <h3>Friday : 10am-10pm</h3>
          <h3>Saturday : 10am-10pm</h3>
        </div>
        <img
          src={visitingCard1}
          className="h-42 w-80 rounded-lg pt-5 md:pt-0 shadow-lg"
        />
        <img
          src={visitingCard2}
          className="h-42 w-80 rounded-lg pt-5 md:pt-0 shadow-lg"
        />
      </div>
    </div>
  );
}
export default Visiting;
