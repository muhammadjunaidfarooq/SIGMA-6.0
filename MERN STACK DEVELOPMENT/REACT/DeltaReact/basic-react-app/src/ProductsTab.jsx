import Title from "./Title";
import Image from "./ProductImages";
import Description from "./Description";
import Price from "./Price";

export default function ProductsTab() {
  let styles = {
    border: "2px solid brown",
    width: "300px",
    backgroundColor: "lightBlue",
    borderRadius: "21px",
  };
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Blockbuster Deals on Computer Accessories | Shop Now</h1>
      <div style={{display: "flex", gap: "20px", justifyContent: "center"}}>
        <div style={styles}>
          <Title title="Logitech MX Master 3S" />
          <Image ImgLink="longitech.avif" />
          <Description line1="8,000 DPI" line2="5 Programeable Buttons" />
          <Price oldPrice="12,495" newPrice="8,999" />
        </div>
        <div style={styles}>
          <Title title="Apple Pencil (2nd Gen)" />
          <Image ImgLink="pencil.avif" />
          <Description line1="Intuitive touch surface" line2="Designed for iPad Pro" />
          <Price oldPrice="11,900" newPrice="9,199" />
        </div>
        <div style={styles}>
          <Title title="Zebronics Zeb-Transformer" />
          <Image ImgLink="keyboard.avif" />
          <Description line1="Intuitive touch surface" line2="Designed for iPad Pro" />
          <Price oldPrice="1,599" newPrice="899" />
        </div>
        <div style={styles}>
          <Title title="Portronics Toad 23 Wireless" />
          <Image ImgLink="mouse.avif" />
          <Description line1="Wireless Mouse 2.4GHZ" line2="Optical Orientation" />
          <Price oldPrice="599" newPrice="278" />
        </div>
      </div>
    </div>
  );
}
