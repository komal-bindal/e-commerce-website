import Owner from "../images/Owner.jpeg"
function About() {
  return (
    <div className="flex flex-col justify-center items-center max-w-xs mx-auto md:max-w-lg">
      <img src = {Owner} className = "h-40 w-40 rounded-full mt-6 shadow-lg"/>
      <p className="text-md font-semibold text-gray-700 text-center pt-6">
        We are wholesaler and manufacturer of all the dramatic goods, Ramlila
        and Raslila goods. We have a huge variety of all types of mythological
        characters costumes, accessories which includes mukut, belt, bajubandh,
        wigs, malas at very reasonable prices. We also have wedding umbrellas
        and horse jhools. We have a large variety of all the dress and
        accessories of well known festival Janmashtami.{" "}
      </p>
      <p className="text-md font-semibold text-gray-700  text-center pt-6">
        We are in this field since 1971 and we deal all over India. We work as
        both wholesalers and retailers.
      </p>
      <h2 className="text-lg font-bold text-gray-700 text-center pt-6">
        Manoj Kumar Agrawal mukutwala
      </h2>
      <h2 className="text-lg font-bold text-gray-700 text-center pt-3">
        Harsh Agrawal
      </h2>
    </div>
  );
}
export default About;
