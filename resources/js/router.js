import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';

const router = new VueRouter({

    mode: "history",

    routes :[
        {
            path: '/', 
            name: 'home',
            component: Home
        },
        {
            path: '/chi-siamo', 
            name: 'about',
            component: About
        },
        {
            path: '/contatti', 
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/posts', 
            name: 'posts',
            component: Posts
        },
        {
            path: '/posts/:slug', 
            name: 'single-post',
            component: SinglePost
        }
    ]
})

export default router