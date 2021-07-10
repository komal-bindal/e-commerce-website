function ImageCard1(dresses) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img src={dresses.image} alt="image" className="h-40  md:h-60 w-full" />
    </div>
  );
}
export default ImageCard1;
