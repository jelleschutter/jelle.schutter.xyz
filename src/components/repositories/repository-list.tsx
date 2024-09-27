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
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=pushed`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles['repository-list']}>
      {repositories.map((repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </div>
  );
}
