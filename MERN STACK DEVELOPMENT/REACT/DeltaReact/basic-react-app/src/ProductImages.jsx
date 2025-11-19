export default function Image({ImgLink, ImgDes="Image description"}) {
  let styles = {width: "300px", height: "180px"}
  return (
    <img style={styles} src={ImgLink} alt={ImgDes} />
  )
}
