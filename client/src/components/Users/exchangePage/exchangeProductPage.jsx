import "./exchangeProductPage.css";
import Button from "react-bootstrap/Button";

export const ExchangeProductPage = () => {
  return (
    <div>
      <div className="exchangepage-main">
      <div class="text-center">
  <div class="row">
    <div class="col-6 exchangebtn">
    <div className="exchangepage-requestbtn">
          <div className="d-flex">
            <Button variant="white" size="lg">
              Recived Request
            </Button>
          </div>
        </div>
    </div>
    <div class="col-6 exchangebtn">
    <div className="exchangepage-requestbtn">
          <div className="d-flex">
            <Button variant="white" size="lg">
            Request item
            </Button>
          </div>
        </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};