import Coordinate from '@/app/models/coordinate';
import { useEffect, useState } from 'react';

interface Props {
  data: Coordinate[];
  gradient: string[];
}

const useHeatMap = (props: Props) => {
  const [data, setDate] = useState(
    props.data.map(
      (item) => new google.maps.LatLng(item.getLatitude(), item.getLongitude()),
    ),
  );
  const [heatmap, setHeatmap]: [
    google.maps.visualization.HeatmapLayer,
    Function,
  ] = useState(new google.maps.visualization.HeatmapLayer());
  const [gradient, setGradient] = useState(props.gradient);

  useEffect(() => {
    if (heatmap) {
      heatmap.setData(data);
      heatmap.setOptions({ gradient });
    }
  }, [data, gradient, heatmap]);

  return { data, gradient, heatmap, setHeatmap };
};

export default useHeatMap;
