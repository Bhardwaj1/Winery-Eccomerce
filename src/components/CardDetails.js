import React from "react";
import { Table } from "react-bootstrap";

const CardDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h1 className="text-center">Item in your bag</h1>
        <section className="container mt-3 d-flex mx-5">
          <div className="item_img px-5">
            <img src="https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png"></img>
          </div>
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Wine : </strong> Emporda 2012
                  </p>
                  <p>
                    <strong>Winery : </strong> Maselva
                  </p>
                  <p>
                    <strong>Rating : </strong> 4.9
                  </p>
                  
                </td>
                <td><button>-</button>
                  <button>0</button>
                  <button>+</button></td>
                  <td><i class="fa-solid fa-trash text-danger"></i></td>
              </tr>
            </Table>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
