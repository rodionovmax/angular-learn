export interface IProduct {
	id: number;
	name: string;
	category: string;
	img: string;
	description: string;
}

export const listOfProducts: IProduct[] = [
	{
		id: 1,
		name: 'Watermelon',
		category: 'Grocery',
		img: 'https://i5.walmartimages.com/seo/Fresh-Personal-Watermelon-Each_14487aaf-d86a-4b46-acaf-7621b90286bb.fb737768267fcdc95c33f355b730ad15.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
		description:
			"Juicy, refreshing, and sweet. Vibrant green exterior, ruby-red flesh. Perfect summer treat. Nutrient-rich, hydrating. Nature's thirst-quencher.",
	},
	{
		id: 2,
		name: 'Orange',
		category: 'Grocery',
		img: 'https://media.istockphoto.com/id/1227301369/photo/whole-cross-section-and-quarter-of-fresh-organic-navel-orange-with-leaves-in-perfect-shape-on.webp?b=1&s=170667a&w=0&k=20&c=uimgulwrNTf72rAbIOdLvObEgsJSZoCqWm9Qxojjl7Q=',
		description:
			'Zesty, tangy, and sweet. Bright sun-kissed skin. Vitamin C powerhouse. Freshly picked. Juicy burst with every bite. Energizing citrus delight.',
	},
	{
		id: 3,
		name: 'Banana',
		category: 'Grocery',
		img: 'https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.webp?b=1&s=170667a&w=0&k=20&c=uiSdjIQkTr7S4gEdW_oB_5zfFYhpfe0LP-CryQl49w4=',
		description:
			"Creamy, sweet, and convenient. Vibrant yellow peel. Energy-boosting potassium. Perfect on-the-go snack. Nature's pre-wrapped treat. Delightfully tropical.",
	},
];
