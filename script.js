console.log('OH MY GOD THEYRE HAVING A FIRE...Sale')

let clickCard = '';

var cardsArr = ["https://smartcdn.prod.postmedia.digital/nationalpost/wp-content/uploads/2013/05/funke1.jpg?quality=90&strip=all&w=288",
    "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-arrested-development-david-cross.jpg",
    "https://us-east-1.linodeobjects.com/gunaxin/2010/12/tobias1.png",
    "https://pyxis.nymag.com/v1/imgs/327/edf/86a0bc145b8026e67d875393100c3c6056-27-5-Tobias.rsquare.w700.jpg",
    "https://i.redd.it/03qvpj1qvm711.jpg",
    "https://pyxis.nymag.com/v1/imgs/1b5/a70/76e64eeafe718092d5f7557d04606dac9e-19-tobias-funke.rsquare.w330.jpg",
    "https://pbs.twimg.com/profile_images/644157694136422400/d4ho5P5S_400x400.jpg",
    "https://i.pinimg.com/originals/37/38/ef/3738efe9ed04fb5062a501db05fa0949.png",
    "https://i.pinimg.com/originals/73/87/c6/7387c62541a1a78d1eb04e5d003874d3.jpg"]

// creates a variable of all the cards on the html and puts them in an array
var cards = [...document.querySelectorAll('img')];
console.log(cards)

// a for of loop that goes through the cardsArr array; 
// it first finds a card in the cards array at a random index using the Math.random method, removes that card from the array and then places a key(image source) into the image element by using setAttribute
//there is a card A and B because there are 9 src's in the cardArr you want them to be used twice (matching cards)
//this portion is for reseting/shuffling the cards, this happens everytime the page is refreshed so the button on the html is set to refresh the page

for (let key of cardsArr) {
    var cardAIndex = parseInt(Math.random() * cards.length);
    var cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.src += `${key}`
    cardA.setAttribute('src', key)

    var cardBIndex = parseInt(Math.random() * cards.length);
    var cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.src += `${key}`
    cardB.setAttribute('src', key)
}

// on the html all the images have a class of img-hidden which gives all the images 0% opacity
//so we created a function that removes the img-hidden class and replaces it with '' and then adds a className of done instead

// second if statement is used to see if you clicked the card if you did it goes on to the else if statement that checks to see 
// if the sources for both cards clicked are the same clickCard gets set to an empty string, else the clickCard and Target's classnames
// are changed from done back to img-hidden using a settimeout method and the clickCard is set to an empty string

//we added the clickedCard function on every image/card on the html using the onClick attirbute
var clickedCard = (event) => {
    var target = event.currentTarget;

    if (target === clickCard || target.className.includes('done')) {
        return;
    }

    // console.log('clicked', target); to check if the card is clicked by console logging clicked and the target(event.currentTarget)
    // console.log(target.src); to see if this will give you the source of the clicked image, it does!

    target.className = target.className.replace('img-hidden', '')
        .trim();

    target.className += 'done';

    if (!clickCard) {
        clickCard = target;
        console.log(clickCard)
    } else if (clickCard) {
        if (clickCard.getAttribute('src') === target.getAttribute('src')) {
            console.log('these cards match')
            clickCard = '';
        } else {
            console.log('these cards dont match')
            setTimeout(() => {
                clickCard.className = clickCard.className.replace('done', '').trim() + 'img-hidden';
                target.className = target.className.replace('done', '').trim() + 'img-hidden';
                clickCard = '';
            }, 700);

        }
    }
}





