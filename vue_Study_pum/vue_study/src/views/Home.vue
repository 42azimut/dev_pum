<template>
    <div>
        <h1>Welcome to Home {{title}} -  {{title2}}!</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>
        <select name="" class="form-control" v-model="region" @change="changeRegion">
            <option :key="idx" :value="data.v" v-for="(data, idx) in options">{{data.v}} - {{data.t}}</option>
        </select>

        
        <table class="table table-bordered" v-if="tableShow">
            <tr :key="idx" v-for="(data, idx) in options">
                <td>{{data.v}}</td>
                <td>{{data.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default { 
    data() {
        return {
            title: "Azimut Start-UP",
            title2: "Seoul",
            input1: "kgc",
            options: [
                {v:"S", t:"Seoul"},
                {v:"L", t:"LA"},
                {v:"J", t:"Jejoo"}
            ],
            region: "J",
            tableShow: false,
        };
    },
    watch: {
        input1() {
            console.log(this.input1);
        }
    },
    methods: {
        getData() {
            alert(this.input1);
            },
        setData() {
            this.input1 = "12345"
            },
        changeRegion() {
            alert(this.region);
        }
        },
    beforeCreate() {
        console.log("beforeCreate")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    mounted() {
        console.log("mounted")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeDestroy() {
        console.log("beforeDestroy")
    },
    destroyed() {
        console.log("destroyed")
    }

};
</script>