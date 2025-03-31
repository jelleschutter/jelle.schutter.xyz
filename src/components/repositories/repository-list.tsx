'use client';

import { useEffect, useState } from 'react';

import RepositoryItem from './repository-item';
import styles from './repository-list.module.scss';
import type { Repository } from './model';

export default function RepositoryList({
  username,
}: Readonly<{
  username: string;
}>) {
  const [repositories, setRepositories] = useState<(Repository | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=pushed`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        }
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format');
        }
        setRepositories(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [username]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles['repository-list']}>
      {repositories.map((repository, index) => (
        <RepositoryItem key={index} repository={repository} />
      ))}
    </div>
  );
}
