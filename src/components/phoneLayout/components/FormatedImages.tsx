

type formatedImagesType = {
    img: string;
    IsRouded: boolean;
    alt: string
}


const FormatedImages = ({img,IsRouded, alt}:formatedImagesType ) => {

  const rounded = 'rounded-md w-8'
  const circle = 'rounded-full border-1 w-6 border-white'

  return (
    <div>
        <img src={img} alt={alt} className={IsRouded ? rounded : circle} />
    </div>
  )
}

export default FormatedImages