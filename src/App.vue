<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/QuizView">QuizView</router-link> |
      <router-link to="/SearchView">SearchView</router-link> |
      <router-link :to="{ name: 'DetailView', params: {hoge: 'pow'}}">DetailView</router-link> |
    </nav>
    <router-view/>
  </div>
</template>
