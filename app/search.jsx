'use client';
import {useState} from 'react';
export default function Search(){const [count,setCount]=useState('not loaded');
return <button id="load-index" onClick={async()=>{const m=await import('./index-data');
setCount(String(m.default.length))}}>Index entries: {count}</button>}