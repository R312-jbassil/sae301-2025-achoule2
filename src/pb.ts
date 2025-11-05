import PocketBase from 'pocketbase';
// Optionnel : types
// import type { TypedPocketBase } from './pocketbase-types';

// Si tu veux utiliser le typage, assure-toi d'avoir généré le fichier pocketbase-types.ts avec la CLI PocketBase, sinon laisse juste :
const pb = new PocketBase('http://127.0.0.1:8090');
// (Pas de double crochets [ ] autour de l'URL : juste la string URL)

export default pb;




// ...
var path='';
if(import.meta.env.MODE === 'development')
    path = 'http://localhost:8090'
else
    path = 'http://localhost:8090'
const pb = new PocketBase('http://127.0.0.1:8090');
export default pb;

