import type { IService } from '$lib/interfaces/service.interface';
import assets from '$lib/assets/assets';

const services: IService[] = [
	{
		title: 'services.services.enclosureMesh.title',
		description: 'services.services.enclosureMesh.description',
		image: assets.SERVICE_ENCLOSURE_MESH,
	},
	{
		title: 'services.services.concertina.title',
		description: 'services.services.concertina.description',
		image: assets.SERVICE_CONCERTINA,
	},
	{
		title: 'services.services.electricFences.title',
		description: 'services.services.electricFences.description',
		image: assets.SERVICE_ELECTRIC_FENCES,
	},
	{
		title: 'services.services.treePruning.title',
		description: 'services.services.treePruning.description',
		image: assets.SERVICE_TREE_PRUNING,
	},
	{
		title: 'services.services.debrisRemoval.title',
		description: 'services.services.debrisRemoval.description',
		image: assets.SERVICE_DEBRIS_REMOVAL,
	},
	{
		title: 'services.services.reforestation.title',
		description: 'services.services.reforestation.description',
		image: assets.SERVICE_REFORASTATION,
	},
	{
		title: 'services.services.fertilizer.title',
		description: 'services.services.fertilizer.description',
		image: assets.SERVICE_FERTILIZER,
	},
] as const;

export default services;
