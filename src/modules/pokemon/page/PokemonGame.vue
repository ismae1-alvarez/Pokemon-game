<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@/modules/pokemon/components/PokemonsOptions.vue';
import { usePokenGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interface';

const {
  getNextRound,
  randomPokemon,
  gameStatus,
  isLoading,
  pokemonOptions: options,
  checkAnwer,
} = usePokenGame();
</script>

<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemon</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quiern es este Pokemon?</h1>

    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        @click="getNextRound(4)"
        class="p-3 bg-blue-500 text-white rounded-md"
      >
        ¿Jugar de nuevo?
      </button>
    </div>
    <!-- Pokemon Pictures-->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!--Pokemon Options-->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
      @select-option="checkAnwer"
    />
  </section>
</template>
