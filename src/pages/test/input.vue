<!---
    Created by kankan on 2019-10-21.
    email: lidainzhong@gl-data.com
-->


<template>
  <div>
    <p>
      Name: {{ value }}
    </p>
    <p>
      <Button @click="handleRender">Custom content</Button>
    </p>
  </div>

</template>

<script>
  export default {
    name: "input",
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleRender() {
        this.$Modal.confirm({
          render: (h) => {
            return h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: 'Please enter your name...'
              },
              on: {
                'on-blur': (val) => {
                  this.value = val.target.value;
                }
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
