import styles from './styles.module.scss'
import { IoIosMore } from 'react-icons/io'

export const InfoUser = () => {

    return (
        <section className={styles.container}>
            <div className={styles.container_content}>
                <ul>
                    <li className={styles.active}>
                        <span>Tweets</span>
                        <strong>120388</strong>
                    </li>
                    <li>
                        <span>Followings</span>
                        <strong>919</strong>
                    </li>
                    <li>
                        <span>Followers</span>
                        <strong>34339</strong>
                    </li>
                    <li>
                        <span>Favorites</span>
                        <strong>432</strong>
                    </li>
                    <li>
                        <span>Lists</span>
                        <strong>7</strong>
                    </li>
                    <li>
                        <span>Moments</span>
                        <strong>2</strong>
                    </li>
                </ul>
                <div>
                    <button>Follow</button>
                    <IoIosMore size={24} style={{ transform: 'rotate(90deg)' }} />
                </div>
            </div>
        </section>
    );
}