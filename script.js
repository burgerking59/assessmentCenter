images = [['assets/rangeRover/car1.jpg', 'assets/rangeRover/car2.jpg', 'assets/rangeRover/car3.jpg', 'assets/rangeRover/car4.jpg'],['assets/rangeRover/car1.jpg', 'assets/rangeRover/car2.jpg', 'assets/rangeRover/car3.jpg', 'assets/rangeRover/car4.jpg']]

function loadImages() {
    for (j = 0; j < images.length; j++) {
        document.getElementById('images'+j).innerHTML = "<img id="+images[j][0]+" onclick='enlarge(this, "+j+")' src="+images[j][0]+" alt='first image of car' class='main_img'>"
        document.getElementById('images'+j).innerHTML += "<div id='other_images"+j+"' class='other_img_container flex'>"
        for (i = 1; i < images[j].length; i++) {
            document.getElementById('other_images'+j).innerHTML += "<img id="+images[j][i]+" onclick='enlarge(this, "+j+")' src="+images[j][i]+" alt='other image of car' class='other_img'>"
        }
    }
}

function enlarge(img, j) {
    index = images[j].indexOf(img.id)
    images[j].unshift(images[j].splice(index, 1)[0]);
    loadImages()
}