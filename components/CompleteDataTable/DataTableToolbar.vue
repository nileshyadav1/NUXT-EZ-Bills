
import type { valueUpdater } from '~/lib/utils';

import type { valueUpdater } from '~/lib/utils';

import type { X } from 'lucide-vue-next';

import type { Table } from 'lucide-vue-next';

import type { Table } from 'lucide-vue-next';

import type { LogIn } from 'lucide-vue-next';


<script setup lang="ts">
import { type Table } from '@tanstack/vue-table'
import { computed } from 'vue'
import { type Task } from './schema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { priorities, statuses } from './taskData'
import DataTableFacetedFilter from './DataTableFacetedFilter.vue'
import DataTableViewOptions from './DataTableViewOptions.vue'
import { XIcon} from 'lucide-vue-next'


interface DataTableToolbarProps {
  table: Table<Task>
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)

const selectedRows = computed(() => {
  return props.table.getFilteredSelectedRowModel().rows.map(x=>x.original)
});

const selectedRowsLength = computed(()=>selectedRows.value.length)

const deleteSelectedRows = ()=>{
  console.log("Delete the following Selected Rows")
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter tasks..."
        :model-value="(table.getColumn('title')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('title')?.setFilterValue($event.target.value)"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('status')"
        :column="table.getColumn('status')"
        title="Status"
        :options="statuses"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('priority')"
        :column="table.getColumn('priority')"
        title="Priority"
        :options="priorities"
      />

      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <XIcon class="ml-2 h-4 w-4" />
      </Button>
    </div>

    <div class="flex items-center ">
      <Button v-if="selectedRowsLength > 0"  variant="destructive"  size="sm"
        class=" mr-3 hidden h-8 lg:flex" @click="deleteSelectedRows">Delete</Button>
      <DataTableViewOptions :table="table" />
    </div>
    
  </div>
</template>