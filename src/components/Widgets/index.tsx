import styles from './styles.module.scss'

export const Widgets = () => {

    return (
        <aside className={styles.container}>
            <div className={styles.container_follow}>
                <div className={styles.container_follow_title}>
                    <strong>Who to follow</strong>
                    <a href="">Refresh</a>
                    <a href="">View all</a>
                </div>
                <ul>
                    <li>
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                            <div>
                                <strong>Spade <span>@spade_be</span></strong>
                                <button>Follow</button>
                            </div>
                        </div>
                        <a href="">x</a>
                    </li>
                    <li>
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                            <div>
                                <strong>Spade <span>@spade_be</span></strong>
                                <button>Follow</button>
                            </div>
                        </div>
                        <a href="">x</a>
                    </li>
                    <li>
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                            <div>
                                <strong>Spade <span>@spade_be</span></strong>
                                <button>Follow</button>
                            </div>
                        </div>
                        <a href="">x</a>
                    </li>
                </ul>
            </div>
            {/* <div className={styles.container_trends}>

            </div> */}
        </aside>
    );
}