<template>
    <div>
      <button @click="toggleDiv" class="btn">ver mas..</button>
      <div ref="content" :style="{ maxHeight: isExpanded ? contentHeight : '0px' }" class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DivInv',
    data() {
      return {
        isExpanded: false,
        contentHeight: '0px'
      };
    },
    methods: {
      toggleDiv() {
        this.isExpanded = !this.isExpanded;
        this.$nextTick(() => {
          if (this.isExpanded) {
            this.contentHeight = this.$refs.content.scrollHeight + 'px';
          } else {
            this.contentHeight = '0px';
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 48%;
  }
  
  .btn:hover {
    background-color: #357ABD;
  }
  
  .content {
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  </style>
  