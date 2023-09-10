import React, { useEffect, useState } from "react";
import Success from "./Info";

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Function to initialize the map
    const mapStyles = [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#4d0000" }],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#4d0000" }, { weight: 1.2 }],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f5e6e6" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffeded" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#4d0000" }, { weight: 0.2 }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#ffecec" }],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{ color: "#ffefef" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#f5e6e6" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9f2f2" }],
      },
    ];

    window.initMap = function () {
      // Create a map centered at the specified coordinates
      const start = { lat: 30.617712020874023, lng: -96.31748962402344 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: start,
        zoom: 14,
        styles: mapStyles,
      });

      // Define marker positions and titles
      const markers = [
        {
          position: { lat: 30.617712020874023, lng: -96.31748962402344 },
          title: "Sweet Eugenes",
        },
        {
          position: { lat: 30.61775016784668, lng: -96.34651184082031 },
          title: "The Beef and Reef Food Truck",
        },
        {
          position: { lat: 30.59604263305664, lng: -96.29908752441406 },
          title: "1541 Pastries and Coffee",
        },
        {
          position: { lat: 30.6309871673584, lng: -96.3308334350586 },
          title: "Sabi Boutique",
        },
        {
          position: { lat: 30.625076293945312, lng: -96.30311584472656 },
          title: "Stampede College Station",
        },
        {
          position: { lat: 30.608556747436523, lng: -96.31932067871094 },
          title: "Maroon & White Barbershop",
        },
        {
          position: { lat: 30.579404830932617, lng: -96.28224182128906 },
          title: "Stella Southern Cafe",
        },
        {
          position: { lat: 30.559125900268555, lng: -96.26020050048828 },
          title: "Raging Bull Street Taco's",
        },
        {
          position: { lat: 30.63993263244629, lng: -96.31254577636719 },
          title: "Kolache Rolf's",
        },
        {
          position: { lat: 30.6209774017334, lng: -96.35230255126953 },
          title: "E11even Bar and Grill",
        },
        {
          position: { lat: 30.598363876342773, lng: -96.30474090576172 },
          title: "Aggieland Scuba",
        },
        {
          position: { lat: 30.643972396850586, lng: -96.33187103271484 },
          title: "A Wild Hair Salon & Co",
        },
        {
          position: { lat: 30.615243911743164, lng: -96.31977081298828 },
          title: "What's The Buzz Specialty Coffee",
        },
        {
          position: { lat: 30.674240112304688, lng: -96.37293243408203 },
          title: "Brazos Cedar Works",
        },
        {
          position: { lat: 30.620773315429688, lng: -96.34392547607422 },
          title: "BonAppeTea",
        },
        {
          position: { lat: 30.674015045166016, lng: -96.37451934814453 },
          title: "The Village Cafe",
        },
        {
          position: { lat: 30.606260299682617, lng: -96.31072235107422 },
          title: "Gomez Shoe Repair",
        },
        {
          position: { lat: 30.622304916381836, lng: -96.32780456542969 },
          title: "Burdett & Son Outdoor Adventure Shop",
        },
        {
          position: { lat: 30.593849182128906, lng: -96.32241821289062 },
          title: "M&M Apparel",
        },
        {
          position: { lat: 30.623722076416016, lng: -96.30840301513672 },
          title: "Bea's Alterations",
        },
        {
          position: { lat: 30.600168228149414, lng: -96.30474853515625 },
          title: "BCS Asian Market",
        },
        {
          position: { lat: 30.607484817504883, lng: -96.30683135986328 },
          title: "iPhở",
        },
        {
          position: { lat: 30.621509552001953, lng: -96.32634735107422 },
          title: "University Flowers",
        },
        {
          position: { lat: 30.623371124267578, lng: -96.3284912109375 },
          title: "Brazos Valley Computers",
        },
        {
          position: { lat: 30.67440414428711, lng: -96.372802734375 },
          title: "The String & Horn Shop",
        },
        {
          position: { lat: 30.675458908081055, lng: -96.3734359741211 },
          title: "Zeitman's Grocery Store",
        },
        {
          position: { lat: 30.630943298339844, lng: -96.33013153076172 },
          title: "Thorn Music Center",
        },
      ];

      const infoWindow = new window.google.maps.InfoWindow();

      // Create markers and add click listeners
      markers.forEach(({ position, title }) => {
        const marker = new window.google.maps.Marker({
          position,
          map,
          title,
        });

        // Add click listener to open the info window
        marker.addListener("click", () => {
          infoWindow.setContent(`<div>${title}</div>`); // Set content here
          infoWindow.open(map, marker);
        });

        // Add mouseover listener to show info window when hovering over marker
        marker.addListener("mouseover", () => {
          infoWindow.setContent(`<div>${title}</div>`); // Set content here
          infoWindow.open(map, marker);
        });

        // Add mouseout listener to close info window when not hovering over marker
        marker.addListener("mouseout", () => {
          infoWindow.close();
        });
      });
    };

    const serviceURL = import.meta.env.VITE_MAP_URL;

    const script = document.createElement("script");
    script.src = serviceURL;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Success />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div id="map" style={{ width: "100%", height: "450px" }} />
      </div>
    </>
  );
};

export default Map;
