using Microsoft.AspNetCore.Mvc;
using server.Dtos;
using server.Services;


namespace server.Controllers{
    [ApiController]
    public class OrderController: ControllerBase{
        private readonly OrderService _orderService;

        public OrderController( OrderService _orderService){
             _orderService = orderService;
        }

        //create order
        //get order
    }
}