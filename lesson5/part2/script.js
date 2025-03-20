const images = [
    "https://www.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg",
    "https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg",
    "https://www.worldanimalprotection.org/cdn-cgi/image/width=1920,format=auto/globalassets/images/elephants/1033551-elephant.jpg",
    "https://www.bornfree.org.uk/wp-content/uploads/2023/09/Cheetah-wildlife-hero.jpg",
    "https://c02.purpledshub.com/uploads/sites/62/2022/08/GettyImages-1130384417-c635a0a.jpg?w=1029&webp=1",
    "https://d1jyxxz9imt9yb.cloudfront.net/medialib/2958/image/s768x1300/DRRR202208_DroughtResponse_004_370218_reduced.jpg",
    "https://www.dartmoorzoo.org.uk/wp-content/uploads/2021/01/Tiger-1.jpg",
    "https://www.bu.edu/files/2022/03/feat-iStock-1333294167.jpg",
    "https://friendsofanimals.org/wp-content/uploads/2023/12/foxactualweb.png",
    "https://media.cnn.com/api/v1/images/stellar/prod/180813120103-animals-cats-cute-45170cat-stock-photo.jpg?q=w_2400,h_1334,x_0,y_0,c_fill",
];

let current = 0;

function nextImage() {
    document.getElementById("img").src = images[current];

    current++;

    if (current == images.length) {
        current = 0;
    }
}