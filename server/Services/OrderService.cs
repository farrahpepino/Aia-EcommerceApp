using server.Dtos;
using server.Controllers;
using server.Repositories;

namespace server.Services{
    public class OrderService{
        private readonly OrderRepository _orderRepository;

        public OrderService (OrderRepository orderRepository){
            _orderRepository = orderRepository;
        }

        // public Task
    }
}