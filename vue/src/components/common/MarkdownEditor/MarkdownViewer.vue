<template>
  <div :id="id"></div>
</template>

<script>
import 'codemirror/lib/codemirror.css' // codemirror
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content

import Editor from 'tui-editor'
export default {
  name: 'MarkdownEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default() {
        return (
          'markdown-editor-' +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + '')
        )
      }
    }
  },
  computed: {
    editorOptions() {
      const options = {}
      options.viewer = true
      options.initialValue = this.value
      return options
    }
  },
  mounted() {
    this.initEditor()
  },
  destroyed() {
    this.destroyEditor()
  },
  methods: {
    initEditor() {
      this.editor = new Editor.factory({
        el: document.getElementById(this.id),
        height: '200px',
        viewer: true,
        initialValue: this.value
      })
    },
    destroyEditor() {
      if (!this.editor) return
      this.editor.off('change')
      this.editor.remove()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
