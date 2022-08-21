import { useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';


export const NavBar = ({ navlinks }) => {

    const [menue, setMenue] = useState(false)

    const onClickMenu = () => {
        setMenue(!menue)
    }

    return (
        <nav className={`navBar ${menue ? '' : ''}`}>
            <span className="navBar__logo">Travel</span>

            {
                (menue) ? (
                    <FiX size={25} className="navBar__menu" onClick={onClickMenu} />
                ) : (
                    <FiMenu size={25} className="navBar__menu" onClick={onClickMenu} />
                )
            }

            <ul className={` ${(menue) ? ' navBar__list navBar__list--active animate__animated animate__backInDown animate__fast' : 'navBar__list'} `}>
                {
                    navlinks.map(item => (
                        <li key={item.id} className="navBar__item">
                            <a href={item.url} className="navBar__link">
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
