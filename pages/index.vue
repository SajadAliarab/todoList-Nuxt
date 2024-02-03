<template>
    <h1 class="text-3xl font-bold">Main Menu</h1>
    <div>
        <form @submit.prevent="createItem">
            <label for="title">Title</label>
            <input class="border-2" type="text" v-model="title">
            <label for="title">Description</label>
            <input class="border-2" type="text" v-model="description">
            <button  type="submit" class="border-2 rounded-full bg-lime-500">Submit</button>
        </form>
        <table class="border-separate border border-slate-500 w-full">
            <thead>
                <tr class="bg-slate-400">
                    <th class="border border-slate-600 ">ID </th>
                    <th class="border border-slate-600 ">Title</th>
                    <th class="border border-slate-600 ">Description </th>
                    <th class="border border-slate-600 ">Status</th>
                    <th class="border border-slate-600"> Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center" v-for="item in todos" :key="item.id">
                    <td class="border border-slate-700 " v-text="item.id"></td>
                    <td class="border border-slate-700" v-text="item.title"></td>
                    <td class="border border-slate-700" v-text="item.description"></td>
                    <td class="border border-slate-700" v-text="item.status" @click="toggleTodo(item.id)"></td>
                    <td class="border border-slate-700">
                        <button class="rounded-full bg-red-600" @click="deleteTodo(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import { CreateTodo } from '~/classes/CreateTodoCommand';

const title = ref('');
const description = ref('');
const { todos,addTodo,deleteTodo,toggleTodo } = useTodo();
function createItem(){
addTodo(new CreateTodo(title.value,description.value))
title.value="";
description.value="";
}

</script>