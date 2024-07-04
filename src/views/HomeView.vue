<template>
  <main>
    <h1>Jelle Schutter</h1>
    <hr>
    <div class="socials">
      <a class="social" href="https://github.com/jelleschutter/">
        <div>
          <fa-icon class="social-icon" :icon="['fab', 'github']"/>jelleschutter
        </div>
      </a>
      <a class="social" href="https://www.linkedin.com/in/jelleschutter/">
        <div>
          <fa-icon class="social-icon" :icon="['fab', 'linkedin']"/>jelleschutter
        </div>
      </a>
      <a class="social" :href="'mailto:' + email">
        <div>
          <fa-icon class="social-icon" :icon="['far', 'envelope']"/>{{ email }}
        </div>
      </a>
    </div>
    <h2 id="projects">Projects</h2>
    <RepositoryList username="jelleschutter"/>
  </main>
  <footer>
    Jelle Schutter &copy; 2021
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RepositoryList from '@/components/RepositoryList.vue';

export default defineComponent({
  components: {
    RepositoryList,
  },
  data() {
    return {
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

  h1, h2 {
    text-align: center;
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
