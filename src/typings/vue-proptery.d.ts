import { ELMessage } from 'element-plus';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$message: ELMessage;
	}
}

declare module 'vue-router' {
	interface RouteMeta {
		roles?: string[];
	}
}
