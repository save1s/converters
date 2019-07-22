<template>
  <div>
    <b-container>
      <h1 style="margin: 16px 0; font-size: 60px">Make a Conversion</h1>
      <div
        :style="{ background: '#fff', padding: '24px', minHeight: '280px', maxWidth: '500px' }"
        class="mx-auto"
      >
        <a-upload-dragger
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleChange"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" style="font-size: 80px;" />
          </p>
          <p class="ant-upload-text">点击或拖拽要转换的文件</p>
          <!-- <p class="ant-upload-hint" >你可以在菜单栏查看所有支持的转换模式</p> -->
        </a-upload-dragger>
        <div style="text-align: center; font-size: 30px; margin-top: 20px">
          <p>转换为</p>
          <a-select
            showSearch
            placeholder="选择你要转换到的格式"
            optionFilterProp="children"
            style="width: 300px;"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
          >
            <a-select-option value="jpg">JPG</a-select-option>
            <a-select-option value="bmp">BMP</a-select-option>
            <a-select-option value="psd">PSD</a-select-option>
          </a-select>
          <br>
          <a-button type="primary" icon="thunderbolt" size="large" style="font-size: 26px; height: 50px; margin-top: 30px">转换！</a-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AllConverter"
};
</script>

<style>
.ant-upload-text {
  font-size: 20px !;
}
</style>
