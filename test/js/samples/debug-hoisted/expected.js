/* generated by Svelte vX.Y.Z */
import {
	SvelteComponentDev,
	init,
	noop,
	safe_not_equal
} from "svelte/internal";

const file = undefined;

function create_fragment(ctx) {
	return {
		c: function create() {
			{
				const { obj } = ctx;
				console.log({ obj, kobzol });
				debugger;
			}
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: noop,

		p: function update(changed, ctx) {
			if (changed.obj || changed.kobzol) {
				const { obj } = ctx;
				console.log({ obj, kobzol });
				debugger;
			}
		},

		i: noop,
		o: noop,
		d: noop
	};
}

let kobzol = 5;

function instance($$self) {
	let obj = { x: 5 };

	return { obj };
}

class Component extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Component;