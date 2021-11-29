<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>Map starts here</p>
    <div id="map"></div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0px;
}
#map {
  height: 700px;
  max-width: 700px;
  margin: auto;
}
</style>

<script>
/* global mapboxgl */
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      places: [
        { lat: -25.363, lng: 131.044, description: "A place in Australia" },
        { lat: -33.8675, lng: 151.207, description: "The main city!" },
      ],
    };
  },

  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [35.213711, 31.768318], // starting position [lng, lat]
      zoom: 0.5, // starting zoom
    });
    console.log(map);
    const popup = new mapboxgl.Popup({ offset: 25 }).setText("Actualize Coding Bootcamp.");

    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat([-87.63443, 41.8923]).setPopup(popup).addTo(map);
    console.log(marker1);
    // const marker2 = new mapboxgl.Marker()
    //   .setLngLat([this.places[0].lng, this.places[0].lat])
    //   .setPopup(popup)
    //   .addTo(map);
    // console.log(marker2);
    this.places.forEach((place) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);

      const marker = new mapboxgl.Marker().setLngLat([place.lng, place.lat]).setPopup(popup).addTo(map);
      console.log(marker);
    });
  },
};
</script>
