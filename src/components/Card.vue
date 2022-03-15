<template>
  <div @click="openUser" :class="$style.card">
    <h2>{{ title }}</h2>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <user ref="user" />
  </div>
</template>
<script>
import User from './User.vue'
export default {
  name: "card-component",
  components: {
    User,
  },
  props: ["title", "text1", "text2"],
  methods: {
      openUser() {
        this.$refs.user.show = true
    }
  }
};
</script>
<style module>
.card {
  border-radius: 15px;
  padding: 1rem;
  background: var(--ocean-green);
  box-shadow: 0px 0px 61px -11px rgba(34, 60, 80, 0.2) inset;
  transition: box-shadow linear 0.5s;
}
.card h2 {
  font-size: 2rem;
  color: #fff;
}
.card p {
  color: var(--sherpa-blue);
}
.card p,
.card h2 {
  margin-bottom: 0.5rem;
}
.card:hover {
  box-shadow: 0px 0px 51px -1px rgba(34, 60, 80, 0.7) inset;
  cursor: pointer;
}
</style>
