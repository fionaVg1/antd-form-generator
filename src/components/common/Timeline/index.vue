<template>
  <div>
    <a-steps :current="999" progress-dot :direction="timeLineDirection">
      <a-step
        v-for="item in timeArr"
        :key="item.id"
        :title="item.title"
        :description="item.description"
      >
      </a-step>
    </a-steps>
    <button @click="changeDirection">切换方向</button>
  </div>
</template>

<script>
export default {
  name: 'shr-timeline',
  props: {
    timeArr: {
      type: Array
    },
    direction: {
      type: String
    }
  },
  data: function() {
    return {
      timeLineDirection: this.direction
    };
  },
  methods: {
    changeDirection: function() {
      this.timeLineDirection =
        this.timeLineDirection === 'vertical' ? 'horizontal' : 'vertical';
    }
  }
};
</script>

<style></style>
