navigator.geolocation.getCurrentPosition(function(location) {

  this.figure = new L.Polyline([], {
    color: 'yellow',
    weight: 5,
    opacity: 0.8,
    smoothFactor: 1
  });
  this.points = []
  this.markers = [];
  this.fields = localStorage.getItem('fields') ? JSON.parse(localStorage.getItem('fields')) : [];
  this.figures = [];


  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  const eps = 0.0001;

  var map = L.map('map').setView(latlng, 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/satellite-streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoic25vd2JybyIsImEiOiJja21hZ24xMTcxcjZuMnBueHdvZGNqZGd4In0.1ca-njocUszsjgM28V3ujw',
      renderer: L.svg(),
  }).addTo(map);

  if(this.fields) {
    this.fields.forEach((field) => {
      let figure = new L.Polyline(field.points, {
        color: 'yellow',
        weight: 5,
        opacity: 0.8,
        smoothFactor: 1
      })
      figure.addTo(map)
      this.figures.push(figure)
    });
  }


  const addFieldBtnAdd = document.querySelector('.field__btn__add');
  const addFieldBtnDone = document.querySelector('.field__btn__done');
  const addFieldBtnDelete = document.querySelector('.field__btn__delete');



  let handleMapClick = (e) => {
    this.points.push([e.latlng.lat, e.latlng.lng]);
    this.figure.remove(map)

    markers.push(L.marker([e.latlng.lat, e.latlng.lng], {
      icon: L.icon({
        iconUrl: '../assets/images/pointer.png',
        iconSize: [8, 10],
        iconAnchor: [this.points[this.points.length - 1]],
      }),
    }));
    markers[this.markers.length - 1].addTo(map)
    this.figure = new L.Polyline(this.points, {
      color: 'yellow',
      weight: 5,
      opacity: 0.8,
      smoothFactor: 1
    });
    this.figure.addTo(map);

    if(Math.abs(e.latlng.lat - this.points[0][0]) <= eps && Math.abs(e.latlng.lng - this.points[0][1]) <= eps && this.points.length !== 1) {
      this.points.pop();
      this.points.push(this.points[0]);
      this.figure.remove(map);

      this.fields.push({points, index: this.fields.length});

      this.figure = new L.Polyline(this.points, {
        color: 'yellow',
        weight: 5,
        opacity: 0.8,
        smoothFactor: 1
      });
      this.figure.addTo(map);
      this.figures.push(figure);

      this.markers[this.markers.length - 1].remove(map);
      this.markers.pop();
      markers.push(L.marker(this.points[0], {
        icon: L.icon({
          iconUrl: '../assets/images/pointer.png',
          iconSize: [8, 10],
          iconAnchor: [this.points[0]],
        }),
      }));
      markers[this.markers.length - 1].addTo(map)

      this.figure = new L.Polyline([], {
        color: 'yellow',
        weight: 5,
        opacity: 0.8,
        smoothFactor: 1
      });
      this.points = [];
    }

  }

  let addField = (e) => {

    map.on('click', handleMapClick);
    document.querySelector('.map').style.cursor = 'crosshair'
  };

  let saveField = (e) => {
    console.log(this.fields);

    localStorage.setItem('fields', JSON.stringify(this.fields))

    map.off('click', handleMapClick);
    document.querySelector('.map').style.cursor = ''
    this.markers.forEach((marker) => marker.remove(map))
  }

  let deleteField = (e) => {
    console.log(this.fields);
    // this.fields[e.target.id].remove(map);
    // this.fields.filter((field, index) => index != e.target.id)
    this.figures.pop().remove(map);
    this.fields.pop();
    localStorage.setItem('fields', JSON.stringify(this.fields));
  }



  addFieldBtnAdd.addEventListener('click', addField)
  addFieldBtnDone.addEventListener('click', saveField);
  addFieldBtnDelete.addEventListener('click', deleteField)


});
