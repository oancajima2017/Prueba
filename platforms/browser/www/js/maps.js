var app = {
    inicio: function () {
        this.iniciaFastClick();
    },
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    dispositivoListo: function () {
        navigator.geolocation.getCurrentPosition(app.dibujaCoordenadas, app.errorAlSolicitarLocalizacion);
    },

    dibujaCoordenadas: function (position) {
        var mymap = L.map('mapa').setView(
            [position.coords.latitude, position.coords.longitude], 13);
            L.tileLayer('https://api.tiles.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2lhbmthcmxobyIsImEiOiJjamE0ZnlsYnczMGplMnFsN3FtZjRyNzJlIn0.OBW764WeOqE_Mf4Jc47-jg', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18
            }).addTo(mymap);
    },


    errorAlSolicitarLocalizacion: function (error) {
        console.log(error.code + ': ' + error.message);
    }
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
    document.addEventListener('deviceready', function () {
        app.dispositivoListo();
    }, false);
}



