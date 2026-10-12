import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','public');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const refs=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]).filter(u=>!u.startsWith('http')&&!u.startsWith('#'));
for(const ref of refs){if(!fs.existsSync(path.join(root,ref.replace(/^\//,''))))throw new Error('Missing asset: '+ref)}
JSON.parse(fs.readFileSync(path.join(root,'site.webmanifest'),'utf8'));
execFileSync(process.execPath,['--check',path.join(root,'app.js')],{stdio:'inherit'});
console.log('Website checks passed: '+refs.length+' local asset references, valid JavaScript and web manifest.');
