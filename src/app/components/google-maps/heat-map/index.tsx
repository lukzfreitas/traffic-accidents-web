import Coordinate from '@/app/models/coordinate';
import { HeatmapLayerF } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';

interface Props {  
  data: Coordinate[];
  gradient?: string[];
}

const HeatMap = ({
  gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)',
  ],
  ...props
}: Props) => {
  const [data, setData]: [google.maps.LatLng[], Function] = useState([]);  
  const [heatmap, setHeatmap]: [google.maps.visualization.HeatmapLayer, Function] = useState(new google.maps.visualization.HeatmapLayer());

  useEffect(() => {
    setData(props.data.map(
      (item) =>
        new google.maps.LatLng(item.getLatitude(), item.getLongitude()),
    ));    
    console.log(data);
    if (heatmap) {
      heatmap.setData(data);
      heatmap.setOptions({gradient});      
    }
  }, [props.data]);

  return (    
    <HeatmapLayerF
      data={data}
      options={{
        gradient,
        // opacity: 0.6,
        // radius: 20
      }}
      onLoad={(value: google.maps.visualization.HeatmapLayer) => setHeatmap(value)}
    />
  );
};

export default HeatMap;
