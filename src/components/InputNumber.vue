<template>
  <div class="v-input-number">
    <div class="v-input-number-arrows">
      <a class="v-input-number-up"
        @click.prevent="onClick($event, 'up')"
        @mouseup="onMouseup"
        @mousedown="onMousedown($event, 'up')"
        > <i class="v-input-number-icon"></i> </a>

      <a class="v-input-number-down"
        @click.prevent="onClick($event, 'down')"
        @mouseup="onMouseup"
        @mousedown="onMousedown($event, 'down')"
        > <i class="v-input-number-icon"></i> </a>
    </div>

    <input type="text" :maxlength="maxlength" autocomplete="off"
      class="v-input-number-input"
      v-model.number="quantity"
      @keyup="onKeyup($event)"
      @keydown="onKeydown($event)"
      @blur="onBlur"
      >
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    //初始值
    init: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    integer: {
      type: Boolean,
      default: false
    },
    mousedown: {
      type: Boolean,
      default: false
    },
    keydown: {
      type: Boolean,
      default: true
    },
    maxlength: {
      type: Number,
      default: 4
    },
    onchange: {
      type: Function,
      default: ()=>{}
    },
    options: {
      type: Object,
      default: function(){
        return {}
      }
    },
  },

  data () {
    return {
      clicked: false,
      interval: 0,
      timeout: 0,
      quantity: this.init,
      oldValue: this.init,
      isKeydown: false
    }
  },

  watch: {
    quantity: function () {
      this.evaluateQuantity()
    },
    min: function (val) {
      if (this.quantity < val) this.quantity = val
    },
    max: function (val) {
      if (this.quantity > val) this.quantity = val
      else this.quantity = this.min
    }
  },

  mounted () {
    // this.emitChange(true)
    this.emitChange(this.init);
    
  },

  methods: {
    reset () {
      this.quantity = this.init
    },

    emitChange (init = 0) {
      this.oldValue = this.quantity;
      /*if (init && init<this.min && init !== 0) {
        this.quantity = this.min;
      } else if (init && init>this.max && init !== 0) {
        this.quantity = this.max;
      }*/
      if (this.quantity<this.min) {
        this.quantity = this.min;
      } else if (this.quantity>this.max) {
        this.quantity = this.max;
      }
      this.$emit('onInputNumberChange', this.quantity, init)
      this.onchange(this.quantity);
    },

    increment () {
      this.quantity = this.quantity < this.max
        ? this.quantity + this.step
        : this.max
    },

    decrement () {
      this.quantity = this.quantity > this.min
        ? this.quantity - this.step
        : this.min
    },

    onBlur () {
      if (this.quantity.toString().length === 0) {
        this.quantity = this.oldValue
        return
      }

      if (this.quantity < this.min) {
        this.quantity = this.min
      }

      if (this.quantity > this.max) {
        this.quantity = this.max
      }
    },

    onClick (e, dir) {
      this.clicked = true
      if (dir === 'up') this.increment()
      if (dir === 'down') this.decrement()
      this.onMouseup()
    },

    evaluateQuantity () {
      if (this.isKeydown) return

      if (
        this.quantity.toString().length > 0 &&
        this.quantity !== this.oldValue
      ) {
        this.emitChange()
      }
    },

    onMouseup (e) {
      if (!this.mousedown) return

      this.clicked = false
      clearTimeout(this.timeout)
      clearInterval(this.interval)
    },

    onMousedown (e, dir) {
      if (!this.mousedown) return

      this.clicked = false
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        clearInterval(this.interval)

        this.interval = setInterval(() => {
          if (this.clicked) {
            this.clicked = false
            clearInterval(this.interval)
            clearTimeout(this.timeout)
            return
          }

          if (dir === 'up') this.increment()
          if (dir === 'down') this.decrement()
        }, 30)
      }, 400)
    },

    onKeyup (e) {
      this.isKeydown = false
      this.evaluateQuantity()
    },

    onKeydown (e) {
      this.isKeydown = true

      if (!this.keydown) {
        e.preventDefault()
        return
      }

      // Up key: Increase the value
      if (e.keyCode === 38) {
        this.increment()
        e.preventDefault()
        return
      }

      // Down key: Decrease the value
      if (e.keyCode === 40) {
        this.decrement()
        e.preventDefault()
        return
      }

      // Allow dot key for decimals:
      if (e.keyCode === 110 || e.keyCode === 190) {
        if (this.integer) {
          e.preventDefault()
          return
        }
      }

      // Allow these keys only:
      if (
        // backspace, delete, tab, escape, enter, dot
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) >= 0 ||
        // Ctrl/cmd+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Ctrl/cmd+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Ctrl/cmd+R
        (e.keyCode === 82 && (e.ctrlKey || e.metaKey)) ||
        // Ctrl/cmd+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        return
      }

      if (
        (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style>
.v-input-number {
  position: relative;
  display: block;
  overflow: hidden;
  width: 175px;
}
.v-input-number * {
  box-sizing: border-box;
}
.v-input-number-arrows {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
}
.v-input-number-arrows > a {
  position: absolute;
  top: 0;
  right: 2px;
  background-color: #ccc;
  border: 0;
  width: 28px;
  height: 15px;
  line-height: 1;
  text-align: center;
  cursor: pointer;
}
.v-input-number-arrows > a.v-input-number-up {
  top: 2px;
  -webkit-user-select: none;
}
.v-input-number-arrows > a.v-input-number-down {
  top: 18px;
  -webkit-user-select: none;
}
.v-input-number-arrows > a > i {
  display: inline-block;
  height: 0;
  text-indent: -999em;
  content: "";
  overflow: hidden;
  position: relative;
  vertical-align: baseline;
  width: 0;
  border: 4px solid transparent;
}
.v-input-number-arrows > a.v-input-number-up > i {
  top: -3px;
  border: 4px solid transparent;
  border-bottom-color: #333;
}
.v-input-number-arrows > a.v-input-number-down > i {
  border-top-color: #333;
}
.v-input-number-input {
  display: block;
  padding: 5px 25px 5px 0;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #bbb;
  text-align: center;
  width: 100%;
  height: 35px;
  text-align: center;
}
</style>
