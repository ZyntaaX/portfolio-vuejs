<template>
    <div>
        <h1>
            Welcome to me!
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nemo similique consequuntur officia, 
            nam harum itaque ex voluptatem cupiditate cum repudiandae, a cumque aperiam quas suscipit fuga dignissimos! 
            Fugit est ut itaque autem obcaecati impedit suscipit nobis? Esse placeat, commodi eaque suscipit blanditiis accusamus consequatur. 
            Qui tenetur obcaecati tempore dolore?
        </p>

        Version: {{ this.version }}
    </div>
</template>

<script>

import Package from '@/../package.json';

export default {
    data() {
        return {
            version: '',
            Package,
        }
    },
    methods: {
        getVersion() { 
            return  Package.version;// process.env.VUE_APP_PROJECT_VERSION; 
        }
    },
    created() {
        this.version = this.getVersion();
    },
}
</script>

<style>

</style>