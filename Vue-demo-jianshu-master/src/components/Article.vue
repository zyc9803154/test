<template>
	<ul>
		<li class='list' v-for="article in articles">
			<p class="list-top">
        <a href="#" class="author"><span>{{ article.author }}</span></a>
        <span class="time"> - {{ article.time}}</span>
      </p>
			<h2 class="title"><a href="#">{{ article.title }}</a></h2>
			<span class="small-text">阅读 {{article.read}} -</span>
			<span class="small-text">评论 {{article.comment}} -</span>
			<span class="small-text">喜欢 {{article.like}} -</span>
			<span class="small-text">打赏 {{article.pay}}</span>
			<span class="image"
				:style="{backgroundImage:article.src, backgroundSize:'100%', backgroundRepeat:'no-repat'}">
			</span>
		</li>
	</ul>
	<input type='button' v-on:click='wx.startRecord()' value='开始录音'>
	<input type='button' v-on:click='wx.stopVoice()' value='开始录音'>
	<input type='button' v-on:click='wx.playVoice()' value='开始录音'>

</template>
<script>
import Vue from 'vue';
import { getArticles } from '../vuex/getters'
const wx = require('weixin-js-sdk')

const voice = {
    localId: '',
    serverId: ''
  };
	export default {
		vuex: {
			getters: {
				articles: getArticles
			}
		},
		ready: function() {
			console.log(1111111111111);
		      Vue.http.get('http://127.0.0.1/vue-demo-jianshu-master/api/sample.php').then(function(data){
		            wx.config({
		              debug: true,
		              appId: data.appId,
		              timestamp: parseInt(data.timestamp),
		              nonceStr: data.nonce,
		              signature: data.signature,
		              jsApiList: [
		                'startRecord',
		                'stopRecord',
		                'playvoice',
		                'translateVoice'
		                ]
	                });
		            wx.ready(function () {
									alert(1111111111111);
		               wx.startRecord();
									 wx.stopRecord({
									   success: function (res) {
											 alert(2222222);
									     voice.localId = res.localId;
									    },
									 });
									 wx.playvoice({
										 localId: voice.localId
									 })
		            });
		          })
		      }
	    }

</script>
<style>
	.list{
    	margin-left: 30px;
    	margin-top: 17px;
   	 	margin-bottom: 17px;
   	 	padding-bottom: 17px;
   		width: calc(100% - 30px);
    	border-bottom:1px dashed #efefef;
		border-bottom: 1px dashed #d9d9d9;
	}
	.list-top{
		padding-top: 10px;
	}
	.list .title a{
		margin-top: 10px;
    	margin-bottom: 10px;
    	margin-left: 0;
    	display: inherit;
    	font-size: 18px;
    	font-weight: bold;
    	line-height: 1.5;
	}
</style>
