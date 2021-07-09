const ref = {
    		counter: document.querySelector('#value'),
    		decBtn: document.querySelector('button[data-action="decrement"]'),
    		incBtn: document.querySelector('button[data-action="increment"]')
    	}

	    function decrement(currentValue) {return  currentValue-=1;}
	    function increment(currentValue) {return  currentValue+=1;}

    	ref.decBtn.addEventListener('click', () => ref.counter.textContent = decrement(Number(ref.counter.textContent)));
    	ref.incBtn.addEventListener('click', () => ref.counter.textContent = increment(Number(ref.counter.textContent)));


