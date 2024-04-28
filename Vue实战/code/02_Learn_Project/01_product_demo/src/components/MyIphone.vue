<template>
  <div class="product">
    <h2>iphone15</h2>
    <div>商品图片</div>
    <div>商品价格: <span>¥{{price}}</span></div>
    <p>iphone15, {{price}}秒杀</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 9999.9
    }
  }
}
</script>

