import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js';

const site = 'https://vue3-course-api.hexschool.io/v2';
const api_path = 'samwnkyat';
const app = createApp({
    data() {
        return {
            products: [],
        }
    },
    methods: {
        checkLogin() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            axios.defaults.headers.common['Authorization'] = token;


            const url = `${site}/api/user/check`;
            axios.post(url)
                .then(res => {
                    console.log(res);
                    this.getProducts();
                });
        },
        getProducts() {
            const url = `${site}/api/${api_path}/admin/products/all`;
            axios.get(url)
                .then(res => {
                    console.log(res);
                    this.products = res.data.products;
                });
        }
    },
    mounted() {
        this.checkLogin();

        //axios.post(url)
    }
});

app.mount('#app');