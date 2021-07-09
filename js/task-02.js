
const ingredients = [
		  'Картошка',
		  'Грибы',
		  'Чеснок',
		  'Помидоры',
		  'Зелень',
		  'Приправы',
		];

		const itemsArr = ingredients.map(item=>{
			const list = document.createElement('li');
			list.textContent = item;
			return list;
		});

		document.querySelector('#ingredients').append(...itemsArr);