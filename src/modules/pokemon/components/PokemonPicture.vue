<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

// opciones por defecto o ponerlo opcional
const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
);
</script>

<template>
  <section>
    <img v-if="!showPokemon" :src="pokemonImage" alt="logo" class="brightness-0 h-[200px]" />
    <img v-else :src="pokemonImage" alt="logo" class="fade-in h-[200px]" />
  </section>
</template>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
