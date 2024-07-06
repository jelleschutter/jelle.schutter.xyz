<template>
  <div class="work-experiences--wrapper">
    <div :class="'work-experiences--item work-experiences--' + (is_even ? 'left' : 'right')">
      <div class="work-experiences--content">
        <h3 class="work-experiences--company" v-if="has_company_changed">
          {{ work_experience.company }}
        </h3>
        <div class="work-experiences--position">
          <h4>{{ work_experience.job_title }}</h4>
          <p class="work-experiences--date">
            {{ formattedStartDate }} &mdash;
            {{ typeof work_experience.end_date === 'string' ? formattedEndDate : 'Now' }}
          </p>
          <p>{{ work_experience.description }}</p>
          <div class="work-experiences--tick"></div>
        </div>
      </div>
    </div>
    <div
      :class="'work-experiences--filler work-experiences--' + (is_even ? 'right' : 'left')"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import moment from 'moment';
import type { WorkExperience as WorkExperienceModel } from '../models/WorkExperience';

export default defineComponent({
  name: 'WorkExperienceItem',
  props: {
    work_experience: {
      type: Object as PropType<WorkExperienceModel>,
      required: true,
    },
    has_company_changed: {
      type: Boolean,
      required: false,
      default: false,
    },
    is_even: {
      type: Boolean,
      required: false,
      default: true,
    },
    observer: {
      type: IntersectionObserver,
      required: false,
    },
  },
  mounted() {
    if (this.observer) {
      this.observer.observe(this.$el.querySelector('.work-experiences--item') as Element);
    }
  },
  computed: {
    formattedStartDate(): string {
      return moment(this.work_experience.start_date).format('MMM YYYY');
    },
    formattedEndDate(): string {
      return moment(this.work_experience.end_date).format('MMM YYYY');
    },
  },
});
</script>

<style scoped lang="scss">
.work-experiences--wrapper {
  display: flex;
  flex-direction: row;
}

.work-experiences--filler {
  display: none;
  width: 50%;
}

.work-experiences--item {
  position: relative;
  width: 100%;
  padding: 5px 20px;
}

.work-experiences--item .work-experiences--content {
  position: relative;
  top: 50px;
  opacity: 0;
  transition:
    opacity 0.5s,
    top 0.5s;
}

.work-experiences--item.work-experiences--item--visible .work-experiences--content {
  opacity: 1;
  top: 0;
}

.work-experiences--item h4 {
  margin: 0.3em 0;
}

.work-experiences--company {
  position: relative;
  display: inline-block;
  margin-top: 50px;
  padding-bottom: 10px;
  border-bottom: 2px solid $primary-color;
}

.work-experiences--company::after {
  content: '';
  display: block;
  clear: both;
  background-color: $primary-color;
  position: absolute;
  bottom: -9px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.work-experiences--position {
  position: relative;
}

.work-experiences--date {
  font-size: 0.9em;
  margin-top: 0;
  margin-bottom: 0.4em;
}

.work-experiences--item .work-experiences--tick {
  height: 2px;
  width: 10px;
  background-color: $primary-color;
  position: absolute;
  top: 12px;
}

.work-experiences--item.work-experiences--right .work-experiences--company {
  margin-left: -35px;
  padding-left: 35px;
}

.work-experiences--item.work-experiences--left .work-experiences--company {
  margin-right: -35px;
  padding-right: 35px;
}

.work-experiences--item.work-experiences--right .work-experiences--company::after,
.work-experiences--item.work-experiences--left .work-experiences--company::after {
  left: -8px;
  right: auto;
}

.work-experiences--item.work-experiences--right .work-experiences--tick,
.work-experiences--item.work-experiences--left .work-experiences--tick {
  left: -35px;
}

.work-experiences--right,
.work-experiences--left {
  order: 2;
  text-align: left;
  border-left: 2px solid $primary-color;
  padding-left: 35px;
}

@media screen and (min-width: 768px) {
  .work-experiences--filler {
    display: block;
  }

  .work-experiences--item {
    width: 50%;
  }

  .work-experiences--item .work-experiences--company {
    margin-top: 20px;
  }

  .work-experiences--item.work-experiences--left .work-experiences--company {
    margin-right: -35px;
    padding-right: 35px;
  }

  .work-experiences--item.work-experiences--left .work-experiences--company::after {
    left: auto;
    right: -8px;
  }

  .work-experiences--item.work-experiences--left .work-experiences--tick {
    right: -35px;
    left: auto;
  }

  .work-experiences--left {
    order: 1;
    text-align: right;
    border-right: 1px solid $primary-color;
    border-left: none;
    padding-right: 35px;
  }

  .work-experiences--right {
    border-left: 1px solid $primary-color;
  }
}
</style>
