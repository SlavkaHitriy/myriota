import { Box } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import { memo, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2xhdmthaGl0cml5IiwiYSI6ImNsYnpmNmV5cTBiMHIzbnFxejhibXJqd3MifQ.kaeD3uS6BI6qF1wV0w4lrw';

export const Map = memo(() => {
  const mapContainer = useRef<HTMLElement>(null);
  const map = useRef<mapboxgl.Map>(null);
  const [lng, setLng] = useState(-74.0077559885517);
  const [lat, setLat] = useState(40.730021396028796);
  const [zoom, setZoom] = useState(12);

  const renderMap = () => {
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/slavkahitriy/clu8wd2m000sg01prgthyf88f',
        center: [lng, lat],
        zoom
      });

      map.current.on('load', () => {
        map.current!.on('move', () => {
          setLng(Number(map.current!.getCenter().lng.toFixed(4)));
          setLat(Number(map.current!.getCenter().lat.toFixed(4)));
          setZoom(Number(map.current!.getZoom().toFixed(2)));
        });
      });
    }
  };

  const initMap = () => {
    if (!map.current && mapContainer.current) {
      renderMap();
    }
  };

  useEffect(() => {
    initMap();
  }, []);

  return <Box height={'100%'} flex={1} ref={mapContainer} />;
});
