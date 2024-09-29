import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './style.module.scss';

import RepositoryList from '../components/repositories/repository-list';
import WorkExperienceList from '@/components/work-experience/work-experience-list';
import type { WorkExperience } from '@/components/work-experience/model';
import { Suspense } from 'react';

const workExperiences: WorkExperience[] = [
  {
    companyName: 'watson News',
    position: 'Data Analyst',
    startDate: '2023-08-01',
  },
  {
    companyName: 'BlueMouse GmbH',
    position: 'Web Developer',
    startDate: '2022-10-01',
    endDate: '2023-07-31',
  },
  {
    companyName: 'ABB',
    position: 'Data Science Intern',
    startDate: '2022-03-01',
    endDate: '2023-02-28',
  },
  {
    companyName: 'BlueMouse GmbH',
    position: 'Web Developer',
    startDate: '2020-07-01',
    endDate: '2020-08-31',
  },
  {
    companyName: 'BlueMouse GmbH',
    position: 'Junior Web Developer',
    startDate: '2019-07-01',
    endDate: '2020-06-30',
  },
];

export default function Home() {
  const email = atob('amVsbGVAc2NodXR0ZXIueHl6');

  return (
    <div>
      <h1>Jelle Schutter</h1>
      <hr />
      <div className={styles.socials}>
        <a className={styles.social} href="https://github.com/jelleschutter/">
          <div>
            <FontAwesomeIcon
              className={styles['social-icon']}
              icon={faGithub}
            />
            jelleschutter
          </div>
        </a>
        <a
          className={styles.social}
          href="https://www.linkedin.com/in/jelleschutter/"
        >
          <div>
            <FontAwesomeIcon
              className={styles['social-icon']}
              icon={faLinkedin}
            />
            jelleschutter
          </div>
        </a>
        <a className={styles.social} href={`mailto:${email}`}>
          <div>
            <FontAwesomeIcon
              className={styles['social-icon']}
              icon={faEnvelope}
            />
            {email}
          </div>
        </a>
      </div>
      <h2 id="projects">Projects</h2>
      <Suspense fallback={<p>Loading 123...</p>}>
        <RepositoryList username="jelleschutter" />
      </Suspense>
      <h2 id="jobs">Jobs</h2>
      <WorkExperienceList workExperiences={workExperiences} />
    </div>
  );
}
