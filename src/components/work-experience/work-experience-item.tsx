'use client';

import moment from 'moment';

import type { WorkExperience } from './model';
import styles from './work-experience-item.module.scss';
import { useEffect, useRef } from 'react';

export default function WorkExperienceItem({
  workExperience,
  hasHasCompanyChanged,
  isEven,
}: Readonly<{
  workExperience: WorkExperience;
  hasHasCompanyChanged: boolean;
  isEven: boolean;
}>) {
  const formattedStartDate = moment(workExperience.startDate).format(
    'MMM YYYY',
  );
  const formattedEndDate = moment(workExperience.endDate).format('MMM YYYY');

  const contentElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentElement.current?.classList.add(
            styles['work-experiences--item--visible'],
          );
        } else {
          contentElement.current?.classList.remove(
            styles['work-experiences--item--visible'],
          );
        }
      });
    });

    observer.observe(contentElement.current as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles['work-experiences--wrapper']}>
      <div
        className={`${styles['work-experiences--item']} ${styles['work-experiences--' + (isEven ? 'left' : 'right')]}`}
        ref={contentElement}
      >
        <div className={styles['work-experiences--content']}>
          {hasHasCompanyChanged && (
            <h3 className={styles['work-experiences--company']}>
              {workExperience.companyName}
            </h3>
          )}
          <div className={styles['work-experiences--position']}>
            <h4>{workExperience.position}</h4>
            <p className={styles['work-experiences--date']}>
              {formattedStartDate}&nbsp;&mdash;&nbsp;
              {typeof workExperience.endDate === 'string'
                ? formattedEndDate
                : 'Now'}
            </p>
            <p>{workExperience.description}</p>
            <div className={styles['work-experiences--tick']}></div>
          </div>
        </div>
      </div>
      <div
        className={`${styles['work-experiences--filler']} ${styles['work-experiences--' + (!isEven ? 'left' : 'right')]}`}
      ></div>
    </div>
  );
}
