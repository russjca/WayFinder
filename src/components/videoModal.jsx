import { Modal } from "antd";
import { useInfoContext } from "../context/infoContext";
const VideoModal = ({
  visible,
  onCancel,
  selectedNodeImage,
  videoPlaying,
  InfoOffice,
}) => {
  const { officeInfo } = useInfoContext();
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true}
      width={800}
    >
      <div>
        {selectedNodeImage && (
          <video
            src={selectedNodeImage}
            alt="3D VIDEO"
            style={{ width: "100%" }}
            autoPlay={videoPlaying}
            loop
            muted
          />
        )}
      </div>
      <div className="text-center font-bold text-lg">
        <p>{officeInfo}</p>
        <p>{InfoOffice}</p>
      </div>
    </Modal>
  );
};

export default VideoModal;
