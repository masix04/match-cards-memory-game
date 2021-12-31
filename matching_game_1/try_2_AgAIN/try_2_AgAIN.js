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
            // document.getElementById('t-1').classList.add('rotate-image'); /** Rotate image when Selected */
            console.log('Already-clicked');
        }else{
            console.log('clicked');
            document.getElementById('t-1').classList.add('rotate-image'); /** Rotate image when Selected */
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
            document.getElementById('t-2').classList.add('rotate-image'); /** Rotate image when Selected */
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
            document.getElementById('t-3').classList.add('rotate-image'); /** Rotate image when Selected */
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
            document.getElementById('t-4').classList.add('rotate-image'); /** Rotate image when Selected */
            document.getElementById('t-4').classList.add('show-image');
            document.getElementById('card-4').classList.remove('card');
            document.getElementById('card-4').classList.add('card-clicked');
            this.updateCountOfAdditionOfClasses();
            console.log(document.getElementById('t-4').src);
        }
    }function hideCard4() {
        document.getElementById('t-4').classList.remove('show-image');
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
            document.getElementById('t-'+(i+1)).classList.remove('rotate-image');
            document.getElementById('t-'+(i+1)).classList.add('rotate-reverse-image');
            document.getElementById('card-'+(i+1)).classList.remove('enable-clicks');
            document.getElementById('card-'+(i+1)).classList.add('disable-clicks');
            document.getElementById('card-'+(i+1)).ondblclick = ''; /** Disabling */
        }
        console.log(document.getElementById('t-1'));
        console.log('disabled');
    }
    function enableOnClick() {
        let cards = document.getElementsByTagName('td'); /** WHY 'td' because it will all tags, no matter class removeS OR adds => TAG not removes*/
        for(let i=0;i<cards.length;i++) {
            document.getElementById('t-'+(i+1)).classList.remove('rotate-reverse-image');
            document.getElementById('card-'+(i+1)).classList.remove('disable-clicks');
            document.getElementById('card-'+(i+1)).classList.add('enable-clicks');
        }
       
        console.log('enabled');
    }
    function resetcards() {
        let cards = document.getElementsByTagName('td');
        for(let i=0;i<cards.length;i++) {
            if(document.getElementsByClassName('card')) {
                document.getElementById('t-'+(i+1)).classList.remove('rotate-image');
                document.getElementById('t-'+(i+1)).classList.remove('rotate-reverse-image');
                document.getElementById('card-'+(i+1)).classList.remove('disable-clicks');
                document.getElementById('card-'+(i+1)).classList.remove('enable-clicks');
            }else{
                document.getElementById('card-'+(i+1)).classList.add('card');
            }
        }
        console.log(document.getElementById('t-1'));
        console.log('restarted');
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
function startclickedFunction() {
    document.getElementById('demo').classList.remove('stopped-indicate');
    document.getElementById('demo').classList.add('started-indicate');
    document.getElementById('demo').innerHTML = 'Game has been started at ( '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+' ).';
        /** Only Click when Game Starts */
    this.enableOnClick();
}
function stopclickedFunction() {
    document.getElementById('demo').classList.remove('started-indicate');
    document.getElementById('demo').classList.add('stopped-indicate');
    document.getElementById('demo').innerHTML = 'Game has been stopped at ( '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+' ).';
    // console.log(document.getElementById('demo'));
    /** If Going to stop, then Shutdown the game too. */
    this.disableOnClick();
}
function resetclickedFunction() {
    document.getElementById('demo').classList.remove('started-indicate');
    document.getElementById('demo').classList.remove('stopped-indicate');
    document.getElementById('demo').innerHTML = "Let's match some shapes";
        /** Reset whole games => FUTURE Addition record tIme of previous Game played  */
    this.resetcards();
}
var defaultHTML='';
window.onload = function(e) {
    var applyOnDiv = document.getElementById('game-container');
    this.defaultHTML = applyOnDiv.innerHTML;
    console.log(this.defaultHTML);
}
/** LIKE Scripting In JavaScript */
function update_grid(peremeter) {
    $filename = peremeter+'x'+peremeter+'_cards.html';
    // console.log($filename);
    var applyOnDiv = document.getElementById('game-container');
    // const defaultHTML = applyOnDiv.innerHTML;
    // console.log(applyOnDiv.innerHTML);
    if(peremeter==2) {
        applyOnDiv.innerHTML = this.defaultHTML;
    } else {
        var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', $filename, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) { 
                applyOnDiv.innerHTML = xhr.responseText;
            } 
        }
        xhr.send();
        // applyOnDiv.load($filename);
    }
    // applyOnDiv.innerHTML = '00:00:00-00-00-00';
}