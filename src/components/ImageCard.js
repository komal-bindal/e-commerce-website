function ImageCard(dresses) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg ">
      <img src={dresses.image} alt="image" className="h-40 w-full md:h-60 " />
      <div className="px-2 md:px-6 py-4">
        <ul>
          <li>
            <strong>Size : </strong>
            {dresses.size}
          </li>
        </ul>
        <ul>
          <li>
            <strong>AgeGroup : </strong>
            {dresses.ageGroup}
          </li>
        </ul>
      </div>
      <div className="px-1 md:px-6 py-4 flex flex-wrap justify-between ">
        <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {dresses.color1}
        </span>
        <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {dresses.color2}
        </span>
        <span className=" inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {dresses.color3}
        </span>
      </div>
    </div>
  );
}
export default ImageCard;
