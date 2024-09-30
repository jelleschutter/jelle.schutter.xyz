import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faFile, faStar } from '@fortawesome/free-regular-svg-icons';

import type { Repository } from './model';
import styles from './repository-item.module.scss';

export default function RepositoryItem({
  repository,
}: Readonly<{
  repository?: Repository;
}>) {
  if (!repository) {
    return (
      <div className={styles['repository-container']}>
        <div className={styles.repository}>
          <h3 className={styles.title}>
            <span className={styles['placeholder']} style={{ width: '60%' }}>
              &nbsp;
            </span>
          </h3>
          <p className={styles['last-update']}>
            <span className={styles['placeholder']} style={{ width: '50%' }}>
              &nbsp;
            </span>
          </p>
          <p className={styles.description}>
            <span className={styles['placeholder']} style={{ width: '80%' }}>
              &nbsp;
            </span>
          </p>
          <div className={styles.tags}>
            <span className={styles['placeholder']} style={{ width: '30%' }}>
              &nbsp;
            </span>
          </div>
        </div>
      </div>
    );
  }

  const lastUpdate = moment(repository.pushed_at).fromNow();

  return (
    <a className={styles['repository-container']} href={repository.html_url}>
      <div className={styles.repository}>
        <h3 className={styles.title}>
          {repository.name}&nbsp;
          {repository.archived && (
            <FontAwesomeIcon
              className={styles['title-icon']}
              icon={faArchive}
            />
          )}
          {!repository.archived && repository.fork && (
            <FontAwesomeIcon
              className={styles['title-icon']}
              icon={faCodeBranch}
            />
          )}
        </h3>
        <p className={styles['last-update']}>Last updated {lastUpdate}</p>
        {typeof repository.description === 'string' && (
          <p className={styles.description}>{repository.description}</p>
        )}
        <div className={styles.tags}>
          {typeof repository.language === 'string' && (
            <div className={styles.tag}>
              <FontAwesomeIcon className={styles['tag-icon']} icon={faFile} />
              {repository.language}
            </div>
          )}
          <div className={styles.tag}>
            <FontAwesomeIcon className={styles['tag-icon']} icon={faStar} />
            {repository.stargazers_count}
          </div>
          <div className={styles.tag}>
            <FontAwesomeIcon
              className={styles['tag-icon']}
              icon={faCodeBranch}
            />
            {repository.forks_count}
          </div>
        </div>
      </div>
    </a>
  );
}
