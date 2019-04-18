import Vue from 'vue/dist/vue.js'
import AOS from 'aos/dist/aos.js'
import 'aos/dist/aos.css'

AOS.init({
    disable: function () {
        return window.innerWidth < 992;
    }
});

//common
import './common/styles/main.less'

//bem-components
import './bem-components/section/section.less'
import './bem-components/section-question/section-question.less'
import './bem-components/section-question/section-question'
import './bem-components/section-features/section-features.less'
import './bem-components/section-text/section-text.less'
import './bem-components/section-advantages/section-advantages.less'
import './bem-components/section-form/section-form.less'
import './bem-components/button-elem/button-elem.less'

//vue components
import ApplicationForm from './vue-components/ApplicationForm.vue'

new Vue({
    el: '#app',

    components: {
        ApplicationForm
    }
});