import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { remove } from "./Redux/action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetails = () => {
 const [data,setData]=useState([]);
 console.log(data,"data");
  const {id}=useParams();
  // console.log(id);

  const navigate=useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
  const compare=()=>{
    let compareData=getData.filter((e)=>{
      return(
        e.id==id
      )
    })
    setData(compareData);
  }

  useEffect(()=>{
    compare();
  },[id])
  const notify =()=>{
    toast("Item has been removed from cart");
  }

  const dispatch=useDispatch();
  const del=(id)=>{
    dispatch(remove(id));
    navigate("/");
    notify();
  }
  return (
    <>
    {
      data.map((item)=>{
        return(
          <div className="container mt-2">
        <h1 className="text-center">Item in your bag</h1>
        <section className="container mt-3 d-flex mx-5">
          <div className="item_img px-5">
            <img src={item.image}></img>
          </div>
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>
                    <strong>Wine : </strong> {item.wine}
                  </p>
                  <p>
                    <strong>Winery : </strong> {item.winery}
                  </p>
                  <p>
                    <strong>Rating : </strong> {item.rating.average}
                  </p>
                  <p>
                    <strong>Ratings : </strong> {item.rating.reviews}
                  </p>
                  
                </td>
                <td><i class="fa-solid fa-trash text-danger" onClick={()=>{del(item.id)}}></i></td>
              </tr>
          
                
                  
              
            </Table>
            <div style={{ width:100, cursor:"pointer",background:"#ddd",color:"#111"}}>
                  <span style={{fontSize:24,margin:10}}>-</span>
                  <span style={{fontSize:24,margin:10}}>0</span>
                  <span style={{fontSize:24,margin:10}}>+</span>
                </div>
          </div>
        </section>
      </div>
        )
      })
    }
      
    </>
  );
};

export default CardDetails;
