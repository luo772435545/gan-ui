/**
 * Created by gan on 2017/12/26.
 */
import Button from '../packages/button';
console.log('进入')
const install=function (Vue, config = {}) {
    if(install.installed) return;
    Vue.component(Button.name, Button);

};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    Button
}