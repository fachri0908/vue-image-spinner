import BreathingSpinner from './BreathingSpinner.vue'
import RotatingSpinner from './RotatingSpinner.vue'
import JumpingSpinner from './JumpingSpinner.vue'
import LinearRotatingSpinner from './LinearRotatingSpinner.vue'
import ScaleUpSpinner from './ScaleUpSpinner.vue'


export default {
    install (Vue) {
        Vue.component('BreathingSpinner', BreathingSpinner)
        Vue.component('RotatingSpinner', RotatingSpinner)
        Vue.component('JumpingSpinner', JumpingSpinner)
        Vue.component('LinearRotatingSpinner', LinearRotatingSpinner)
        Vue.component('ScaleUpSpinner', ScaleUpSpinner)
    }
}

export { BreathingSpinner, RotatingSpinner, JumpingSpinner, LinearRotatingSpinner, ScaleUpSpinner }