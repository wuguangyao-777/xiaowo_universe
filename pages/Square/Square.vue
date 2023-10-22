<template>
  <view>
    <button @click="toTopics">更多</button>
    <button @click="toPost">帖子</button>
    <button @click="toEditPost">发表帖子</button>
    <view class="custom-tab-bar">
      <view @click="switchTab('/pages/Square/Square')" class="tab-button">
        <img :src="tabAImage" class="tab-icon" />
        <text class="tab-text">广场</text>
      </view>
      <view @click="switchTab('/pages/Message/Message')" class="tab-button">
        <img :src="tabBImage" class="tab-icon" />
        <text class="tab-text">消息</text>
      </view>
      <view @click="switchTab('/pages/My/My')" class="tab-button">
        <img :src="tabCImage" class="tab-icon" />
        <text class="tab-text">我的</text>
      </view>
    </view>
  </view>
</template>

<script>
import { tab,updateTab } from '/pages/tab.js';
export default {
  data() {
    return {
      currentTab: tab.value,
    };
  },
  computed: {
      tabAImage() {
        if (this.currentTab === '/pages/Square/Square') return '/static/tabBar/square_c.png';
        return '/static/tabBar/square_r.png';
      },
      tabBImage() {
        if (this.currentTab === '/pages/Square/Square') return '/static/tabBar/message_l.png';
        if (this.currentTab === '/pages/Message/Message') return '/static/tabBar/message_c.png';
        return '/static/tabBar/message_r.png';
      },
      tabCImage() {
        if (this.currentTab === '/pages/My/My') return '/static/tabBar/my_c.png';
        return '/static/tabBar/my_l.png';
      }
    },
  methods: {
    switchTab(tab) {
       updateTab(tab);
      uni.switchTab({
      	url:tab
      })
    },
    toTopics() {
      uni.navigateTo({
        url: '/pages/Square/Topic/Topic',
      });
    },
    toPost() {
      uni.navigateTo({
        url: '/pages/Square/Post/Post',
      });
    },
    toEditPost() {
      uni.navigateTo({
        url: '/pages/Square/EditPost/EditPost',
      });
    },
  },
}
</script>
<style>
.custom-tab-bar {
  display: flex;
  justify-content: space-around;
  background-color: #fff; /* 设置背景颜色 */
  border-top: 1px solid #ccc; /* 上边框线条 */
  position: fixed;
  bottom: 40rpx;
  left: 0;
  right: 0;
}

.tab-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rpx;
  text-align: center;
  text-decoration: none;
  border: none;
  outline: none;
  color: #333;
}

.tab-icon {
  width: 48rpx;
  height: 48rpx;
}

.tab-text {
	font-family: 'PingFang SC', sans-serif;
	font-weight: 400;
  font-size: 22rpx;
  letter-spacing: -0.6rpx;
  margin-top: 12rpx;
}
</style>