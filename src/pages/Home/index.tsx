import { Profiler } from '../../components/Profiler';
import { Timeline } from '../../components/Timeline';
import { Widgets } from '../../components/Widgets';
import styles from './styles.module.scss'

export const Home = () => {

    return (
        <main className={styles.wrapper_content}>

            <Profiler />
            <Timeline />
            <Widgets />
        </main>
    );
}