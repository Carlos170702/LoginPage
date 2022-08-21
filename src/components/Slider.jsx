import { useInView } from "react-intersection-observer";
import "animate.css";

export const Slider = ({ imageSrc, title, subtitle, flipped }) => {

    const { ref, inView, entry } = useInView({
        threshold: 0.6,
    });

    const renderContent = () => {
        if (flipped) {
            return (
                <div className={`slider ${ inView ? `animate__animated animate__backInLeft animate__fast` : `animate__animated animate__backOutRight animate__fast`}`}>
                    <img className="slider__img" src={imageSrc} alt="Travel" />
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p className="slider__subtitle">{subtitle}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`slider slider--Turn ${ inView ? `animate__animated animate__backInRight animate__fast` : `animate__animated animate__backOutLeft animate__fast`}`}>
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p className="slider__subtitle">{subtitle}</p>
                    </div>
                    <img className="slider__img" src={imageSrc} alt="Travel" />
                </div>
            )
        }
    }

    return (
        <div ref={ref}>
            {renderContent()}
        </div>
    )
}
