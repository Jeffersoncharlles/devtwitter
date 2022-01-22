import styles from './styles.module.scss'

import { MdOutlinePlace, MdAddLink, MdAccessTime, MdFace, MdPersonPin, MdOutlineImage } from "react-icons/md";

export const Profiler = () => {

    return (
        <aside className={styles.container}>
            <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
            <h1>Jefferson Charlles</h1>
            <span>@jefferdeveloper</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aut rem modi neque magni ea quo quae pariatur qui eius at nemo, iste laudantium saepe doloribus dolore sint, obcaecati atque.</p>
            <ul>
                <li>
                    <MdOutlinePlace size={24} />
                    Kutuwfo,Sweden
                </li>
                <li>
                    <MdAddLink size={24} />
                    lipgaklit.be/vugku
                </li>
                <li>
                    <MdAccessTime size={24} />
                    Joiend June 2007 19:30:41
                </li>
                <li>
                    <MdFace size={24} />
                    B0HS6350
                </li>
            </ul>

            <div className={styles.container_widget_followers}>
                <strong><MdPersonPin size={24} />73 followers that your know</strong>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className={styles.container_widget_images}>
                <strong><MdOutlineImage size={24} />266 Photos and videos</strong>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </aside>
    );
}