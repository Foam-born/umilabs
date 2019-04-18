<template>
    <form v-on:submit="submitForm" class="application-form">
        <h3 class="application-form__h3" data-aos="fade-down">{{title}}</h3>

        <ul class="application-form__input-list">
            <li class="application-form__input-item">
                <div class="application-form__input-number" data-aos="fade-down" data-aos-delay="200">1</div>

                <div class="application-form__input-block" data-aos="fade-left" data-aos-delay="200">
                    <label for="username" class="application-form__label">Фамилия и имя</label>

                    <input required autocomplete="off" v-model="userName" placeholder="Сидоров Александр" type="text" id="username" class="application-form__input">
                </div>
            </li>

            <li class="application-form__input-item">
                <div class="application-form__input-number" data-aos="fade-down" data-aos-delay="200">2</div>

                <div class="application-form__input-block" data-aos="fade-left" data-aos-delay="200">
                    <label for="email" class="application-form__label">Электронная почта</label>

                    <input required autocomplete="off" v-model="email" placeholder="Sidorov@yandex.ru" id="email" type="email" class="application-form__input">
                </div>
            </li>

            <li class="application-form__input-item">
                <div class="application-form__input-number" data-aos="fade-down" data-aos-delay="200">3</div>

                <div class="application-form__input-block" data-aos="fade-left" data-aos-delay="200">
                    <label for="phone" class="application-form__label">Телефон</label>

                    <masked-input type="tel" required autocomplete="off" mask="\+\7 (111) 111-11-11" placeholder="+7(999)999-99-99" @input="rawVal = arguments[1]" id="phone" class="application-form__input"/>
                </div>
            </li>

            <li class="application-form__input-item" data-aos="fade-down" data-aos-delay="200">
                <div class="application-form__input-number">4</div>

                <div class="application-form__input-block" data-aos="fade-up" data-aos-delay="200">
                    <label for="answer" class="application-form__label">Какой деятельностью, не связанной с текущими проектами, вы бы хотели заниматься в рабочее время?</label>

                    <textarea v-model="answer" id="answer" placeholder="Свой проект по созданию универсальной инфраструктуры строительства" cols="30" rows="2" class="application-form__textarea"></textarea>
                </div>
            </li>
        </ul>

        <div data-aos="fade-up">
            <button class="application-form__send-button">{{sendButtonText}}</button>
        </div>
    </form>
</template>

<script>
    import axios from 'axios';
    import MaskedInput from 'vue-masked-input';

    export default {
        name: 'ApplicationForm',

        components: {
            MaskedInput
        },

        data () {
            return {
                title: 'Теперь расскажите о себе',
                userName: '',
                email: '',
                phone: '',
                answer: '',
                sendButtonText: 'Отправить'
            }
        },

        methods: {
            submitForm: function (event) {
                event.preventDefault();

                axios.post('https://jsonplaceholder.typicode.com/posts',
                    {
                        userName: this.userName,
                        email: this.email,
                        phone: this.phone,
                        answer: this.answer
                    })
                    .then(() => {
                        this.sendButtonText = 'Oтправлено!';

                        this.userName = '';
                        this.email = '';
                        this.phone = '';
                        this.answer = '';

                        setTimeout(() => {
                            this.sendButtonText = 'Отправить';
                        }, 3000);
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }
    }
</script>

<style lang="less">
    @import "../common/styles/global-variables.less";

    .application-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        @media(min-width: @medium){
            align-items: flex-end;
        }

        &__h3 {
            margin-bottom: 60px;
            font-family: @font-family-din-pro;
            font-size: 30px;
            color: @white;
            letter-spacing: -0.02em;
            text-align: center;
            @media(min-width: @medium){
                font-size: 40px;
            }
        }

        &__input-list {
            display: flex;
            flex-direction: column;
        }

        &__input-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            &:not(:last-child){
                margin-bottom: 48px;
            }
            @media(min-width: @medium){
                flex-direction: row;
                align-items: flex-start;
            }
        }

        &__input-number {
            margin-bottom: 30px;
            color: @tango;
            width: 64px;
            height: 64px;
            line-height: 64px;
            border-radius: 50%;
            border: 1px solid @tango;
            font-size: 20px;
            font-weight: 500;
            font-family: @font-family-roboto;
            text-align: center;
            @media(min-width: @medium){
                margin-right: 28px;
                margin-bottom: 0;
            }
        }

        &__input-block {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media(min-width: @medium){
                width: 572px;
                align-items: flex-start;
            }
        }

        &__label {
            margin-bottom: 24px;
            font-size: 16px;
            line-height: 25px;
            font-family: @font-family-din-pro;
        }

        &__input {
            padding: 12px;
            width: 100%;
            background-color: transparent;
            color: @athens-gray;
            line-height: 35px;
            font-size: 24px;
            letter-spacing: -0.01em;
            font-family: @font-family-roboto;
            border: none;
            border-bottom: 2px solid fade(@athens-gray, 10);
            box-sizing: border-box;
            text-align: center;
            @media(min-width: @medium){
                text-align: left;
            }
            &:focus {
                outline: none;
            }
        }

        &__textarea {
            padding: 12px;
            width: 100%;
            background-color: transparent;
            color: @athens-gray;
            line-height: 35px;
            font-size: 24px;
            letter-spacing: -0.01em;
            font-family: @font-family-roboto;
            border: none;
            border-bottom: 2px solid fade(@athens-gray, 10);
            resize: none;
            box-sizing: border-box;
        }

        &__send-button {
            margin-top: 60px;
            padding: 20px 0 16px;
            width: 300px;
            outline: none;
            border: none;
            background-color: @white;
            border-radius: 111px;
            color: @tango;
            font-size: 14px;
            font-family: @font-family-gilroy;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            transition: .3s;
            &:hover {
                background-color: @tango;
                color: @cod-gray;
            }
            @media(min-width: @medium){
                width: 572px;
            }
        }
    }
</style>