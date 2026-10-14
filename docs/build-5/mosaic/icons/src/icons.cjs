const fs=require('fs');const PH='/workspace/ff-gap-review/tools/node_modules/@phosphor-icons/core/assets/regular/';
const C='#005A9C';
// Custom icons drawn on Phosphor's 256 grid, 16-unit round strokes (= Phosphor "regular").
const CUSTOM={
 'x-laugh':`<circle cx="128" cy="128" r="96"/><path d="M76 108q16-18 32 0M148 108q16-18 32 0"/><path d="M76 144h104a52 52 0 0 1-104 0z"/>`,
 'x-movie-camera':`<circle cx="80" cy="84" r="32"/><circle cx="152" cy="88" r="28"/><rect x="40" y="128" width="136" height="80" rx="10"/><path d="M176 156l48-24v72l-48-24"/>`,
 'x-big-top':`<path d="M128 56V24l28 10-28 10"/><path d="M28 124q60-8 100-68q40 60 100 68"/><path d="M128 56l-36 70M128 56l36 70"/><path d="M48 124v84h160v-84"/><path d="M104 208l24-52 24 52"/>`,
 'x-ferris-wheel':`<circle cx="128" cy="104" r="72"/><path d="M128 32v144M56 104h144M77 53l102 102M179 53L77 155"/><path d="M92 232l36-128 36 128M68 232h120"/>`,
 'x-lacrosse':`<path d="M56 224l84-112"/><path d="M140 112c-24-20-20-64 8-80s68-4 72 24-24 64-80 56z"/><path d="M152 48l36 52M180 36l20 48M136 72l64 0"/><circle cx="196" cy="196" r="20"/>`,
 'x-rugby':`<ellipse cx="128" cy="128" rx="104" ry="64" transform="rotate(-40 128 128)"/><path d="M84 172l88-88M108 132l16 16M124 116l16 16M140 100l16 16"/><path d="M56 128l72 72M128 56l72 72" opacity="0"/>`,
};
function svg(n,s,cls){if(CUSTOM[n])return `<svg class="${cls}" width="${s}" height="${s}" viewBox="0 0 256 256" fill="none" stroke="${C}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CUSTOM[n]}</svg>`;
 return fs.readFileSync(PH+n+'.svg','utf8').replace('<svg ',`<svg class="${cls}" width="${s}" height="${s}" aria-hidden="true" `).replace('fill="currentColor"',`fill="${C}"`);}
module.exports={svg,CUSTOM};
