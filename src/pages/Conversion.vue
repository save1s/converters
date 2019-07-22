<template>
  <div>
    <b-container>
      <a-breadcrumb style="margin: 16px 0;">
        <a-breadcrumb-item href>
          <!-- <a-icon type="home" /> -->
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <!-- <a-icon type="user" /> -->
          <span>{{from}} to {{to}}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Conversion",
  data() {
    return {
      from: "",
      to: ""
    };
  },
  mounted() {
    let conversion = this.$route.params.conversion;
    console.log(conversion);
    let formats = conversion.split("-to-");
    this.from = formats[0];
    this.to = formats[1];
  }
};
</script>

<style>
</style>
