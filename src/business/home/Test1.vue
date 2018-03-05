<template>
	<div>

		  <div>vuex使用例子</div>
		  <p>{{this.count}}</p>
		  <p>gts:{{this.gts}}</p>
		  <button @click='increment'>click me!!!!</button>
		  <button @click='incrementAct'>click me!!!!change after 1s!</button>
	</div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import {INCREMENT_AC, INCREMENT} from "store/Types";
export default {
  name: 'Test1',
  methods  : {
  	...mapMutations('home',{
  		increment : INCREMENT
  	}),//映射为this.increment,相当于this.$store.commit("home/INCREMENT")
  	...mapActions('home',{
  		incrementAct : INCREMENT_AC
  	})
  },
  computed:{
  	...mapGetters('home',['gts']),
  	...mapState('home',['count'])
  },
  mounted(){
  	console.log(this.$store);
  }
}
</script>