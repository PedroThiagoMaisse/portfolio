import { writable } from 'svelte/store';

export const dialogObject = writable({openDialog: '', options: {}});