# vue-image-spinner
vue-image-spinner is simple javascript package made with vue js that allows you to use your own logo or image for spinner or loading indicator

## Project setup
```
yarn add vue-image-spinner or npm i vue-image-spinner
```
## usage
### script
````
import {RotatingSpinner} from 'vue-image-spinner'
export default{
    components:{
        RotatingSpinner
    }
}
````

### template
````
<RotatingSpinner src="https://s.gravatar.com/avatar/dad090f47a794da4dd624eee6d301aba?size=100&default=retro"/>
<RotatingSpinner :src="require(`@/assets/logo.png`)"/>
````

## Spinner type

- RotatingSpinner
- ScaleUpSpinner
- LinearRotatingSpinner
- BreathingSpinner
- JumpingSpinner

## props

props name  | type | default | description
------------ | ------------ | ------------ | ------------
src  | string (required) | none | your image location, you can use image url, or use js require
top  | string | 50% | margin top, you can use % or px
overlay  | string | 'rgba(255, 255, 255, 0.0)'(no overlay) | overlay color, use rgba for transparent overlay
width  | string | 50px | your image size