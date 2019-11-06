import { mapGetters, mapActions } from 'vuex'

export const homeMixin = {
  computed: {
    ...mapGetters(['inputFocus'])
  },
  methods: {
    ...mapActions(['setInputFocus'])
  }
}
