import "./Banner.css"

interface BannerProps {
  imageSource: string
  altText: string
}

function Banner({ imageSource, altText }:BannerProps) {
  return (
    <header>
        <img className="banner" src={imageSource} alt={altText} />
    </header>
  )
}

export default Banner;
