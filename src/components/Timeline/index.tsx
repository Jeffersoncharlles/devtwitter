import styles from './styles.module.scss'

import { MdOutlineForum, MdRepeat, MdOutlineEmail } from "react-icons/md";
import { BsHeart } from "react-icons/bs";

export const Timeline = () => {

    return (
        <section className={styles.container}>
            <nav className={styles.container_nav}>
                <a href="" className={styles.active}>Tweets</a>
                <a href="">Tweets and replies</a>
                <a href="">Medias</a>
            </nav>

            <ul>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/26746739?v=4" alt="Jefferson Charlles" />
                    <div className={styles.tweets}>
                        <strong>Cornelia Hopkins <span>@hopkins</span></strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo eius ipsa perferendis ipsum temporibus tenetur minus aut odio, doloremque, aperiam similique molestiae.</p>
                        <div className={styles.tweets_info}>
                            <a href=""><MdOutlineForum size={24} />5</a>
                            <a href=""><MdRepeat size={24} />2</a>
                            <a href=""><BsHeart size={24} />0</a>
                            <a href=""><MdOutlineEmail size={24} />0</a>
                        </div>
                    </div>
                </li>

            </ul>

        </section>
    );
}