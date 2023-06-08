import { HeatmapLayerF } from '@react-google-maps/api';
import useHeatMap from './useState';
import Coordinate from '@/app/models/coordinate';

interface Props {
  data: Coordinate[];
  gradient?: string[];
}

const HeatMap = ({ ...props }: Props) => {  
  const { data, gradient, setHeatmap } = useHeatMap({
    data: props.data,
    gradient: [
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
  });  
  return (
    <HeatmapLayerF
      data={data}
      options={{ gradient }}
      onLoad={(value: google.maps.visualization.HeatmapLayer) =>
        setHeatmap(value)
      }
    />
  );
};

export default HeatMap;
