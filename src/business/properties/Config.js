// 各组件属性配置
import {INCREMENT_AC, INCREMENT, SET_ATTR} from "store/Types";
import store from "store"
	
let confg= [
  	{
  		type : 'INPUT',
  		name : '宽度',
  		options : {
	      	min : 3,
		    max : 10,
		    onchange : (value)=>{
		    	// methods.incrementAct();
		    	// store.dispatch("home/INCREMENT_AC");
		    	store.commit("properties/SETATTR",{type:'common',key:'width',value:value+'px'});
		    }
	    }
  	},
  	{
  		type : 'INPUT',
  		name : '高度',
  		options : {
	      	min : 3,
		    max : 10,
		    onchange : (value)=>{
		    	store.commit("properties/SETATTR",{type:'common',key:'height',value:value+'px'});
		    }
	    }
  	},
  	{
  		type : 'INPUT',
  		name : 'test3',
  		options : {
	      	min : 3,
		    max : 10,
		    onchange : (value)=>{console.log(value);}
	    }
  	}
  ]

export default {
  	compt1 : [
  		{
  			nameCN : '通用样式',
  			name : 'common',
  			options : [
			  	{
			  		type : 'INPUT',
			  		name : 'width',
			  		nameCN : '宽度',
			  		options : {
				      	min : 3,
					    max : 10,
					    onchange : (value)=>{
					    	// methods.incrementAct();
					    	// store.dispatch("home/INCREMENT_AC");
					    	store.commit("properties/SET_ATTR",{type:'common',key:'width',value:value+'px'});
					    }
				    }
			  	},
			  	{
			  		type : 'INPUT',
			  		name : 'height',
			  		nameCN : '高度',
			  		options : {
				      	min : 3,
					    max : 10,
					    onchange : (value)=>{
					    	store.commit("properties/SET_ATTR",{type:'common',key:'height',value:value+'px'});
					    }
				    }
			  	},
			  	{
			  		type : 'SELECT',
			  		name : 'count',
			  		nameCN : '总数',
			  		options : {
				      	data: [{
				          id: 0,
				          text: 'enhancement'
				        }, {
				          id: 1,
				          text: 'bug122'
				        }],
					    onchange : (value)=>{
					    	// console.log(value.text);
					    	store.commit("properties/SET_ATTR",{type:'common',key:'count',value:value.text});
					    }
				    }
			  	}
			  ]
  		},
  		{
  			nameCN : '文字样式',
  			name : 'textstyle',
  			options : [
			  	{
			  		type : 'INPUT',
			  		nameCN : '宽度',
			  		name : 'width',
			  		options : {
				      	min : 3,
					    max : 10,
					    onchange : (value)=>{
					    	// methods.incrementAct();
					    	// store.dispatch("home/INCREMENT_AC");
					    	store.commit("properties/SET_ATTR",{type:'text',key:'width',value:value+'px'});
					    }
				    }
			  	},
			  	{
			  		type : 'INPUT',
			  		name : 'height',
			  		nameCN : '高度',
			  		options : {
				      	min : -3,
					    max : 10,
					    onchange : (value)=>{
					    	store.commit("properties/SET_ATTR",{type:'text',key:'height',value:value+'px'});
					    }
				    }
			  	},
			  	{
			  		type : 'SELECT',
			  		name : 'pepol',
			  		nameCN : '人数',
			  		options : {
				      	data: [{
				          id: 0,
				          text: 'Jeson'
				        }, {
				          id: 1,
				          text: 'Amy'
				        }, {
				          id: 2,
				          text: 'Tom'
				        }],
					    onchange : (value)=>{
					    	// console.log(value.text);
					    	store.commit("properties/SET_ATTR",{type:'text',key:'pepol',value:value.text});
					    }
				    }
			  	},
			  	{
			  		type : 'COLOR',
			  		name : 'bgcolor',
			  		nameCN : '背景',
			  		options : {
				      	disableFields : true,
					    onchange : (value)=>{
					    	console.log('背景');
					    	//store.commit("properties/SET_ATTR",{type:'text',key:'pepol',value:value.text});
					    }
				    }
			  	}
			  ]
  		},

  	],
  	compt2 : [],
  	compt3 : [],
  }