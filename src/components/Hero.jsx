import '../App.css';

export const Hero = ({ imageSrc }) => {
    return (
        <>
            <div className="hero">
                <div className='hero__con__img'>
                    <img src={ imageSrc } alt="hero_image" className="hero__image" />
                </div>
                <h1 className="hero__title"> imagegen 3D</h1>
            </div>
        </>
    )
}
