<template>
    <h1 class="text-3xl font-bold">Main Menu</h1> 
     <div>
        <table class="border-separate border border-slate-500 w-full">
  <thead>
    <tr class="bg-slate-400">
      <th class="border border-slate-600 " >ID </th>
      <th class="border border-slate-600 " >Title</th>
      <th class="border border-slate-600 " >Description </th>
      <th class="border border-slate-600 " >Status</th>
      <th class="border border-slate-600"> Action</th>
    </tr>
  </thead>
  <tbody>
    <tr class="text-center" v-for="item in todos" :key="item.id">
      <td class="border border-slate-700 " v-text="item.id"></td>
      <td class="border border-slate-700" v-text="item.title"></td>
      <td class="border border-slate-700" v-text="item.description"></td>
      <td class="border border-slate-700" v-text="item.status"></td>
      <td class="border border-slate-700">
        <button class="rounded-full bg-red-600">Delete</button>
      </td>
    </tr>
    </tbody>
</table>
    </div>
</template>
<script setup lang="ts">
import { Todo,StatusTodo } from '~/classes/Todo';

let todos : Todo[] = [
    {id:1, title:'Eat Breakfast', description:'eat breakfast at 8',status:StatusTodo.PENDING}
]

</script>