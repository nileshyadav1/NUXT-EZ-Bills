import {h} from 'vue'

import { ArrowDownIcon, ArrowRightIcon,ArrowUpIcon ,CheckCircle,CircleIcon ,XCircleIcon, HelpCircleIcon, TimerIcon} from 'lucide-vue-next'

export const labels = [
    {
      value: 'bug',
      label: 'Bug',
    },
    {
      value: 'feature',
      label: 'Feature',
    },
    {
      value: 'documentation',
      label: 'Documentation',
    },
  ]



  export const statuses = [
    {
      value: 'backlog',
      label: 'Backlog',
      icon: h(HelpCircleIcon),
    },
    {
      value: 'todo',
      label: 'Todo',
      icon: h(CircleIcon),
    },
    {
      value: 'in progress',
      label: 'In Progress',
      icon: h(TimerIcon),
    },
    {
      value: 'done',
      label: 'Done',
      icon: h(CheckCircle),
    },
    {
      value: 'canceled',
      label: 'Canceled',
      icon: h(XCircleIcon),
    },
  ]

  export const priorities = [
    {
      label: 'Low',
      value: 'low',
      icon: h(ArrowDownIcon),
    },
    {
      label: 'Medium',
      value: 'medium',
      icon: h(ArrowRightIcon),
    },
    {
      label: 'High',
      value: 'high',
      icon: h(ArrowUpIcon),
    },
  ]