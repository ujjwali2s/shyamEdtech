import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
  // Jamshedpur, Jharkhand coordinates
  const position = [22.7926, 86.1841];

  useEffect(() => {
    // Force map refresh when component mounts
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-12 bg-white rounded-xl shadow-xl p-4 overflow-hidden"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h2>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold">Your Company Name</h3>
                <p>Jamshedpur, Jharkhand</p>
                <p>India</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </motion.div>
  );
};

export default MapSection;