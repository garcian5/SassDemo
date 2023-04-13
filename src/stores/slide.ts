import { defineStore } from 'pinia'

export const useSlideStore = defineStore('slide', {
  state: () => ({
    title: 'New Title' as string,
    body: 'New Body' as string | HTMLElement,
    imgs: [] as string[]
  }),
})