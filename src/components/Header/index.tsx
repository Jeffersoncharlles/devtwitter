import styles from './styles.module.scss'
import { GoHome, GoSearch } from "react-icons/go";
import { IoLogoTwitter, IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";

export const Header = () => {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <ul>
                        <li>
                            <GoHome size={24} style={{ marginRight: '7px' }} /> Home
                        </li>
                        <li>

                            <IoMdNotificationsOutline size={24} style={{ marginRight: '7px' }} /> Notifications
                        </li>
                        <li>
                            <FiMail size={24} style={{ marginRight: '7px' }} /> Messages
                        </li>
                    </ul>
                </nav>
                <IoLogoTwitter style={{ color: '#61ddff' }} size={24} />
                <div>
                    <input type="text" placeholder='Search on Twitter' />
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="avatar" />
                    <button>Twitter</button>
                </div>
            </div>
        </header>
    );
}