    /* this allows the color to actually change when switched from dark to light*/
    var checkbox = document.querySelector('input[name=mode]');

    checkbox.addEventListener('change', function() {
    if(this.checked) {
    trans()
    document.documentElement.setAttribute('data-theme', 'dartheme') 
    } else {
    trans()
    document.documentElement.setAttribute('data-theme', 'lighttheme')
    }
    })

    let trans = () => {
    /* this is the transition time from when it switches to appears*/
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {

    document.documentElement.classList.remove('transition');
    }, 1000)
    }