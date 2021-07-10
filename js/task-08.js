

        const boxes = document.querySelector('#boxes');
        const inputValue = document.querySelector('input[type="number"]');
        const createBtn = document.querySelector('button[data-action="render"]');
        const destroyElem = document.querySelector('button[data-action="destroy"]');        
        

function createBoxes(amount) {
            let size = 0;   

            for (let i = 0; i < amount; i += 1) {
                const r = Math.round(Math.random() * (255 - 1) + 1);
                const g = Math.round(Math.random() * (255 - 1) + 1);
                const b = Math.round(Math.random() * (255 - 1) + 1);

                let lastChild = document.querySelector('#boxes div:last-child');
                
                if (lastChild) {
                    let lastChildWidth = Number(lastChild.style.width.slice(0, lastChild.style.width.length - 2));
                    size = lastChildWidth + 10;
                }
                else size = 30;
                 
                boxes.insertAdjacentHTML('beforeend', `<div style="background-color: rgb(${r}, ${g}, ${b}); height: ${size}px; width: ${size}px;"></div>`);
            }
        }
        
        function destroyBoxes() {
            document.querySelectorAll('#boxes div').forEach(element=> boxes.removeChild(element));
        }


        createBtn.addEventListener('click', () => createBoxes(Number(inputValue.value)));
        destroyElem.addEventListener('click', () =>  destroyBoxes());


       

