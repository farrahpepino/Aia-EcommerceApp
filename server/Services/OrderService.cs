using server.Dtos;
using server.Repositories;

namespace server.Services{
    public class OrderService{
        private readonly OrderRepository _orderRepository;

        public OrderService (OrderRepository orderRepository){
            _orderRepository = orderRepository;
        }

        //create order
        //get order
    }
}