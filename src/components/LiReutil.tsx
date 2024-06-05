interface ulProps {
  image: string
  name: string
  alt?: string
}

const LiReutil = ({name,image, alt}:ulProps) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <p>{name}</p>
    </div>
  )
}

export default LiReutil
