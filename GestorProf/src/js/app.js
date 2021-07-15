window.onscroll = () => {
    // Go Top Button
    if (window.pageYOffset >=200) {
        document.querySelector('.go-top').style.right = "0%";
    }else{
        document.querySelector('.go-top').style.right = "-100%";
    }

    document.querySelector('.go-top').addEventListener('click', () => {
        document.body.scrollTop = '0';
        document.documentElement.scrollTop = '0';
    });

}