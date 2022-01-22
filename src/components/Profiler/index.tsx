import styles from './styles.module.scss'

import { MdOutlinePlace, MdAddLink, MdAccessTime, MdFace } from "react-icons/md";

export const Profiler = () => {

    return (
        <aside className={styles.container}>
            <div className={styles.container_content}>
                <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                <h1>Jefferson Charlles</h1>
                <span>@jefferdeveloper</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aut rem modi neque magni ea quo quae pariatur qui eius at nemo, iste laudantium saepe doloribus dolore sint, obcaecati atque.</p>

                <ul>
                    <li>
                        <MdOutlinePlace size={24} />
                    </li>
                    <li>
                        <MdAddLink size={24} />
                    </li>
                    <li>
                        <MdAccessTime size={24} />
                    </li>
                    <li>
                        <MdFace size={24} />
                    </li>
                </ul>
            </div>
        </aside>
    );
}