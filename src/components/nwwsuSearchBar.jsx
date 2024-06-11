import { Button, Card, Space, AutoComplete } from "antd";
import { useInfoContext } from "../context/infoContext.jsx";
import A from "../assets/A.png";
import B from "../assets/B.png";

const SearchBar = ({
  sourceNode,
  deleteEdges,
  disableInput,
  generateEdges,
  handleSearchInput,
  options,
  setNodeClicked,
}) => {
  const { endNode, setEndNode } = useInfoContext();
  const handleClick = (node) => {
    setEndNode(node);
    setNodeClicked(true);
  };
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center space-y-3 w-56 bg-green-900 absolute"
        style={{ left: 970, top: 50 }}
      >
        <Card
          style={{
            width: 330,
            height: 190,
            background: "#157f3d",
            border: "none",
          }}
        >
          <Space className="flex flex-col space-y-2">
            <Space className="flex flex-col  space-y-1">
              <div className="flex flex-row space-x-1 ">
                <div>
                  <img src={A} alt="" style={{ width: "40px" }} />
                </div>
                <div className="flex flex-row justify-center items-center bg-white w-60 h-10 rounded-lg ">
                  <div
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    {sourceNode}
                  </div>
                </div>
              </div>

              <div className="flex flex-row space-x-1 ">
                <div>
                  <img src={B} alt="" style={{ width: "40px" }} />
                </div>
                <AutoComplete
                  className={`bg-white w-60 h-10 border-solid rounded-lg font-bold ${
                    disableInput ? "cursor-not-allowed" : ""
                  }`}
                  style={{
                    fontFamily: "Poppins",
                    color: "black",
                    backgroundColor: "white",
                    textAlign: "center",
                  }}
                  value={endNode}
                  onSearch={handleSearchInput}
                  options={options}
                  disabled={disableInput}
                  onSelect={handleClick}
                ></AutoComplete>
              </div>
            </Space>

            <Space className="space-x-5">
              <Button
                type="primary"
                size="large"
                onClick={generateEdges}
                style={{ fontWeight: "bold", fontFamily: "Poppins" }}
              >
                Create Path
              </Button>
              <Button
                type="primary"
                danger
                size="large"
                onClick={deleteEdges}
                style={{ fontWeight: "bold", fontFamily: "Poppins" }}
              >
                Delete Path
              </Button>
            </Space>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default SearchBar;
