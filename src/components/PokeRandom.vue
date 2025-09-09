<template>
    <loading v-if="isLoading"></loading>
    <mainDiv v-else class="w-80 h-100">
        <p class="capitalize text-2xl bg-[#efefbf] p-2 pl-7 pr-7 rounded-xl border-2 border-[#baba79]"> <strong>{{ pokName }}</strong></p>
        <img :src="pokImg" alt="Pokemon" class="min-h-50 bg-grey-600 " />
        <div class="max-h-7 flex flex-row justify-center gap-2">
            <img v-for="(type, i) in pokTypes" :src="pokTypeSprites[i]" :alt="type.type.name" class="object-cover rounded"/>
        </div>
        <Btn @click="fetchPokemon()">New Pokemon</Btn>
    </mainDiv>
    
    
</template>

<script lang="ts" setup>
import Loading from '@components/ui/Loading.vue'
import Btn from '@components/ui/Button.vue'
import { onMounted } from 'vue'
import mainDiv from './ui/MainDiv.vue'

const props = defineProps<{
    pokImg: string,
    pokTypes: any[],
    pokTypeSprites: string[],
    pokName: string,
    isLoading: boolean,
    fetchPokemon: () => void
}>()

onMounted(() => {
    props.fetchPokemon()
})

</script>


