
import VehicleDetailScreen from "@/library/components/organisms/vehicle-detail-screen";

export default function VehicleDetailPage({ params }: { params: any }) {
  return <VehicleDetailScreen id={params.id} />;
}
