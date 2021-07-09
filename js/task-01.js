

    const categories = document.querySelector('#categories');
    const items = categories.querySelectorAll('.item');
    console.log(`В списке ${items.length} категории.`);

	items.forEach(item=>{
		const title = item.querySelector('h2');
		const list = item.querySelectorAll('ul li');
		console.log(`Категория: ${title.textContent}`);
		console.log(`Количество элементов: ${list.length}`);
	})