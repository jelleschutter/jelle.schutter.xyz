<template>
  <div class="gh-repo-list">
    <RepositoryItem v-for="repo in repos" :key="repo.id" :repo="repo"/>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import type { Ref } from 'vue';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import RepositoryItem from './RepositoryItem.vue';
import type { Repository as RepositoryModel } from '../models/Repository';

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  components: {
    RepositoryItem,
  },
  setup(props) {
    const repos: Ref<RepositoryModel[]> = ref([]);

    const config: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.github.com/users/${props.username}/repos?sort=pushed`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    };

    axios(config)
      .then((res: AxiosResponse<RepositoryModel[]>) => {
        repos.value = res.data;
      });

    return {
      repos,
    };
  },
});
</script>

<style scoped lang="scss">
.gh-repo-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
