const o=(e,t)=>{const n=new URL(window.location.href);n.searchParams.set(e,t),window.history.pushState(null,null,n)},s=e=>{const t=new URL(window.location.href);t.searchParams.delete(e),window.history.pushState(null,null,t)};export{s as a,o as u};