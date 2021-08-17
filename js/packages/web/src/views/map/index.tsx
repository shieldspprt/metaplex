import React from "react";

export default function GMap(props: {
  src?: any;
  height?: any
  width?: any
}){
  var googleMapLink = "https://www.google.com/maps/embed/v1/place?q="+ encodeURI(props.src.src)+"&zoom=10&key=AIzaSyBv5BiEwwLFZuoHbzmbPTEYS-ug9G_wxOU"
  return (
    // <iframe id="gmap_canvas" src={props.src.src} width= {props.src.width} height = {props.src.height}></iframe>
    <iframe width= {props.src.width} height = {props.src.height}
    src={googleMapLink} allowFullScreen data-aos="fade-left" data-aos-duration="3000"></iframe> 
  );
} 