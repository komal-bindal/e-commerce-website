import image from "../images/shop.jpg";
function Header() {
  return (
    <div className="py-8 px-8">
      <img src={image} className="w-screen h-96 md:h-125"></img>
    </div>
  );
}
export default Header;
/**
 * <div className="bg-shop h-125  flex justify-center items-center">
      </div>
    
 */
