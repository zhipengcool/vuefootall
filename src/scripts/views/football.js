var footballTpl = require('../tpls/football.string');

import comUntils from "../untils/commonUntils.js";

comUntils.render('.box',footballTpl);

var navSwiper = null;
var homeSwiper = null;
new Vue({
	el:"#wrapFlex",
	data:{
		navTitle : ["足球现场","足球生活","足球美女"],
		navActive:0,
		renderData : []
	},
	methods:{
		changePage(index){
			homeSwiper.slideTo(index)
		}
	},
	mounted(){
		this.$http.get('./livelist.json').then((res)=>{
				console.log(res.data.data)
				this.renderData = res.data.data;
			},
			(res)=>{
				console.log("error"+res)
			}
		)
		var that = this;
		setTimeout(function(){
			navSwiper =  new Swiper('.guide-img',{
			 	onSlideChangeStart:function(){
			 		console.log(navSwiper.activeIndex)
			 		$("#titles span").eq(navSwiper.activeIndex).addClass('active').siblings().removeClass('active');
			 	}
			 });

			homeSwiper = new Swiper('#home-content',{	
				onSlideChangeStart:function(){
					that.navActive = homeSwiper.activeIndex;
					console.log(that.navActive)
				}
			});

			new IScroll('.cont')
		},500)
		
	}
})

