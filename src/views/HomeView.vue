<template>
  <main>
    <h1>Jelle Schutter</h1>
    <hr />
    <div class="socials">
      <a class="social" href="https://github.com/jelleschutter/">
        <div><fa-icon class="social-icon" :icon="['fab', 'github']" />jelleschutter</div>
      </a>
      <a class="social" href="https://www.linkedin.com/in/jelleschutter/">
        <div><fa-icon class="social-icon" :icon="['fab', 'linkedin']" />jelleschutter</div>
      </a>
      <a class="social" :href="'mailto:' + email">
        <div><fa-icon class="social-icon" :icon="['far', 'envelope']" />{{ email }}</div>
      </a>
    </div>
    <h2 id="projects">Projects</h2>
    <RepositoryList username="jelleschutter" />
    <h2 id="jobs">Jobs</h2>
    <WorkExperienceList :work_experiences="work_experiences" />
  </main>
  <footer>Jelle Schutter &copy; 2021</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RepositoryList from '@/components/RepositoryList.vue';
import WorkExperienceList from '@/components/WorkExperienceList.vue';
import type { WorkExperience as WorkExperienceModel } from '@/models/WorkExperience';

export default defineComponent({
  components: {
    RepositoryList,
    WorkExperienceList,
  },
  data(): { work_experiences: WorkExperienceModel[]; email: string } {
    return {
      work_experiences: [
        {
          company: 'watson News',
          job_title: 'Data Analyst',
          start_date: '2023-08-01',
        },
        {
          company: 'BlueMouse GmbH',
          job_title: 'Web Developer',
          start_date: '2022-10-01',
          end_date: '2023-07-31',
        },
        {
          company: 'ABB',
          job_title: 'Data Science Intern',
          start_date: '2022-03-01',
          end_date: '2023-02-28',
        },
        {
          company: 'BlueMouse GmbH',
          job_title: 'Web Developer',
          start_date: '2020-07-01',
          end_date: '2020-08-31',
        },
        {
          company: 'BlueMouse GmbH',
          job_title: 'Junior Web Developer',
          start_date: '2019-07-01',
          end_date: '2020-06-30',
        },
      ],
      email: atob('amVsbGVAc2NodXR0ZXIueHl6'),
    };
  },
});
</script>

<style scoped lang="scss">
main {
  width: 98%;
  margin: 150px auto 0 auto;

  @include tablet {
    width: 90%;
  }

  @include desktop-sm {
    width: 80%;
  }

  @include desktop {
    width: 50%;
  }

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    display: inline-block;
    position: relative;
    left: 50%;
    margin-top: 1.5em;
    padding-bottom: 0.2em;
    transform: translateX(-50%);
    border-bottom: 3px solid $primary-color;
  }

  hr {
    border: none;
    border-top: 3px solid $primary-color;
    width: 20%;
    margin: 25px auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .socials {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    font-size: 1.2em;
    padding: 10px 0;

    @include tablet {
      flex-direction: row;
    }

    .social {
      padding: 5px 0;

      &:not(:last-child) {
        margin-right: 14px;
      }

      .social-icon {
        margin-right: 5px;
      }
    }
  }
}

footer {
  font-size: 1.1em;
  text-align: center;
  padding: 40px;
}
</style>
