<template>
  <a class="gh-repo-container" :href="repo.html_url">
    <div class="gh-repo">
      <h2 class="title">
        {{ repo.name }}
        <fa-icon class="title-icon" icon="archive" v-if="repo.archived" />
        <fa-icon class="title-icon" icon="code-branch" v-if="!repo.archived && repo.fork" />
      </h2>
      <p class="last-update">Last updated {{ lastUpdate }}</p>
      <p class="description" v-if="typeof repo.description === 'string'">{{ repo.description }}</p>
      <div class="tags">
        <div class="tag" v-if="typeof repo.language === 'string'">
          <fa-icon class="tag-icon" :icon="['far', 'file']" />{{ repo.language }}
        </div>
        <div class="tag">
          <fa-icon class="tag-icon" :icon="['far', 'star']" />{{ repo.stargazers_count }}
        </div>
        <div class="tag"><fa-icon class="tag-icon" icon="code-branch" />{{ repo.forks_count }}</div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import moment from 'moment';
import type { Repository as RepositoryModel } from '../models/Repository';

export default defineComponent({
  name: 'RepositoryItem',
  props: {
    repo: {
      type: Object as PropType<RepositoryModel>,
      required: true,
    },
  },
  computed: {
    lastUpdate(): string {
      return moment(this.repo.pushed_at).fromNow();
    },
  },
});
</script>

<style scoped lang="scss">
.gh-repo-container {
  width: 100%;
  padding: 7px;
  text-decoration: none;
  color: inherit;

  @include tablet {
    width: 50%;
  }
}

.gh-repo {
  border: 1px solid #14355e;
  border-radius: 3px;
  height: 100%;
  padding: 12px;

  .title {
    font-size: 1.1em;
    margin: 0;
  }

  .last-update {
    margin: -1px 0 0 0;
    font-size: 0.8em;
    word-spacing: -3px;
  }

  .description {
    margin: 10px 0 0 0;
  }

  .tags {
    display: flex;
    margin: 10px 0 0 0;
    font-size: 0.9em;

    .tag {
      &:not(:last-child) {
        margin-right: 12px;
      }

      .tag-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
