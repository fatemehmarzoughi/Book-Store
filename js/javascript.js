
// function myFunction() {
//     const selector = document.querySelector('.searchText')
//     selector.classList.add('magictime', 'slideRight')
// }
// setTimeout(myFunction, 5000);

// const bookOnClicked = document.querySelector('.bookProduct');

goToBookPage = ($product) => {
    
    const selector = document.querySelector('.scrollBooks')
    const back = document.querySelector('.back')
    const searchInput = document.querySelector('.searchText')

    // selector.classList.add('magictime', 'slideRight')
    // back.classList.add('magictime', 'slideLeft')
    selector.style.transform = 'translateX(500px)'
    back.style.transform = 'translateX(-500px)'
    searchInput.style.width = '0px';

    // $product.classList.add('magictime', 'slideLeft');
    // $product.style.position = 'fixed';
    // $product.style.zIndex = '1';
    // $product.style.left = '0px;';

    // const singleBack = document.querySelector('.singleBack');
    // singleBack.style.right = '10%';
    
    setTimeout(() => changePage($product), 400);

}

changePage = function($product)
{
    $productCode = $product.querySelector('.productCode').innerHTML;
    // $product.querySelector('.productCode').innerHtml = $productCode;
    
    console.log($productCode);
    let bookPage;

    switch($productCode)
    {
        case '1' : 
        bookPage = document.querySelector('#firstBookPage');
        bookPage.style.transform = 'translateX(0%)'
        break;
        case '2' : 
        bookPage = document.querySelector('#secondBookPage');
        bookPage.style.transform = 'translateX(0%)'
        break;
        case '3' : 
        bookPage = document.querySelector('#thirdBookPage');
        bookPage.style.transform = 'translateX(0%)'
        break;
        case '4' : 
        bookPage = document.querySelector('#fourthBookPage');
        bookPage.style.transform = 'translateX(0%)'
        break;
    }
    
}

goBackToHome = () => {
    const selector = document.querySelector('.scrollBooks')
    const back = document.querySelector('.back')
    const searchInput = document.querySelector('.searchText')

    // selector.classList.add('magictime', 'slideRight')
    // back.classList.add('magictime', 'slideLeft')
    selector.style.transform = 'translateX(0px)'
    back.style.transform = 'translateX(0px)'
    searchInput.style.width = '190px';

    // $product.classList.add('magictime', 'slideLeft');
    // $product.style.position = 'fixed';
    // $product.style.zIndex = '1';
    // $product.style.left = '0px;';

    // const singleBack = document.querySelector('.singleBack');
    // singleBack.style.right = '0px';
    
    setTimeout(() => changeToHome(), 400);
}

changeToHome = () => {

    document.querySelector('#firstBookPage').style.transform = 'translateX(-100%)'

    document.querySelector('#secondBookPage').style.transform = 'translateX(-100%)'

    document.querySelector('#thirdBookPage').style.transform = 'translateX(-100%)'

    document.querySelector('#fourthBookPage').style.transform = 'translateX(-100%)'
}



smile = () => {
    iziToast.question({
        timeout: 20000,
        close: false,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'Hey',
        message: 'Please Rate Us',
        position: 'center',
        // layout :1,
        pauseOnHover : true,
        buttons: [
            ['<b style="margin-left : 10px;font-size : 23px;color : red;"><span class="icon-angry"></span></b>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                alert('bad')
     
            }],

            ['<b style="margin-left : 10px;font-size : 23px;color : darkyellow"><span class="icon-neutral"></span></b>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                alert('so so')
     
            }],
            ['<b style="margin-left : 10px;font-size : 23px;color : green"><span class="icon-smile"></span></b>', function (instance, toast) {
     
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                alert('great')
     
            }, true],
        ],
        onClosing: function(instance, toast, closedBy){
            console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function(instance, toast, closedBy){
            console.info('Closed | closedBy: ' + closedBy);
        }
    });
}

save = () => {
    iziToast.success({
        title: 'Saved',
        message: 'The Book Saved In Your Collections!',
    });
}

addToCard = () => {
    iziToast.success({
        title: 'Added',
        message: 'The Book Added To Your Card Successfully',
    });
}

download = () => {
    iziToast.info({
        title: 'Download',
        message: 'Started Downloading',
    });
}

openSearchBar = ($element) => {
    $element.querySelector('input').style.width = '170px';
    document.getElementsByClassName('menuTitle')[0].style.width = '30px';
}
// moreInfo = ($onClickedBook) => {
//     $onClickedBook.
// }
