import { Owner } from '@glimmer/di';

declare module '@glimmer/component' {
	export default class Component<T = object> {
		args: Readonly<T>;

		isDestroying: boolean;
		isDestroyed: boolean;

		constructor(owner: Owner, args: T);

		/**
		 * Called before the component has been removed from the DOM.
		 */
		willDestroy(): void;
	}
}
