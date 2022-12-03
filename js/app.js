window.onload = () => {
    let lpLinks = [...document.getElementsByClassName("lp_item")];
    for (const link in lpLinks) {
        lpLinks[link].addEventListener('click', ()=>{
            window.open(lpLinks[link].dataset.url,'_blank');
        })
    }
}
/* No te olvides de suscribirte a nuestro canal! https://www.youtube.com/c/developeando */