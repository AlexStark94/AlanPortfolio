collectionVideos = [
    {
        src: "./assets/0.mp4"
    },
    {
        src: "./assets/1.mp4"
    },
    {
        src: "./assets/2.mp4"
    },
    {
        src: "./assets/3.mp4"
    },
    {
        src: "./assets/4.mp4"
    },
    {
        src: "./assets/5.mp4"
    },
    {
        src: "./assets/6.mp4"
    },
    {
        src: "./assets/7.mp4"
    },

]
collectionPhotos = [
    {
        src: "./assets/10.jpeg"
    },
    {
        src: "./assets/11.jpeg"
    },
    {
        src: "./assets/12.jpeg"
    },
    {
        src: "./assets/13.jpeg"
    },
    {
        src: "./assets/14.jpeg"
    },
    {
        src: "./assets/15.jpeg"
    },
    {
        src: "./assets/16.jpeg"
    },
    {
        src: "./assets/17.jpeg"
    },
]

var onVideo = document.getElementById('onVideo');

var onPhotos = document.getElementById('onPhotos');

collectionVideos.forEach(element => {
    onVideo.innerHtml += `
    <i class="bi bi-play icon"></i>
        <video class="video" autoplay muted loop>
        <source src="´${element.src}´" type="video/mp4" />
    </video>
` 
    console.log(element.src)
});

collectionPhotos.forEach(element => {

    onPhotos.innerHtml += `
    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <img class="collection-img" src="´${element.src}´" alt="" />
      </div>
` 
    console.log(element.src)
});