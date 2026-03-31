// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('katex').KatexOptions} */
const katexOptions = {
	trust: true,
	strict: false,
	throwOnError: false,
	macros: {
		'\\R': '\\mathbb{R}',
		'\\C': '\\mathbb{C}',
		'\\Z': '\\mathbb{Z}',
		'\\Q': '\\mathbb{Q}',
		'\\N': '\\mathbb{N}',
		'\\F': '\\mathbb{F}',
		'\\CP': '\\mathbb{CP}',
		'\\RP': '\\mathbb{RP}',
		'\\id': '\\mathrm{id}',
		'\\Id': '\\mathrm{Id}',
		'\\Hom': '\\operatorname{Hom}',
		'\\Ext': '\\operatorname{Ext}',
		'\\Tor': '\\operatorname{Tor}',
		'\\Spec': '\\operatorname{Spec}',
		'\\coker': '\\operatorname{coker}',
		'\\im': '\\operatorname{im}',
		'\\rank': '\\operatorname{rank}',
		'\\Sq': '\\operatorname{Sq}',
		'\\End': '\\operatorname{End}',
		'\\Aut': '\\operatorname{Aut}',
		'\\Sym': '\\operatorname{Sym}',
		'\\holim': '\\operatorname{holim}',
		'\\hocolim': '\\operatorname{hocolim}',
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://homologicalalice.github.io',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [[rehypeKatex, katexOptions]],
	},
});
