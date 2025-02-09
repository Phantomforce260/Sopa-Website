
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MOZ_PLUGIN_PATH: string;
	export const JAVA_HOME: string;
	export const MANPATH: string;
	export const VIMRUNTIME: string;
	export const PWD: string;
	export const XDG_VTNR: string;
	export const WINDOWID: string;
	export const MAIL: string;
	export const WINDOWPATH: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const _: string;
	export const LC_COLLATE: string;
	export const LOGNAME: string;
	export const KEYTIMEOUT: string;
	export const ALACRITTY_LOG: string;
	export const LS_COLORS: string;
	export const HOME: string;
	export const BUN_INSTALL: string;
	export const DISPLAY: string;
	export const USER: string;
	export const VIM: string;
	export const LANG: string;
	export const MOTD_SHOWN: string;
	export const TERM: string;
	export const OLDPWD: string;
	export const PATH: string;
	export const XAUTHORITY: string;
	export const MASON: string;
	export const COLORTERM: string;
	export const EDITOR: string;
	export const MYVIMRC: string;
	export const ALACRITTY_SOCKET: string;
	export const NVIM_LOG_FILE: string;
	export const XDG_RUNTIME_DIR: string;
	export const DOTNET_ROOT: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const XDG_SEAT: string;
	export const NVIM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MOZ_PLUGIN_PATH: string;
		JAVA_HOME: string;
		MANPATH: string;
		VIMRUNTIME: string;
		PWD: string;
		XDG_VTNR: string;
		WINDOWID: string;
		MAIL: string;
		WINDOWPATH: string;
		ALACRITTY_WINDOW_ID: string;
		_: string;
		LC_COLLATE: string;
		LOGNAME: string;
		KEYTIMEOUT: string;
		ALACRITTY_LOG: string;
		LS_COLORS: string;
		HOME: string;
		BUN_INSTALL: string;
		DISPLAY: string;
		USER: string;
		VIM: string;
		LANG: string;
		MOTD_SHOWN: string;
		TERM: string;
		OLDPWD: string;
		PATH: string;
		XAUTHORITY: string;
		MASON: string;
		COLORTERM: string;
		EDITOR: string;
		MYVIMRC: string;
		ALACRITTY_SOCKET: string;
		NVIM_LOG_FILE: string;
		XDG_RUNTIME_DIR: string;
		DOTNET_ROOT: string;
		SHELL: string;
		SHLVL: string;
		XDG_SEAT: string;
		NVIM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
