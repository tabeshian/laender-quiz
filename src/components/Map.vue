<template>
  <div>
    <l-map id="map" ref="map" :zoom="zoom" :center="center" :options="options">
      <l-geo-json
        ref="countries"
        :geojson="countries"
        :options="geojsonOptions"
        @click="onFeatureClick"
      ></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson, LTooltip } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import countries from "@/assets/geojson/countries.js";
import colors from "@/assets/scss/main.scss";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      zoom: 2,
      center: [47.41322, -1.219482],
      bounds: null,
      countries: countries,
      randomCountries: null,
      options: {
        minZoom: 2,
        maxZoom: 6,
        doubleClickZoom: false,
        zoomControl: false
      },
      geojsonOptions: {
        style: () => this.resetStyle()
      },
      selectedCountry: null
    };
  },
  computed: {
    ...mapState(["round"]),
    ...mapGetters(["currentCountry"])
  },
  methods: {
    // reset style
    resetStyle() {
      return {
        weight: 1,
        color: colors.yellow,
        fillColor: colors.lighterBlue,
        fillOpacity: 0.75
      };
    },
    // on polygon click
    onFeatureClick(e) {
      if (!this.$store.state.gameIsRunning) {
        return;
      }
      this.selectedCountry = e.layer.feature.properties.NAME_DE;
      this.$store.commit("selectCountry", this.selectedCountry);
      if (this.$store.state.correctAnswer) {
        e.layer.setStyle({
          fillColor: colors.green
        });
      } else {
        e.layer.setStyle({
          fillColor: colors.red
        });
      }
    }
  },
  watch: {
    // reset style when new game started
    round(val) {
      if (val === 0) {
        this.geojsonOptions.style = () => this.resetStyle();
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
#map {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: $blue-darkest;
  .leaflet-control-attribution {
    background: inherit;
    a {
      font-size: 1rem;
      color: $yellow;
    }
  }
  .leaflet-interactive {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
    &:hover,
    &:focus {
      opacity: 1;
    }
  }
}
</style>
