document.getElementById('nav-search-submit-button')!.onclick = function() {
    // window.alert(document.getElementById('twotabsearchtextbox')!)
    remove_search()
}

function remove_search() {
    const url = convertKeyword( (document.getElementById('twotabsearchtextbox')! as HTMLInputElement).value )
    window.open(url, '_blank')
}

function convertKeyword(input:string) {
    let shaped = input.replace(/^\s+|\s+$/g, "")
    shaped = utf2ascii(shaped)
    shaped = shaped.replace(/\s+/g, '+')
    return "https://amazon.co.jp/s?k=" + shaped + "&__mk_ja_JP=カタカナ&ref=nb_sb_noss" + "&emi=AN1VRQENFRJN5"
}

function utf2ascii(input:string) {
    const utf = ["%","!","\"","#","$","&","'","(",")","*","+",",","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"]
    const ascii = ["%25","%21","%22","%23","%24","%26","%27","%28","%29","%2A","%2B","%2C","%2F","%3A","%3B","%3C","%3D","%3E","%3F","%40","%5B","%5D","%5E","%60","%7B","%7C","%7D","%7E"]
    let shaped = input

    utf.forEach(function(e, index){
        shaped = shaped.replace(e, ascii[index])
    })
    return shaped
}