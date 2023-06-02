'use strict'

// 이미지 원본 보기
function showImage(image) {
    let fileCallPath = image.target.getAttribute('src')

    $(".bigPictureWrapper").css("display", "flex").show()

    $(".bigPicture")
        .html(`<img src='${encodeURI(fileCallPath)}'>`)
        .animate({width: '100%', height: '100%'}, 1000)
}

$(() => {
    // 원본 이미지 확대
    $(".product").click(showImage)

    // 원본 이미지 닫기
    $(".bigPictureWrapper").on("click", () => {
        $(".bigPicture").animate({width: '0%', height: '0%'}, 1000)
        setTimeout(() => {
            $(".bigPictureWrapper").hide()
        }, 1000)
    })
})