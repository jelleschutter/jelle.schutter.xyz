import WorkExperienceItem from './work-experience-item';
import type { WorkExperience } from './model';

export default function WorkExperienceList({
  workExperiences,
}: Readonly<{
  workExperiences: WorkExperience[];
}>) {
  let previousCompany = '';
  return (
    <div>
      {workExperiences.map((workExperience, i) => {
        const hasCompanyChanged =
          i === 0 || previousCompany !== workExperience.companyName;
        previousCompany = workExperience.companyName;
        return (
          <WorkExperienceItem
            key={i}
            workExperience={workExperience}
            hasHasCompanyChanged={hasCompanyChanged}
            isEven={i % 2 == 0}
          />
        );
      })}
    </div>
  );
}
