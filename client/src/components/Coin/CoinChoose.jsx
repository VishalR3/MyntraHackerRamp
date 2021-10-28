export default function CoinChoose({ selectedValue, setSelectedValue }) {
  const coinValues = ["Head", "Tail"];
  return (
    <>
      <div className="container mt-3">
        <div className="text-center">
          <h1 className="h1">Choose Your Value</h1>
        </div>
        <div className="row justify-content-center mt-5 mb-3">
          {coinValues.map((value, index) => (
            <div
              className="col-lg-3 col-sm-6 cursor-pointer"
              key={index}
              onClick={() => setSelectedValue(index)}
            >
              <div
                className={`card diceValueCard place-center mb-3 ${
                  selectedValue === index ? "selectedValue" : ""
                }`}
              >
                <div className="card-body">
                  <span className="diceValue">{value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
