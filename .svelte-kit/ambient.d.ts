
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
	export const QT_SCALE_FACTOR: string;
	export const USER: string;
	export const HYPRLAND_CMD: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const HOME: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const DESKTOP_SESSION: string;
	export const GTK_MODULES: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const WAYLAND_DISPLAY: string;
	export const LOGNAME: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const XDG_SESSION_CLASS: string;
	export const USERNAME: string;
	export const XDG_SESSION_ID: string;
	export const CLUTTER_BACKEND: string;
	export const PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_SESSION_DESKTOP: string;
	export const SSH_AUTH_SOCK: string;
	export const SHELL: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_VTNR: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const PWD: string;
	export const QT_QPA_PLATFORM: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_BACKEND: string;
	export const KITTY_WINDOW_ID: string;
	export const TERM: string;
	export const COLORTERM: string;
	export const KITTY_PID: string;
	export const KITTY_PUBLIC_KEY: string;
	export const TERMINFO: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const SHLVL: string;
	export const OLDPWD: string;
	export const ZSH: string;
	export const PAGER: string;
	export const LESS: string;
	export const LSCOLORS: string;
	export const LS_COLORS: string;
	export const ENVMAN_LOAD: string;
	export const BUN_INSTALL: string;
	export const _: string;
	export const VIMRUNTIME: string;
	export const NVIM_LOG_FILE: string;
	export const VIM: string;
	export const MYVIMRC: string;
	export const MASON: string;
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
		QT_SCALE_FACTOR: string;
		USER: string;
		HYPRLAND_CMD: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		HOME: string;
		MOZ_ENABLE_WAYLAND: string;
		DESKTOP_SESSION: string;
		GTK_MODULES: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		QT_QPA_PLATFORMTHEME: string;
		WAYLAND_DISPLAY: string;
		LOGNAME: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		XDG_SESSION_CLASS: string;
		USERNAME: string;
		XDG_SESSION_ID: string;
		CLUTTER_BACKEND: string;
		PATH: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_SESSION_DESKTOP: string;
		SSH_AUTH_SOCK: string;
		SHELL: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_VTNR: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		PWD: string;
		QT_QPA_PLATFORM: string;
		XDG_DATA_DIRS: string;
		XDG_BACKEND: string;
		KITTY_WINDOW_ID: string;
		TERM: string;
		COLORTERM: string;
		KITTY_PID: string;
		KITTY_PUBLIC_KEY: string;
		TERMINFO: string;
		KITTY_INSTALLATION_DIR: string;
		SHLVL: string;
		OLDPWD: string;
		ZSH: string;
		PAGER: string;
		LESS: string;
		LSCOLORS: string;
		LS_COLORS: string;
		ENVMAN_LOAD: string;
		BUN_INSTALL: string;
		_: string;
		VIMRUNTIME: string;
		NVIM_LOG_FILE: string;
		VIM: string;
		MYVIMRC: string;
		MASON: string;
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
