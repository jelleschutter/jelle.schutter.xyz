import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './style.module.scss';

import RepositoryList from '../components/repositories/repository-list';

export default function Home() {

  const email = atob('amVsbGVAc2NodXR0ZXIueHl6');

  return (
    <div>
      <h1>Jelle Schutter</h1>
      <hr />
      <div className={styles.socials}>
        <a className={styles.social} href="https://github.com/jelleschutter/">
          <div>
            <FontAwesomeIcon className={styles['social-icon']} icon={faGithub} />
            jelleschutter
          </div>
        </a>
        <a className={styles.social} href="https://www.linkedin.com/in/jelleschutter/">
          <div>
            <FontAwesomeIcon className={styles['social-icon']} icon={faLinkedin} />
            jelleschutter
          </div>
        </a>
        <a className={styles.social} href={`mailto:${email}`}>
          <div>
            <FontAwesomeIcon className={styles['social-icon']} icon={faEnvelope} />
            {email}
          </div>
        </a>
      </div>
      <h2 id="projects">Projects</h2>
      <RepositoryList username="jelleschutter" />
      <h2 id="jobs">Jobs</h2>
      {/* <WorkExperienceList :work_experiences="work_experiences" /> */}
    </div>
  );
}
