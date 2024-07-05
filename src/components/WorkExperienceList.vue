<template>
  <WorkExperienceItem
    v-for="(work_experience, i) in work_experiences"
    :key="work_experience.company + ';' + work_experience.start_date"
    :work_experience="work_experience"
    :is_even="i % 2 === 0"
    :has_company_changed="i === 0 || work_experiences[i - 1].company !== work_experience.company"
    :observer="observer ? observer : undefined"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { WorkExperience as WorkExperienceModel } from '../models/WorkExperience';
import WorkExperienceItem from './WorkExperienceItem.vue';

export default defineComponent({
  props: {
    work_experiences: {
      type: Array<WorkExperienceModel>,
      required: true,
    },
  },
  data(): { observer: IntersectionObserver | null } {
    return {
      observer: null,
    };
  },
  created() {
    this.observer = new IntersectionObserver(
      this.onElementObserved,
      {
        root: this.$el,
        threshold: 0.1,
      },
    );
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('work-experiences--item--visible');
        } else {
          entry.target.classList.remove('work-experiences--item--visible');
        }
      });
    },
  },
  components: {
    WorkExperienceItem,
  },
});
</script>

<style scoped lang="scss">

</style>
