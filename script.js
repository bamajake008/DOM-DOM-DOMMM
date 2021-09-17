window.addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let containerDiv = document.createElement('div');

    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.appendChild(containerDiv);



    let id = '0';
    btn.addEventListener('click', function () {
        console.log('here');
        let div = document.createElement('div');
        containerDiv.appendChild(div);
        div.style.backgroundColor = 'black';
        div.style.width = '150px';
        div.style.height = '150px';
        div.style.cssFloat = 'left';
        div.className = 'boxDivs';
        div.setAttribute('id', id);
        id++;


        div.addEventListener('mouseover', function () {
            console.log(this.id);
            let divText = document.createTextNode(this.id);
            div.appendChild(divText);


        })

        div.addEventListener('mouseout', function () {
            div.innerText = '';

        });

        div.addEventListener('click', function () {
            let randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
        })

        div.addEventListener('dblclick', function () {


            if (this.id % 2 === 0) {
                if (this.nextSibling) {
                    this.nextSibling.remove();
                } else {
                    alert('The next sibling does not exist');
                }
            } else {
                if (this.previousSibling) {
                    this.previousSibling.remove();
                } else {
                    alert('The next sibling does not exist');
                }

            }

        })


    });

    let color = ['yellow', 'purple', 'red', 'blue', 'green', 'pink', 'white', 'black'];

    function getRandomColor() {
        let randomColor = color[Math.floor(Math.random() * color.length)];
        return randomColor;
    }

    div.addEventListener('click', function () {
        let randNum = Math.floor(Math.random() * colors.length);
        div.style.backgroundColor = colors[randNum];
    })
    func
})









