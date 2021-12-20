// this.window.onload=function(){

    var cardOpenCount = 0;
    var onclickValues = '';
    /** Holds all images in an Array */
    // let all_images = [...image];
    // console.log(all_images);

    /** Loop through all images on click with called a function 'displayCard' */
    // for(let i=0; i < all_images.length; i++) {
    //     all_images[i].addEventListener("click",displayCard);
    // }


    /** 1-4 Functions */
    /** Function define */
    function displayCard1() {
        if(document.getElementById('t-1').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-1').classList.add('show-image'); /** Shows image when Selected */
            document.getElementById('card-1').classList.remove('card'); /** Removed Card class to stop hover when selected */
            document.getElementById('card-1').classList.add('card-clicked'); /** Clicked UI shows wen clicked. */
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-1').src);
        }
    } function hideCard1() {
        document.getElementById('t-1').classList.remove('show-image');
    }
// 2
    function displayCard2() {
        if(document.getElementById('t-2').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-2').classList.add('show-image');
            document.getElementById('card-2').classList.remove('card');
            document.getElementById('card-2').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-2').src);
        }
    }function hideCard2() {
        document.getElementById('t-2').classList.remove('show-image');
    }
// 3
    function displayCard3() {
        if(document.getElementById('t-3').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-3').classList.add('show-image');
            document.getElementById('card-3').classList.remove('card');
            document.getElementById('card-3').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-3').src);
        }
    }function hideCard3() {
        document.getElementById('t-3').classList.remove('show-image');
    }
// 4
    function displayCard4() {
        if(document.getElementById('t-4').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-4').classList.add('show-image');
            document.getElementById('card-4').classList.remove('card');
            document.getElementById('card-4').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-4').src);
        }
    }function hideCard4() {
        document.getElementById('t-4').classList.remove('show-image');
    }
    

    /** 5 - 8 Functions */
    function displayCard5() {
        if(document.getElementById('t-5').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-5').classList.add('show-image');
            document.getElementById('card-5').classList.remove('card');
            document.getElementById('card-5').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-5').src);
        }
    }function hideCard5() {
        document.getElementById('t-5').classList.remove('show-image');
    }
// 6
    function displayCard6() {
        if(document.getElementById('t-6').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-6').classList.add('show-image');
            document.getElementById('card-6').classList.remove('card');
            document.getElementById('card-6').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-6').src);
        }
    }function hideCard6() {
        document.getElementById('t-6').classList.remove('show-image');
    }
// 7
    function displayCard7() {
        if(document.getElementById('t-7').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-7').classList.add('show-image');
            document.getElementById('card-7').classList.remove('card');
            document.getElementById('card-7').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-7').src);
        }
    }function hideCard7() {
        document.getElementById('t-7').classList.remove('show-image');
    }
// 8
    function displayCard8() {
        if(document.getElementById('t-8').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-8').classList.add('show-image');
            document.getElementById('card-8').classList.remove('card');
            document.getElementById('card-8').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-8').src);
        }
    }function hideCard8() {
        document.getElementById('t-8').classList.remove('show-image');
    }


    /** 9-12 Functions */
    function displayCard9() {
        if(document.getElementById('t-9').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-9').classList.add('show-image');
            document.getElementById('card-9').classList.remove('card');
            document.getElementById('card-9').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-9').src);
        }
    }function hideCard9() {
        document.getElementById('t-9').classList.remove('show-image');
    }

    function displayCard10() {
        if(document.getElementById('t-10').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-10').classList.add('show-image');
            document.getElementById('card-10').classList.remove('card');
            document.getElementById('card-10').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-10').src);
        }
    } function hideCard10() {
        document.getElementById('t-10').classList.remove('show-image');
    }
    function displayCard11() {
        if(document.getElementById('t-11').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-11').classList.add('show-image');
            document.getElementById('card-11').classList.remove('card');
            document.getElementById('card-11').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-11').src);
        }
    }function hideCard11() {
        document.getElementById('t-11').classList.remove('show-image');
    }
// 12
    function displayCard12() {
        if(document.getElementById('t-12').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-12').classList.add('show-image');
            document.getElementById('card-12').classList.remove('card');
            document.getElementById('card-12').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
             console.log(document.getElementById('t-12').src);
        }
    }function hideCard12() {
        document.getElementById('t-12').classList.remove('show-image');
    }


    /** 13-16 Functions */
    function displayCard13() {
        if(document.getElementById('t-13').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-13').classList.add('show-image');
            document.getElementById('card-13').classList.remove('card');
            document.getElementById('card-13').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
             console.log(document.getElementById('t-13').src);
        }
    }function hideCard13() {
        document.getElementById('t-13').classList.remove('show-image');
    }

    function displayCard14() {
        if(document.getElementById('t-14').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-14').classList.add('show-image');
            document.getElementById('card-14').classList.remove('card');
            document.getElementById('card-14').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
             console.log(document.getElementById('t-14').src);
        }
    }function hideCard14() {
        document.getElementById('t-14').classList.remove('show-image');
    }

    function displayCard15() {
        if(document.getElementById('t-15').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-15').classList.add('show-image');
            document.getElementById('card-15').classList.remove('card');
            document.getElementById('card-15').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-15').src);
        }
    }function hideCard15() {
        document.getElementById('t-15').classList.remove('show-image');
    }

    function displayCard16() {
        if(document.getElementById('t-16').classList.contains('show-image')){
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-16').classList.add('show-image');
            document.getElementById('card-16').classList.remove('card');
            document.getElementById('card-16').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-16').src);
        }
    }function hideCard16() {
        document.getElementById('t-16').classList.remove('show-image');
    }


      /** Measures that Show-image class doesn't limits 2 */
    function updateCountOfAdditionOfClasses() {
        let image = document.getElementsByClassName('toggle-image');
        // console.log(image);
        let td = document.getElementsByTagName('td');
        // console.log(td);
        this.cardOpenCount++;
        console.log(this.cardOpenCount);

        setTimeout(function(){
            if(this.cardOpenCount>1) {
                this.disableOnClick();
                this.removeShowImagesClass();
                this.addRemoveClickedUIClass();
                this.cardOpenCount=1; 
            }
        }, 1000);

       /* setTimeout(() => {
            this.enableOnClick();
        }, 7000); */
        return;
    }
    /** Prevent Cards from clicking */
    function disableOnClick() {
        let cards = document.getElementsByTagName('td');
        for(let i=0;i<cards.length;i++) {
            document.getElementById('card-'+(i+1)).classList.remove('enable-clicks');
            document.getElementById('card-'+(i+1)).classList.add('disable-clicks');
            document.getElementById('card-'+(i+1)).ondblclick = ''; /** Disabling */
        }
        console.log('disabled');
    }
    function enableOnClick() {
        let cards = document.getElementsByTagName('td'); /** WHY 'td' because it will all tags, no matter class removeS OR adds => TAG not removes*/
        for(let i=0;i<cards.length;i++) {
            document.getElementById('card-'+(i+1)).classList.remove('disable-clicks');
            document.getElementById('card-'+(i+1)).classList.add('enable-clicks');
        }
        console.log('enabled');
    }
    function resetcards() {
        let cards = document.getElementsByTagName('td');
        for(let i=0;i<cards.length;i++) {
            if(document.getElementsByClassName('card')) {
                document.getElementById('card-'+(i+1)).classList.remove('disable-clicks');
                document.getElementById('card-'+(i+1)).classList.remove('enable-clicks');
            }else{
                document.getElementById('card-'+(i+1)).classList.add('card');
            }
        }
    }
    function removeShowImagesClass() {       
        /** 
         * 'REMOVED' for Time being BUT where Ever using, reason is same
         * 
         * WHY '1' because It doesn't removes classes from all elements AND 
         * still remains 1, So, with this 1 it make correct count
         * */
        var imageShowsElements = document.getElementsByClassName('show-image');
        for(let i=0;i<imageShowsElements.length;i++){
            imageShowsElements[i].classList.remove('show-image');
        }
        return;
    }
    function addRemoveClickedUIClass() {
        /** 
         * 'REMOVED' for Time being BUT where Ever using, reason is same
         * 
         * WHY '1' because It doesn't removes classes from all elements AND 
         * still remains 1, So, with this 1 it make correct count
         * */
        var cardClickedElements = document.getElementsByClassName('card-clicked');
        for(let i=0;i<cardClickedElements.length;i++){
            cardClickedElements[i].classList.add('card'); /** Added a card class too */
            cardClickedElements[i].classList.remove('card-clicked');
        }
        return;
    }

// };

var date = new Date();
function clickedFunction() {
    document.getElementById('demo').classList.remove('stopped-indicate');
    document.getElementById('demo').classList.add('started-indicate');
    document.getElementById('demo').innerHTML = 'Game has been started at ( '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+' ).';
        /** Only Click when Game Starts */
    this.enableOnClick();
}
function againclickedFunction() {
    document.getElementById('demo').classList.remove('started-indicate');
    document.getElementById('demo').classList.add('stopped-indicate');
    document.getElementById('demo').innerHTML = 'Game has been stopped at ( '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+' ).';
        /** If Going to stop, then Shutdown the game too. */
    this.disableOnClick();
}
function resetclickedFunction() {
    document.getElementById('demo').classList.remove('started-indicate');
    document.getElementById('demo').classList.remove('stopped-indicate');
    document.getElementById('demo').innerHTML = 'Lets match some Shapes';
        /** Reset whole games => FUTURE Addition record tme of previous Game played  */
    this.resetcards();
}