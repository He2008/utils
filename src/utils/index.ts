import array from './array'
import cookie from './cookie'
(<any>window).utils ;

const utils = {
    ...array,
    ...cookie
}

window.utils = utils;
export default utils